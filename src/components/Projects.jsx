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
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Build } from "@mui/icons-material";

// Project Data
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

// Get unique technologies for filtering
const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTag ? project.tags.includes(selectedTag) : true)
    );
  });

  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "15px",
        padding: "20px",
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}
        >
          🚀 Projects
        </Typography>

        {/* Search and Filter Options */}
        <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
          <TextField
            variant="outlined"
            label="Search Projects..."
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiInputLabel-root": {
                color: "#333",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#764ba2",
                },
                "&:hover fieldset": {
                  borderColor: "#5a3d90",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4a2c7d",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#333",
                fontWeight: "bold",
              },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "#333",
                fontWeight: "bold",
                fontSize: "1rem",
                mb: 1,
              }}
            >
              Filter by Technology
            </InputLabel>

            <Select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueTags.map((tag, index) => (
                <MenuItem key={index} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* Project Cards */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  padding: "15px",
                  color: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
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
    </Card>
  );
};

export default Projects;
