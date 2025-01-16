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
} from "@mui/material";

const skills = [
  {
    name: "HTML",
    category: "Frontend",
    description: "Markup language for web pages",
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Style sheet language for web design",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Programming language for web development",
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "React Native",
    category: "Frontend",
    description: "Framework for building native mobile apps",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description: "CSS framework for responsive design",
  },
  {
    name: "Material-UI",
    category: "Frontend",
    description: "React component library for building UIs",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Web framework for Node.js",
  },
  {
    name: "RESTful API",
    category: "Backend",
    description: "API architecture for client-server communication",
  },
  {
    name: "SQL",
    category: "Database",
    description: "Structured Query Language for relational databases",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for storing data",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control system for tracking code changes",
  },
  {
    name: "Webpack",
    category: "Tools",
    description: "Module bundler for JavaScript applications",
  },
  {
    name: "Redux.js",
    category: "Frontend",
    description: "State management library for React",
  },
  {
    name: "Responsive Web Design",
    category: "Frontend",
    description: "Designing for different screen sizes",
  },
  {
    name: "OOP",
    category: "Concepts",
    description: "Object-Oriented Programming paradigm",
  },
  {
    name: "Problem Solving",
    category: "Concepts",
    description: "Ability to solve programming challenges",
  },
  {
    name: "Debugging",
    category: "Concepts",
    description: "Identifying and fixing issues in code",
  },
  {
    name: "Data Structures",
    category: "Concepts",
    description: "Organizing and storing data efficiently",
  },
  {
    name: "Algorithms",
    category: "Concepts",
    description: "Step-by-step procedure for solving problems",
  },
  {
    name: "System Design",
    category: "Concepts",
    description: "Designing scalable software systems",
  },
  {
    name: "Version Control",
    category: "Concepts",
    description: "Tracking changes to code",
  },
  {
    name: "Design Patterns",
    category: "Concepts",
    description: "Reusable solutions to common software problems",
  },
  {
    name: "Sequelize ORM",
    category: "Database",
    description: "Promise-based ORM for Node.js",
  },
  {
    name: "Mongoose ORM",
    category: "Database",
    description: "MongoDB ORM for Node.js",
  },
  {
    name: "Docker",
    category: "Tools",
    description: "Containerization platform for applications",
  },
  {
    name: "Kubernetes",
    category: "Tools",
    description: "Orchestration platform for containerized apps",
  },
  {
    name: "Jest",
    category: "Tools",
    description: "JavaScript testing framework",
  },
  {
    name: "Mocha",
    category: "Tools",
    description: "Testing framework for Node.js",
  },
  {
    name: "Chai",
    category: "Tools",
    description: "Assertion library for Node.js testing",
  },
  {
    name: "Selenium",
    category: "Tools",
    description: "Automated testing for web applications",
  },
];

const categories = [...new Set(skills.map((skill) => skill.category))];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (event, newValue) => {
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
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "15px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        color: "#fff",
        padding: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Skills
        </Typography>

        {/* Search Bar */}
        <TextField
          label="Search Skills"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ marginBottom: 3 }}
        />

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            marginBottom: 3,
            "& .MuiTab-root": {
              color: "#ddd",
              "&:hover": { color: "#fff" },
            },
            "& .Mui-selected": {
              color: "#ff7f50 !important",
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>

        <Box sx={{ mb: 2, color: "#fff" }}>
          <Typography variant="body2">
            {filteredSkills.length} skills found in this category
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {filteredSkills.map((skill, index) => (
            <Grid item xs={6} sm={4} lg={3} key={index}>
              <Tooltip title={skill.description} arrow>
                <Chip
                  label={skill.name}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "#ff7f50",
                    "&:hover": {
                      backgroundColor: "#ff6347",
                    },
                  }}
                />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
