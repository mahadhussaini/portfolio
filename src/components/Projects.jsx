import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  Modal,
  Box,
} from "@mui/material";

// List of all projects
const projects = [
  {
    name: "BMI Calculator",
    url: "https://github.com/mahadhussaini/bmi-calculator",
    description: "A web application to calculate Body Mass Index.",
    year: 2022,
    tags: ["React", "JavaScript", "Web"],
  },
  {
    name: "Blog Platform",
    url: "https://github.com/mahadhussaini/blog-platform",
    description: "A platform for creating and sharing blog posts.",
    year: 2021,
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Collaborative Writing Platform",
    url: "https://github.com/mahadhussaini/collaborative-writing-platform",
    description: "A platform for real-time collaborative writing.",
    year: 2022,
    tags: ["React", "Firebase"],
  },
  {
    name: "E-commerce Store",
    url: "https://github.com/mahadhussaini/e-commerce",
    description: "An online store for browsing and purchasing products.",
    year: 2022,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Expense Tracker",
    url: "https://github.com/mahadhussaini/expense-tracker",
    description: "A tool for tracking personal expenses.",
    year: 2023,
    tags: ["React", "JavaScript", "Web"],
  },
  {
    name: "GitHub Finder",
    url: "https://github.com/mahadhussaini/github-finder",
    description: "A web app to find GitHub users and repositories.",
    year: 2021,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Google Clone",
    url: "https://github.com/mahadhussaini/google-clone",
    description: "A clone of the Google homepage.",
    year: 2020,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Gym App",
    url: "https://github.com/mahadhussaini/gym-app",
    description: "An app for managing gym routines and workouts.",
    year: 2022,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Netflix Clone",
    url: "https://github.com/mahadhussaini/netflix-clone",
    description: "A clone of the Netflix streaming service.",
    year: 2022,
    tags: ["React", "Firebase", "API"],
  },
  {
    name: "Omni Health Care App",
    url: "https://github.com/mahadhussaini/omni-health-care-app",
    description: "A healthcare management application.",
    year: 2022,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Online Voting System",
    url: "https://github.com/mahadhussaini/online-voting-system",
    description: "A secure online voting platform.",
    year: 2023,
    tags: ["React", "Node.js", "Express"],
  },
  {
    name: "Product Customizer",
    url: "https://github.com/mahadhussaini/product-customizer",
    description: "An app for customizing products before purchase.",
    year: 2021,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Quiz App",
    url: "https://github.com/mahadhussaini/quiz-app",
    description: "An interactive quiz application.",
    year: 2021,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Real Time Chat App",
    url: "https://github.com/mahadhussaini/real-time-chat-app",
    description: "A chat application with real-time messaging.",
    year: 2022,
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    name: "Recipe Finder",
    url: "https://github.com/mahadhussaini/recipe-finder",
    description: "An app to search for recipes based on ingredients.",
    year: 2022,
    tags: ["React", "API"],
  },
  {
    name: "Skin Disease Analyzer App",
    url: "https://github.com/mahadhussaini/skin-disease-analyzer-app",
    description: "An application for analyzing skin diseases.",
    year: 2022,
    tags: ["Python", "Machine Learning"],
  },
  {
    name: "Social Media Dashboard",
    url: "https://github.com/mahadhussaini/social-media-app",
    description: "A dashboard for managing social media accounts.",
    year: 2022,
    tags: ["React", "API"],
  },
  {
    name: "Tesla Clone",
    url: "https://github.com/mahadhussaini/tesla-clone",
    description: "A clone of the Tesla website.",
    year: 2021,
    tags: ["React", "CSS", "HTML"],
  },
  {
    name: "Tic Tac Toe",
    url: "https://github.com/mahadhussaini/tic-tac-toe",
    description: "A simple Tic Tac Toe game.",
    year: 2021,
    tags: ["JavaScript", "Game"],
  },
  {
    name: "Todo App",
    url: "https://github.com/mahadhussaini/todo-app",
    description: "An app for managing your to-do tasks.",
    year: 2021,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Virtual Whiteboard",
    url: "https://github.com/mahadhussaini/virtual-whiteboard",
    description: "An online whiteboard for collaboration.",
    year: 2022,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Weather App",
    url: "https://github.com/mahadhussaini/weather-app",
    description: "A weather forecasting application.",
    year: 2021,
    tags: ["React", "API"],
  },
  {
    name: "YouTube Clone",
    url: "https://github.com/mahadhussaini/youtube-clone",
    description: "A clone of the YouTube video platform.",
    year: 2021,
    tags: ["React", "API"],
  },
];

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleModalOpen = (project) => {
    setCurrentProject(project);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setCurrentProject(null);
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
                onClick={() => handleModalOpen(project)}
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

                <Stack direction="row" spacing={1} mb={2}>
                  {project.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      color="primary"
                    />
                  ))}
                </Stack>

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

      {/* Modal for Project Details */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 3,
            borderRadius: "10px",
            maxWidth: "800px",
            width: "100%",
            color: "#fff",
            boxShadow: 24,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {currentProject?.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {currentProject?.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", marginBottom: 2 }}>
            <strong>Year: </strong>
            {currentProject?.year}
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", marginBottom: 2 }}>
            <strong>Tags: </strong>
            {currentProject?.tags.join(", ")}
          </Typography>

          <Button
            variant="contained"
            href={currentProject?.url}
            target="_blank"
            sx={{
              backgroundColor: "#ff7f50",
              "&:hover": { backgroundColor: "#ff6347" },
              borderRadius: "10px",
            }}
          >
            View Project
          </Button>

          <Button
            variant="outlined"
            onClick={handleModalClose}
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              marginLeft: "15px",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default Projects;
