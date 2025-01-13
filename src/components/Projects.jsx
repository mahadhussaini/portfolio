import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const projects = [
  {
    name: "BMI Calculator",
    url: "https://github.com/mahadhussaini/bmi-calculator",
    description: "A web application to calculate Body Mass Index.",
    year: 2022,
  },
  {
    name: "Blog Platform",
    url: "https://github.com/mahadhussaini/blog-platform",
    description: "A platform for creating and sharing blog posts.",
    year: 2021,
  },
  {
    name: "Collaborative Writing Platform",
    url: "https://github.com/mahadhussaini/collaborative-writing-platform",
    description: "A platform for real-time collaborative writing.",
    year: 2022,
  },
  {
    name: "E-commerce Store",
    url: "https://github.com/mahadhussaini/e-commerce",
    description: "An online store for browsing and purchasing products.",
    year: 2022,
  },
  {
    name: "Expense Tracker",
    url: "https://github.com/mahadhussaini/expense-tracker",
    description: "A tool for tracking personal expenses.",
    year: 2023,
  },
  {
    name: "GitHub Finder",
    url: "https://github.com/mahadhussaini/github-finder",
    description: "A web app to find GitHub users and repositories.",
    year: 2021,
  },
  {
    name: "Google Clone",
    url: "https://github.com/mahadhussaini/google-clone",
    description: "A clone of the Google homepage.",
    year: 2020,
  },
  {
    name: "Gym App",
    url: "https://github.com/mahadhussaini/gym-app",
    description: "An app for managing gym routines and workouts.",
    year: 2022,
  },
  {
    name: "Netflix Clone",
    url: "https://github.com/mahadhussaini/netflix-clone",
    description: "A clone of the Netflix streaming service.",
    year: 2022,
  },
  {
    name: "Omni Health Care App",
    url: "https://github.com/mahadhussaini/omni-health-care-app",
    description: "A healthcare management application.",
    year: 2022,
  },
  {
    name: "Online Voting System",
    url: "https://github.com/mahadhussaini/online-voting-system",
    description: "A secure online voting platform.",
    year: 2023,
  },
  {
    name: "Product Customizer",
    url: "https://github.com/mahadhussaini/product-customizer",
    description: "An app for customizing products before purchase.",
    year: 2021,
  },
  {
    name: "Quiz App",
    url: "https://github.com/mahadhussaini/quiz-app",
    description: "An interactive quiz application.",
    year: 2021,
  },
  {
    name: "Real Time Chat App",
    url: "https://github.com/mahadhussaini/real-time-chat-app",
    description: "A chat application with real-time messaging.",
    year: 2022,
  },
  {
    name: "Recipe Finder",
    url: "https://github.com/mahadhussaini/recipe-finder",
    description: "An app to search for recipes based on ingredients.",
    year: 2022,
  },
  {
    name: "Skin Disease Analyzer App",
    url: "https://github.com/mahadhussaini/skin-disease-analyzer-app",
    description: "An application for analyzing skin diseases.",
    year: 2022,
  },
  {
    name: "Social Media Dashboard",
    url: "https://github.com/mahadhussaini/social-media-app",
    description: "A dashboard for managing social media accounts.",
    year: 2022,
  },
  {
    name: "Tesla Clone",
    url: "https://github.com/mahadhussaini/tesla-clone",
    description: "A clone of the Tesla website.",
    year: 2021,
  },
  {
    name: "Tic Tac Toe",
    url: "https://github.com/mahadhussaini/tic-tac-toe",
    description: "A simple Tic Tac Toe game.",
    year: 2021,
  },
  {
    name: "Todo App",
    url: "https://github.com/mahadhussaini/todo-app",
    description: "An app for managing your to-do tasks.",
    year: 2021,
  },
  {
    name: "Virtual Whiteboard",
    url: "https://github.com/mahadhussaini/virtual-whiteboard",
    description: "An online whiteboard for collaboration.",
    year: 2022,
  },
  {
    name: "Weather App",
    url: "https://github.com/mahadhussaini/weather-app",
    description: "A weather forecasting application.",
    year: 2021,
  },
  {
    name: "YouTube Clone",
    url: "https://github.com/mahadhussaini/youtube-clone",
    description: "A clone of the YouTube video platform.",
    year: 2021,
  },
];

const Projects = () => {
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
          Projects
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(31, 38, 135, 0.2)",
                  padding: "15px",
                  color: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ddd", mb: 2 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bbb", mb: 2 }}>
                  <strong>Year: </strong>
                  {project.year}
                </Typography>
                <Button
                  variant="contained"
                  href={project.url}
                  target="_blank"
                  sx={{
                    backgroundColor: "#ff7f50",
                    "&:hover": { backgroundColor: "#ff6347" },
                    borderRadius: "10px",
                  }}
                >
                  View Project
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Projects;
