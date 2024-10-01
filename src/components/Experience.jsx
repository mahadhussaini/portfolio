import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Experience = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "15px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // Glass effect shadow
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Experience
        </Typography>
        <Box mb={2}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Freelancer.com - Full Stack Developer
          </Typography>
          <Typography color="textSecondary">
            03/2024 - Present, Remote
          </Typography>
          <Typography variant="body1">
            Developed a full-stack Event Management Portal using MERN stack.
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/eventwave"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "underline" }}
            >
              View EventWave on GitHub
            </a>
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Paysys Labs - Software Development Intern
          </Typography>
          <Typography color="textSecondary">
            12/2023 - 02/2024, Karachi, Pakistan
          </Typography>
          <Typography variant="body1">
            Worked on the Bureau of Emigration & Overseas Employment Project.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Experience;
