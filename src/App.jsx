import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          padding: "20px",
          background: darkMode
            ? "linear-gradient(135deg, #4b6cb7, #182848)"
            : "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
        }}
      >
        <Container maxWidth="lg">
          {/* Header with Navbar and Theme Toggle */}
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My Portfolio
              </Typography>
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Drawer for Mobile Navigation */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 250 }}>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/skills">
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem button component={Link} to="/projects">
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button component={Link} to="/experience">
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button component={Link} to="/education">
                <ListItemText primary="Education" />
              </ListItem>
              <ListItem button component={Link} to="/footer">
                <ListItemText primary="Footer" />
              </ListItem>
            </List>
          </Drawer>

          {/* Main Content with Lazy-loaded Components and Animations */}
          <Routes>
            <Route
              path="/"
              element={
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Header />
                      </motion.div>
                    </Suspense>
                  </Grid>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Skills />
                      </motion.div>
                    </Suspense>
                  </Grid>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Projects />
                      </motion.div>
                    </Suspense>
                  </Grid>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Experience />
                      </motion.div>
                    </Suspense>
                  </Grid>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Education />
                      </motion.div>
                    </Suspense>
                  </Grid>
                  <Grid item xs={12}>
                    <Suspense
                      fallback={<CircularProgress sx={{ color: "#fff" }} />}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Footer />
                      </motion.div>
                    </Suspense>
                  </Grid>
                </Grid>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Skills />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/experience"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Experience />
                </motion.div>
              }
            />
            <Route
              path="/education"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Education />
                </motion.div>
              }
            />
            <Route
              path="/footer"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Footer />
                </motion.div>
              }
            />
            {/* 404 Not Found */}
            <Route
              path="*"
              element={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <Typography variant="h4" color="text.secondary">
                    404 - Page Not Found
                  </Typography>
                </Box>
              }
            />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
