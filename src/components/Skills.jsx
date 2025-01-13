import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Grid,
  Chip,
} from "@mui/material";

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Material-UI", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "RESTful API", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Webpack", category: "Tools" },
  { name: "Redux.js", category: "Frontend" },
  { name: "Responsive Web Design", category: "Frontend" },
  { name: "OOP", category: "Concepts" },
  { name: "Problem Solving", category: "Concepts" },
  { name: "Debugging", category: "Concepts" },
  { name: "Data Structures", category: "Concepts" },
  { name: "Algorithms", category: "Concepts" },
  { name: "System Design", category: "Concepts" },
  { name: "Version Control", category: "Concepts" },
  { name: "Design Patterns", category: "Concepts" },
  { name: "Sequelize ORM", category: "Database" },
  { name: "Mongoose ORM", category: "Database" },
  { name: "Docker", category: "Tools" },
  { name: "Kubernetes", category: "Tools" },
  { name: "Jest", category: "Tools" },
  { name: "Mocha", category: "Tools" },
  { name: "Chai", category: "Tools" },
  { name: "Selenium", category: "Tools" },
];

const categories = [...new Set(skills.map((skill) => skill.category))];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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

        <Grid container spacing={2}>
          {skills
            .filter((skill) => skill.category === categories[activeTab])
            .map((skill, index) => (
              <Grid item xs={6} sm={4} lg={3} key={index}>
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
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
