import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";

// Project data with descriptions
const projects = [
  {
    name: "BMI Calculator",
    url: "https://github.com/mahadhussaini/bmi-calculator",
    description: "A web application to calculate Body Mass Index.",
  },
  {
    name: "Blog Platform",
    url: "https://github.com/mahadhussaini/blog-platform",
    description: "A platform for creating and sharing blog posts.",
  },
  {
    name: "Collaborative Writing Platform",
    url: "https://github.com/mahadhussaini/collaborative-writing-platform",
    description: "A platform for real-time collaborative writing.",
  },
  {
    name: "E-commerce Store",
    url: "https://github.com/mahadhussaini/e-commerce",
    description: "An online store for browsing and purchasing products.",
  },
  {
    name: "Expense Tracker",
    url: "https://github.com/mahadhussaini/expense-tracker",
    description: "A tool for tracking personal expenses.",
  },
  {
    name: "GitHub Finder",
    url: "https://github.com/mahadhussaini/github-finder",
    description: "A web app to find GitHub users and repositories.",
  },
  {
    name: "Google Clone",
    url: "https://github.com/mahadhussaini/google-clone",
    description: "A clone of the Google homepage.",
  },
  {
    name: "Gym App",
    url: "https://github.com/mahadhussaini/gym-app",
    description: "An app for managing gym routines and workouts.",
  },
  {
    name: "Mall App",
    url: "https://github.com/mahadhussaini/mall-app",
    description: "A platform for exploring mall products and stores.",
  },
  {
    name: "Netflix Clone",
    url: "https://github.com/mahadhussaini/netflix-clone",
    description: "A clone of the Netflix streaming service.",
  },
  {
    name: "Omni Health Care App",
    url: "https://github.com/mahadhussaini/omni-health-care-app",
    description: "A healthcare management application.",
  },
  {
    name: "Online Voting System",
    url: "https://github.com/mahadhussaini/online-voting-system",
    description: "A secure online voting platform.",
  },
  {
    name: "Product Customizer",
    url: "https://github.com/mahadhussaini/product-customizer",
    description: "An app for customizing products before purchase.",
  },
  {
    name: "Quiz App",
    url: "https://github.com/mahadhussaini/quiz-app",
    description: "An interactive quiz application.",
  },
  {
    name: "Real Time Chat App",
    url: "https://github.com/mahadhussaini/real-time-chat-app",
    description: "A chat application with real-time messaging.",
  },
  {
    name: "Recipe Finder",
    url: "https://github.com/mahadhussaini/recipe-finder",
    description: "An app to search for recipes based on ingredients.",
  },
  {
    name: "Skin Disease Analyzer App",
    url: "https://github.com/mahadhussaini/skin-disease-analyzer-app",
    description: "An application for analyzing skin diseases.",
  },
  {
    name: "Social Media Dashboard",
    url: "https://github.com/mahadhussaini/social-media-app",
    description: "A dashboard for managing social media accounts.",
  },
  {
    name: "Tesla Clone",
    url: "https://github.com/mahadhussaini/tesla-clone",
    description: "A clone of the Tesla website.",
  },
  {
    name: "Tic Tac Toe",
    url: "https://github.com/mahadhussaini/tic-tac-toe",
    description: "A simple Tic Tac Toe game.",
  },
  {
    name: "Todo App",
    url: "https://github.com/mahadhussaini/todo-app",
    description: "An app for managing your to-do tasks.",
  },
  {
    name: "Virtual Whiteboard",
    url: "https://github.com/mahadhussaini/virtual-whiteboard",
    description: "An online whiteboard for collaboration.",
  },
  {
    name: "Weather App",
    url: "https://github.com/mahadhussaini/weather-app",
    description: "A weather forecasting application.",
  },
  {
    name: "YouTube Clone",
    url: "https://github.com/mahadhussaini/youtube-clone",
    description: "A clone of the YouTube video platform.",
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
        <List>
          {projects.map((project, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography variant="body1" sx={{ color: "#ddd" }}>
                {project.name}
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
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Projects;
