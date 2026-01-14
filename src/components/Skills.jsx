import { useState } from "react";
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
  Box,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Search as SearchIcon, Code as CodeIcon, Storage, Cloud, Security, Build, BugReport, Web, DeveloperMode, Psychology } from "@mui/icons-material";

// Skill data organized by categories
const skills = [
  // Frontend Technologies
  { name: "React.js", category: "Frontend", description: "Modern UI library for building interactive web applications", icon: <CodeIcon /> },
  { name: "Next.js", category: "Frontend", description: "Full-stack React framework with SSR and SSG", icon: <CodeIcon /> },
  { name: "TypeScript", category: "Frontend", description: "Typed superset of JavaScript for better development experience", icon: <DeveloperMode /> },
  { name: "JavaScript (ES6+)", category: "Frontend", description: "Modern JavaScript with advanced features", icon: <DeveloperMode /> },
  { name: "HTML5", category: "Frontend", description: "Semantic markup for web applications", icon: <Web /> },
  { name: "CSS3", category: "Frontend", description: "Advanced styling with Flexbox, Grid, and animations", icon: <Web /> },
  { name: "Material UI", category: "Frontend", description: "React component library for rapid UI development", icon: <Web /> },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework for rapid styling", icon: <Web /> },
  { name: "Redux Toolkit", category: "Frontend", description: "State management for React applications", icon: <CodeIcon /> },
  { name: "React Query", category: "Frontend", description: "Data fetching and caching for React", icon: <CodeIcon /> },
  { name: "Framer Motion", category: "Frontend", description: "Animation library for React", icon: <CodeIcon /> },
  { name: "React Native", category: "Frontend", description: "Cross-platform mobile development", icon: <CodeIcon /> },

  // Backend Technologies
  { name: "Node.js", category: "Backend", description: "JavaScript runtime for server-side development", icon: <Build /> },
  { name: "Express.js", category: "Backend", description: "Fast, unopinionated web framework for Node.js", icon: <Build /> },
  { name: "Python", category: "Backend", description: "Versatile programming language for backend and ML", icon: <DeveloperMode /> },
  { name: "FastAPI", category: "Backend", description: "Modern Python web framework for APIs", icon: <Build /> },
  { name: "GraphQL", category: "Backend", description: "Query language for APIs with strong typing", icon: <CodeIcon /> },
  { name: "RESTful APIs", category: "Backend", description: "API design principles and best practices", icon: <CodeIcon /> },
  { name: "Microservices", category: "Backend", description: "Distributed system architecture", icon: <Build /> },
  { name: "Serverless", category: "Backend", description: "Cloud-native serverless architecture", icon: <Cloud /> },

  // Database Technologies
  { name: "MongoDB", category: "Database", description: "NoSQL document database", icon: <Storage /> },
  { name: "PostgreSQL", category: "Database", description: "Advanced open-source relational database", icon: <Storage /> },
  { name: "Redis", category: "Database", description: "In-memory data structure store", icon: <Storage /> },
  { name: "Elasticsearch", category: "Database", description: "Distributed search and analytics engine", icon: <Storage /> },
  { name: "Database Design", category: "Database", description: "Schema design and optimization", icon: <Storage /> },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud", description: "Amazon Web Services cloud platform", icon: <Cloud /> },
  { name: "Docker", category: "Cloud", description: "Containerization platform", icon: <Cloud /> },
  { name: "Kubernetes", category: "Cloud", description: "Container orchestration platform", icon: <Cloud /> },
  { name: "CI/CD", category: "Cloud", description: "Continuous Integration and Deployment", icon: <Build /> },
  { name: "GitHub Actions", category: "Cloud", description: "Automated workflows and deployments", icon: <Build /> },
  { name: "Jenkins", category: "Cloud", description: "Automation server for CI/CD", icon: <Build /> },
  { name: "Terraform", category: "Cloud", description: "Infrastructure as Code", icon: <Cloud /> },

  // Testing & Quality
  { name: "Jest", category: "Testing", description: "JavaScript testing framework", icon: <BugReport /> },
  { name: "Cypress", category: "Testing", description: "End-to-end testing framework", icon: <BugReport /> },
  { name: "React Testing Library", category: "Testing", description: "Testing utilities for React", icon: <BugReport /> },
  { name: "Unit Testing", category: "Testing", description: "Component and function testing", icon: <BugReport /> },
  { name: "Integration Testing", category: "Testing", description: "API and service testing", icon: <BugReport /> },

  // Security
  { name: "JWT", category: "Security", description: "JSON Web Token authentication", icon: <Security /> },
  { name: "OAuth 2.0", category: "Security", description: "Authorization framework", icon: <Security /> },
  { name: "API Security", category: "Security", description: "REST API security best practices", icon: <Security /> },
  { name: "Data Encryption", category: "Security", description: "Encryption and data protection", icon: <Security /> },

  // AI & Advanced Tech (New for 2026)
  { name: "Vercel AI SDK", category: "AI/ML", description: "Integration of LLMs into web applications", icon: <Psychology /> },
  { name: "LangChain.js", category: "AI/ML", description: "Framework for building context-aware AI agents", icon: <Psychology /> },
  { name: "Vector Databases", category: "Database", description: "Pinecone, Weaviate for AI memory", icon: <Storage /> },
  { name: "WebAssembly (WASM)", category: "Advanced", description: "Near-native performance in the browser", icon: <Build /> },
  { name: "Edge Functions", category: "Cloud", description: "Deploying logic at the edge (Vercel, Cloudflare)", icon: <Cloud /> },

  // Tools & Utilities
  { name: "Git", category: "Tools", description: "Version control system", icon: <Build /> },
  { name: "VS Code", category: "Tools", description: "Code editor and development environment", icon: <Build /> },
  { name: "Postman", category: "Tools", description: "API development and testing", icon: <Build /> },
  { name: "Webpack", category: "Tools", description: "Module bundler for JavaScript", icon: <Build /> },
  { name: "Vite", category: "Tools", description: "Fast build tool for modern web development", icon: <Build /> },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", description: "Analytical thinking and solution design", icon: <DeveloperMode /> },
  { name: "Team Collaboration", category: "Soft Skills", description: "Working effectively in cross-functional teams", icon: <DeveloperMode /> },
  { name: "Agile/Scrum", category: "Soft Skills", description: "Project management methodologies", icon: <DeveloperMode /> },
  { name: "Code Review", category: "Soft Skills", description: "Peer code review and feedback", icon: <DeveloperMode /> },
  { name: "Technical Documentation", category: "Soft Skills", description: "Writing clear technical documentation", icon: <DeveloperMode /> },
  { name: "Mentoring", category: "Soft Skills", description: "Guiding junior developers", icon: <DeveloperMode /> },
  { name: "Communication", category: "Soft Skills", description: "Effective communication with clients and team members", icon: <DeveloperMode /> },
  { name: "Leadership", category: "Soft Skills", description: "Leadership and management skills", icon: <DeveloperMode /> }
];

// Extract unique categories and add 'All' for general display
const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

const Skills = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

  const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());

  // Filter skills based on category and search
  const filteredSkills = skills.filter((skill) => {
    const isCategoryMatch = activeTab === 0 || skill.category === categories[activeTab];
    const isSearchMatch = skill.name.toLowerCase().includes(searchQuery);
    return isCategoryMatch && isSearchMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Card
        sx={{
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(165deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)'
            : 'linear-gradient(165deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 250, 252, 0.4) 100%)',
          borderRadius: 8,
          color: theme.palette.text.primary,
          padding: { xs: 4, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
            : '0 25px 50px -12px rgba(99, 102, 241, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(24px) saturate(200%)',
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.3)'}`,
          maxWidth: 1100,
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
            placeholder="Search expertise..."
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              marginBottom: 4,
              '& .MuiOutlinedInput-root': {
                borderRadius: 4,
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.5)',
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: theme.palette.primary.main }} />
                </InputAdornment>
              ),
            }}
          />


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
                        component={motion.div}
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                          width: '100%',
                          p: 3,
                          borderRadius: 4,
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(99, 102, 241, 0.1)'
                            : 'rgba(99, 102, 241, 0.05)',
                          color: theme.palette.mode === 'dark' ? '#a5b4fc' : '#4338ca',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
                          backdropFilter: 'blur(8px)',
                          boxShadow: 'none',
                          '& .MuiChip-icon': {
                            color: 'inherit',
                          },
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                            borderColor: '#6366f1',
                          },
                        }}
                      />
                    </Tooltip>
                  </Fade>
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
