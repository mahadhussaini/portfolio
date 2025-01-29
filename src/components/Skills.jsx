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
} from "@mui/material";
import { motion } from "framer-motion";
import { Search as SearchIcon, Code as CodeIcon } from "@mui/icons-material";

// Skill data with proficiency levels (1-5)
const skills = [
  {
    name: "HTML",
    category: "Frontend",
    description: "Markup language for web pages",
    level: 5,
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Style sheet language for web design",
    level: 5,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Programming language for web development",
    level: 5,
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "JavaScript library for building user interfaces",
    level: 4,
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for server-side development",
    level: 4,
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Web framework for Node.js",
    level: 4,
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for storing data",
    level: 4,
  },
  {
    name: "SQL",
    category: "Database",
    description: "Structured Query Language for relational databases",
    level: 3,
  },
  {
    name: "Docker",
    category: "Tools",
    description: "Containerization platform for applications",
    level: 3,
  },
  {
    name: "Redux.js",
    category: "Frontend",
    description: "State management library for React",
    level: 4,
  },
  {
    name: "Data Structures",
    category: "Concepts",
    description: "Organizing and storing data efficiently",
    level: 4,
  },
  {
    name: "Algorithms",
    category: "Concepts",
    description: "Step-by-step procedure for solving problems",
    level: 4,
  },
  {
    name: "Jest",
    category: "Tools",
    description: "JavaScript testing framework",
    level: 3,
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control system for software development",
    level: 3,
  },
  {
    name: "Python",
    category: "Backend",
    description: "Programming language for web development",
    level: 4,
  },
  {
    name: "Flask",
    category: "Backend",
    description: "Web framework for Python",
    level: 4,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description: "CSS framework for responsive web design",
    level: 4,
  },
  {
    name: "Material UI",
    category: "Frontend",
    description: "CSS library for building user interfaces",
    level: 4,
  },
];

const categories = [...new Set(skills.map((skill) => skill.category))];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredSkills = skills.filter(
    (skill) =>
      skill.category === categories[activeTab] &&
      skill.name.toLowerCase().includes(searchQuery)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
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
            sx={{
              marginBottom: 3,
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              sx: { color: "#fff" },
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
              "& .MuiTab-root": { color: "#ddd", "&:hover": { color: "#fff" } },
              "& .Mui-selected": {
                color: "#ff7f50 !important",
                fontWeight: "bold",
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>

          {/* Skill Count */}
          <Box sx={{ mb: 2, color: "#fff" }}>
            <Typography variant="body1">
              <strong>{filteredSkills.length}</strong> skills found in this
              category
            </Typography>
          </Box>

          {/* Skill Grid */}
          {filteredSkills.length > 0 ? (
            <Grid container spacing={2}>
              {filteredSkills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in>
                    <Tooltip title={skill.description} arrow>
                      <Chip
                        label={
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <CodeIcon sx={{ fontSize: 18, marginRight: 1 }} />
                            {skill.name}
                          </Box>
                        }
                        sx={{
                          width: "100%",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#fff",
                          backgroundColor: "#ff7f50",
                          "&:hover": { backgroundColor: "#ff6347" },
                        }}
                      />
                    </Tooltip>
                  </Fade>
                  {/* Proficiency Level Bar */}
                  <Box
                    sx={{
                      height: 8,
                      width: `${skill.level * 20}%`,
                      backgroundColor: "#ff7f50",
                      borderRadius: "5px",
                      marginTop: 1,
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <CircularProgress sx={{ color: "#ff7f50" }} />
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
