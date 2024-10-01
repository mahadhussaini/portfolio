import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "React Native",
  "OOP",
  "Git",
  "SQL",
  "Bootstrap",
  "MongoDB",
  "Material-UI",
  "DOM",
  "Express.js",
  "Node.js",
  "ECMAScript",
  "React Hooks",
  "Redux.js",
  "Webpack",
  "Software Development",
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "Responsive Web Design",
  "Styled-Components",
  "RESTful API",
  "API Integration",
  "Debugging",
  "Problem Solving",
];

const Skills = () => {
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
          sx={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}
        >
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid
              item
              xs={12} // 1 skill per row on extra small screens (mobile)
              sm={6} // 2 skills per row on small screens (tablets)
              md={4} // 3 skills per row on medium screens (laptops)
              lg={3} // 4 skills per row on large screens (desktops)
              key={index}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#ddd",
                  textAlign: "center",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
