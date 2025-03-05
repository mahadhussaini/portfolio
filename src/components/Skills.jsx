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
  Box,
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
import { Search as SearchIcon, Code as CodeIcon } from "@mui/icons-material";

// Skill data with proficiency levels (1-5)
const skills = [
  { name: "HTML", category: "Frontend", description: "Markup language for web pages", level: 5 },
  { name: "CSS", category: "Frontend", description: "Style sheet language for web design", level: 5 },
  { name: "JavaScript", category: "Frontend", description: "Programming language for web development", level: 5 },
  { name: "React.js", category: "Frontend", description: "Library for building UIs", level: 4 },
  { name: "Node.js", category: "Backend", description: "Runtime for server-side development", level: 4 },
  { name: "Express.js", category: "Backend", description: "Web framework for Node.js", level: 4 },
  { name: "MongoDB", category: "Database", description: "NoSQL database", level: 4 },
  { name: "SQL", category: "Database", description: "Relational database language", level: 3 },
  { name: "Python", category: "Backend", description: "Versatile programming language", level: 4 },
  { name: "Docker", category: "Tools", description: "Containerization platform", level: 3 },
  { name: "Git", category: "Tools", description: "Version control system", level: 4 },
  { name: "Bootstrap", category: "Frontend", description: "CSS framework for responsive design", level: 4 },
  { name: "Material UI", category: "Frontend", description: "CSS library for UI design", level: 4 },
  { name: "TypeScript", category: "Frontend", description: "Superset of JavaScript", level: 4 },
  { name: "Next.js", category: "Frontend", description: "React framework for server-side rendering", level: 3 },
  { name: "Redux", category: "Frontend", description: "State management library for React", level: 3 },
  { name: "GraphQL", category: "Backend", description: "Query language for APIs", level: 3 },
  { name: "RESTful API", category: "Backend", description: "API design for web services", level: 3 },
  { name: "Jest", category: "Testing", description: "JavaScript testing framework", level: 3 },
  { name: "Cypress", category: "Testing", description: "JavaScript testing framework", level: 3 },
  { name: "JWT", category: "Security", description: "JSON Web Token for authentication", level: 3 },
  { name: "OAuth", category: "Security", description: "Open standard for authorization", level: 3 },
  { name: "Firebase", category: "Backend", description: "Platform for building web and mobile apps", level: 3 },
  { name: "AWS", category: "Cloud", description: "Cloud computing platform", level: 3 },
  { name: "Azure", category: "Cloud", description: "Cloud computing platform", level: 3 },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "15px",
          color: "#fff",
          padding: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}
          >
            🎯 Skills
          </Typography>

          {/* Search Bar */}
          <TextField
            label="Search Skills..."
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ marginBottom: 3, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              sx: { color: "#fff" },
            }}
          />

          {/* Proficiency Filter */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel sx={{ color: "#fff" }}>Proficiency Level</InputLabel>
            <Select
              value={selectedProficiency}
              onChange={handleProficiencyChange}
              sx={{ color: "#fff", backgroundColor: "rgba(255,255,255,0.2)" }}
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
              "& .MuiTab-root": { color: "#ddd", "&:hover": { color: "#fff" } },
              "& .Mui-selected": { color: "#ff7f50 !important", fontWeight: "bold" },
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
                      <Chip label={skill.name} sx={{ width: "100%", color: "#fff", backgroundColor: "#ff7f50" }} />
                    </Tooltip>
                  </Fade>
                  <LinearProgress variant="determinate" value={skill.level * 20} sx={{ mt: 1, height: 8, borderRadius: 1 }} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <CircularProgress sx={{ color: "#ff7f50", marginTop: 5 }} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
