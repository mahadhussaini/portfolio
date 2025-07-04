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
  CircularProgress,
  Fade,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Search as SearchIcon, Code as CodeIcon, Storage, Cloud, Security, Build, BugReport, Web, DeveloperMode } from "@mui/icons-material";

// Skill data with proficiency levels (1-5)
const skills = [
  { name: "HTML", category: "Frontend", description: "Markup language for web pages", level: 5, icon: <Web /> },
  { name: "CSS", category: "Frontend", description: "Style sheet language for web design", level: 5, icon: <Web /> },
  { name: "JavaScript", category: "Frontend", description: "Programming language for web development", level: 5, icon: <DeveloperMode /> },
  { name: "React.js", category: "Frontend", description: "Library for building UIs", level: 4, icon: <CodeIcon /> },
  { name: "Node.js", category: "Backend", description: "Runtime for server-side development", level: 4, icon: <Build /> },
  { name: "Express.js", category: "Backend", description: "Web framework for Node.js", level: 4, icon: <Build /> },
  { name: "MongoDB", category: "Database", description: "NoSQL database", level: 4, icon: <Storage /> },
  { name: "SQL", category: "Database", description: "Relational database language", level: 3, icon: <Storage /> },
  { name: "Python", category: "Backend", description: "Versatile programming language", level: 4, icon: <DeveloperMode /> },
  { name: "Docker", category: "Tools", description: "Containerization platform", level: 3, icon: <Build /> },
  { name: "Git", category: "Tools", description: "Version control system", level: 4, icon: <Build /> },
  { name: "Bootstrap", category: "Frontend", description: "CSS framework for responsive design", level: 4, icon: <Web /> },
  { name: "Material UI", category: "Frontend", description: "CSS library for UI design", level: 4, icon: <Web /> },
  { name: "TypeScript", category: "Frontend", description: "Superset of JavaScript", level: 4, icon: <DeveloperMode /> },
  { name: "Next.js", category: "Frontend", description: "React framework for server-side rendering", level: 3, icon: <CodeIcon /> },
  { name: "Redux", category: "Frontend", description: "State management library for React", level: 3, icon: <CodeIcon /> },
  { name: "GraphQL", category: "Backend", description: "Query language for APIs", level: 3, icon: <CodeIcon /> },
  { name: "RESTful API", category: "Backend", description: "API design for web services", level: 3, icon: <CodeIcon /> },
  { name: "Jest", category: "Testing", description: "JavaScript testing framework", level: 3, icon: <BugReport /> },
  { name: "Cypress", category: "Testing", description: "JavaScript testing framework", level: 3, icon: <BugReport /> },
  { name: "JWT", category: "Security", description: "JSON Web Token for authentication", level: 3, icon: <Security /> },
  { name: "OAuth", category: "Security", description: "Open standard for authorization", level: 3, icon: <Security /> },
  { name: "Firebase", category: "Backend", description: "Platform for building web and mobile apps", level: 3, icon: <Cloud /> },
  { name: "AWS", category: "Cloud", description: "Cloud computing platform", level: 3, icon: <Cloud /> },
  { name: "Azure", category: "Cloud", description: "Cloud computing platform", level: 3, icon: <Cloud /> },
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
            sx={{ fontWeight: 700, color: '#2575fc', mb: 3 }}
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
                  <SearchIcon sx={{ color: '#2575fc' }} />
                </InputAdornment>
              ),
              sx: { color: '#222' },
            }}
          />

          {/* Proficiency Filter */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel sx={{ color: '#2575fc' }}>Proficiency Level</InputLabel>
            <Select
              value={selectedProficiency}
              onChange={handleProficiencyChange}
              sx={{ color: '#2575fc', backgroundColor: 'rgba(255,255,255,0.3)' }}
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
              '& .MuiTab-root': { color: '#888', '&:hover': { color: '#2575fc' } },
              '& .Mui-selected': { color: '#2575fc !important', fontWeight: 700 },
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
                          background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
                          fontWeight: 500,
                          fontSize: '1rem',
                          mb: 1,
                          boxShadow: 1,
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
                      value={skill.level * 20}
                      sx={{
                        mt: 1,
                        height: 8,
                        borderRadius: 2,
                        background: 'rgba(0,0,0,0.08)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <CircularProgress sx={{ color: '#2575fc', marginTop: 5 }} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
