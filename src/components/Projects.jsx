import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { Search as SearchIcon, WebAsset } from "@mui/icons-material";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 6,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          maxWidth: 1200,
          margin: '0 auto',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: '#2575fc', mb: 3 }}
        >
          🚀 Projects
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3} alignItems="center" justifyContent="center">
          <TextField
            label="Search Projects..."
            variant="outlined"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: '#2575fc', mr: 1 }} />
              ),
              sx: { color: '#222' },
            }}
            sx={{ backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2, minWidth: 220 }}
          />
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel sx={{ color: '#2575fc' }}>Filter by Tech</InputLabel>
            <Select
              value={selectedTag}
              onChange={e => setSelectedTag(e.target.value)}
              sx={{ color: '#2575fc', backgroundColor: 'rgba(255,255,255,0.3)' }}
              displayEmpty
            >
              <MenuItem value="">All</MenuItem>
              {uniqueTags.map(tag => (
                <MenuItem key={tag} value={tag}>{tag}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Grid container spacing={3}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={project.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
                      borderRadius: 4,
                      boxShadow: 3,
                      p: 2,
                      minHeight: 220,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.03)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <WebAsset sx={{ color: '#2575fc' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#2575fc' }}>
                          {project.name}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                        {project.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
                              color: '#fff',
                              fontWeight: 500,
                              fontSize: '0.9rem',
                            }}
                          />
                        ))}
                      </Stack>
                      <Typography variant="caption" sx={{ color: '#888' }}>
                        {project.year}
                      </Typography>
                    </CardContent>
                    <Stack direction="row" spacing={1} mt={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        href={project.url}
                        target="_blank"
                        size="small"
                        sx={{ fontWeight: 600, borderRadius: 2 }}
                      >
                        View Code
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center" color="#888" sx={{ mt: 4 }}>
                No projects found.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects;
