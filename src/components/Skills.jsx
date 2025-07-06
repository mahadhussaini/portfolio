import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Grid,
  Chip,
  TextField,
  Tooltip,
  Fade,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  LinearProgress,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Search as SearchIcon, Code as CodeIcon, Storage, Cloud, Security, Build, BugReport, Web, DeveloperMode } from "@mui/icons-material";

// Skill data with proficiency levels (1-5)
const skills = [
  // Frontend Technologies
  { name: "React.js", category: "Frontend", description: "Modern UI library for building interactive web applications", level: 5, icon: <CodeIcon /> },
  { name: "Next.js", category: "Frontend", description: "Full-stack React framework with SSR and SSG", level: 5, icon: <CodeIcon /> },
  { name: "TypeScript", category: "Frontend", description: "Typed superset of JavaScript for better development experience", level: 5, icon: <DeveloperMode /> },
  { name: "JavaScript (ES6+)", category: "Frontend", description: "Modern JavaScript with advanced features", level: 5, icon: <DeveloperMode /> },
  { name: "HTML5", category: "Frontend", description: "Semantic markup for web applications", level: 5, icon: <Web /> },
  { name: "CSS3", category: "Frontend", description: "Advanced styling with Flexbox, Grid, and animations", level: 5, icon: <Web /> },
  { name: "Material UI", category: "Frontend", description: "React component library for rapid UI development", level: 5, icon: <Web /> },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework for rapid styling", level: 4, icon: <Web /> },
  { name: "Redux Toolkit", category: "Frontend", description: "State management for React applications", level: 4, icon: <CodeIcon /> },
  { name: "React Query", category: "Frontend", description: "Data fetching and caching for React", level: 4, icon: <CodeIcon /> },
  { name: "Framer Motion", category: "Frontend", description: "Animation library for React", level: 4, icon: <CodeIcon /> },
  { name: "React Native", category: "Frontend", description: "Cross-platform mobile development", level: 4, icon: <CodeIcon /> },

  // Backend Technologies
  { name: "Node.js", category: "Backend", description: "JavaScript runtime for server-side development", level: 5, icon: <Build /> },
  { name: "Express.js", category: "Backend", description: "Fast, unopinionated web framework for Node.js", level: 5, icon: <Build /> },
  { name: "Python", category: "Backend", description: "Versatile programming language for backend and ML", level: 4, icon: <DeveloperMode /> },
  { name: "FastAPI", category: "Backend", description: "Modern Python web framework for APIs", level: 4, icon: <Build /> },
  { name: "GraphQL", category: "Backend", description: "Query language for APIs with strong typing", level: 4, icon: <CodeIcon /> },
  { name: "RESTful APIs", category: "Backend", description: "API design principles and best practices", level: 5, icon: <CodeIcon /> },
  { name: "Microservices", category: "Backend", description: "Distributed system architecture", level: 4, icon: <Build /> },
  { name: "Serverless", category: "Backend", description: "Cloud-native serverless architecture", level: 4, icon: <Cloud /> },

  // Database Technologies
  { name: "MongoDB", category: "Database", description: "NoSQL document database", level: 5, icon: <Storage /> },
  { name: "PostgreSQL", category: "Database", description: "Advanced open-source relational database", level: 4, icon: <Storage /> },
  { name: "Redis", category: "Database", description: "In-memory data structure store", level: 4, icon: <Storage /> },
  { name: "Elasticsearch", category: "Database", description: "Distributed search and analytics engine", level: 3, icon: <Storage /> },
  { name: "Database Design", category: "Database", description: "Schema design and optimization", level: 4, icon: <Storage /> },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud", description: "Amazon Web Services cloud platform", level: 4, icon: <Cloud /> },
  { name: "Docker", category: "Cloud", description: "Containerization platform", level: 4, icon: <Cloud /> },
  { name: "Kubernetes", category: "Cloud", description: "Container orchestration platform", level: 3, icon: <Cloud /> },
  { name: "CI/CD", category: "Cloud", description: "Continuous Integration and Deployment", level: 4, icon: <Build /> },
  { name: "GitHub Actions", category: "Cloud", description: "Automated workflows and deployments", level: 4, icon: <Build /> },
  { name: "Jenkins", category: "Cloud", description: "Automation server for CI/CD", level: 3, icon: <Build /> },
  { name: "Terraform", category: "Cloud", description: "Infrastructure as Code", level: 3, icon: <Cloud /> },

  // Testing & Quality
  { name: "Jest", category: "Testing", description: "JavaScript testing framework", level: 4, icon: <BugReport /> },
  { name: "Cypress", category: "Testing", description: "End-to-end testing framework", level: 4, icon: <BugReport /> },
  { name: "React Testing Library", category: "Testing", description: "Testing utilities for React", level: 4, icon: <BugReport /> },
  { name: "Unit Testing", category: "Testing", description: "Component and function testing", level: 4, icon: <BugReport /> },
  { name: "Integration Testing", category: "Testing", description: "API and service testing", level: 4, icon: <BugReport /> },

  // Security
  { name: "JWT", category: "Security", description: "JSON Web Token authentication", level: 4, icon: <Security /> },
  { name: "OAuth 2.0", category: "Security", description: "Authorization framework", level: 4, icon: <Security /> },
  { name: "API Security", category: "Security", description: "REST API security best practices", level: 4, icon: <Security /> },
  { name: "Data Encryption", category: "Security", description: "Encryption and data protection", level: 3, icon: <Security /> },

  // Tools & Utilities
  { name: "Git", category: "Tools", description: "Version control system", level: 5, icon: <Build /> },
  { name: "VS Code", category: "Tools", description: "Code editor and development environment", level: 5, icon: <Build /> },
  { name: "Postman", category: "Tools", description: "API development and testing", level: 4, icon: <Build /> },
  { name: "Webpack", category: "Tools", description: "Module bundler for JavaScript", level: 3, icon: <Build /> },
  { name: "Vite", category: "Tools", description: "Fast build tool for modern web development", level: 4, icon: <Build /> },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", description: "Analytical thinking and solution design", level: 5, icon: <DeveloperMode /> },
  { name: "Team Collaboration", category: "Soft Skills", description: "Working effectively in cross-functional teams", level: 5, icon: <DeveloperMode /> },
  { name: "Agile/Scrum", category: "Soft Skills", description: "Project management methodologies", level: 4, icon: <DeveloperMode /> },
  { name: "Code Review", category: "Soft Skills", description: "Peer code review and feedback", level: 4, icon: <DeveloperMode /> },
  { name: "Technical Documentation", category: "Soft Skills", description: "Writing clear technical documentation", level: 4, icon: <DeveloperMode /> },
  { name: "Mentoring", category: "Soft Skills", description: "Guiding junior developers", level: 4, icon: <DeveloperMode /> }
];

// Extract unique categories and add 'All' for general display
const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

const proficiencyLevels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProficiency, setSelectedProficiency] = useState("All");

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

  const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());

  const handleProficiencyChange = (event) => setSelectedProficiency(event.target.value);

  // Map proficiency levels to numerical ranges
  const getProficiencyLevel = (level) => {
    switch (level) {
      case "Beginner":
        return [1, 2];
      case "Intermediate":
        return [3];
      case "Advanced":
        return [4];
      case "Expert":
        return [5];
      default:
        return [1, 2, 3, 4, 5];
    }
  };

  // Filter skills based on category, search, and proficiency
  const filteredSkills = skills.filter((skill) => {
    const isCategoryMatch = activeTab === 0 || skill.category === categories[activeTab];
    const isSearchMatch = skill.name.toLowerCase().includes(searchQuery);
    const isProficiencyMatch = getProficiencyLevel(selectedProficiency).includes(skill.level);
    return isCategoryMatch && isSearchMatch && isProficiencyMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Card
        sx={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 6,
          color: '#222',
          padding: { xs: 2, sm: 4 },
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ fontWeight: 700, color: '#6366f1', mb: 3, letterSpacing: '-0.025em' }}
          >
            🏆 Skills
          </Typography>

          {/* Search Bar */}
          <TextField
            label="Search Skills..."
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ marginBottom: 3, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#6366f1' }} />
                </InputAdornment>
              ),
              sx: { color: '#222' },
            }}
          />

          {/* Proficiency Filter */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel sx={{ color: '#6366f1' }}>Proficiency Level</InputLabel>
            <Select
              value={selectedProficiency}
              onChange={handleProficiencyChange}
              sx={{ color: '#6366f1', backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              {proficiencyLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Category Tabs */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              marginBottom: 3,
              '& .MuiTab-root': { color: '#888', '&:hover': { color: '#6366f1' } },
              '& .Mui-selected': { color: '#6366f1 !important', fontWeight: 700 },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={`${category} (${skills.filter(s => s.category === category || category === "All").length})`} />
            ))}
          </Tabs>

          {/* Skill Grid */}
          {filteredSkills.length > 0 ? (
            <Grid container spacing={2}>
              {filteredSkills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in>
                    <Tooltip title={skill.description} arrow>
                      <Chip
                        icon={skill.icon}
                        label={skill.name}
                        sx={{
                          width: '100%',
                          color: '#fff',
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          mb: 1,
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          '&:hover': {
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                          },
                        }}
                      />
                    </Tooltip>
                  </Fade>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={(skill.level / 5) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" sx={{ color: '#666' }}>
                No skills found matching your criteria.
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
