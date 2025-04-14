import React, { useState, Suspense, lazy, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Skeleton,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  EmojiObjects as EmojiObjectsIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components
const Header = lazy(() => import("./components/Header.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// Page transition animation
const pageTransition = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.8 },
};

// Map paths to their respective components and icons
const componentMap = {
  home: { Component: Header, icon: <HomeIcon />, label: "Home" },
  skills: { Component: Skills, icon: <EmojiObjectsIcon />, label: "Skills" },
  projects: { Component: Projects, icon: <CodeIcon />, label: "Projects" },
  experience: {
    Component: Experience,
    icon: <WorkIcon />,
    label: "Experience",
  },
  education: { Component: Education, icon: <SchoolIcon />, label: "Education" },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Dynamic MUI theme based on darkMode state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "rgba(241, 196, 15, 0)",
          },
          background: {
            default: darkMode ? "#121212" : "#f4f4f4",
            paper: darkMode ? "#1e1e1e" : "#fff",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#333",
          },
        },
      }),
    [darkMode]
  );

  // Toggle dark mode
  const handleThemeToggle = () => setDarkMode(!darkMode);

  // Toggle drawer for mobile navigation
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  // Navigation items
  const navItems = Object.entries(componentMap).map(
  ([path, { icon, label }]) => (
    <ListItem
      button
      key={path}
      component={Link}
      to={path === "home" ? "/" : `/${path}`}
      onClick={isMobile ? handleDrawerToggle : undefined}
    >
      <ListItemIcon
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          sx: { color: theme.palette.mode === "dark" ? "#fff" : "#000" },
        }}
      />
    </ListItem>
  )
);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* AppBar with theme toggle and menu button */}
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                My Portfolio
              </Typography>
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Side Drawer for mobile */}
          <Drawer
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>{navItems}</List>
              <Divider />
            </Box>
          </Drawer>

          {/* Main Content */}
          <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <Grid container spacing={3}>
                      {[
                        { Component: Header, key: "header" },
                        { Component: Skills, key: "skills" },
                        { Component: Projects, key: "projects" },
                        { Component: Experience, key: "experience" },
                        { Component: Education, key: "education" },
                      ].map(({ Component, key }) => (
                        <Grid item xs={12} key={key}>
                          <Suspense
                            fallback={
                              <Skeleton
                                variant="rectangular"
                                height={200}
                                sx={{ borderRadius: 2 }}
                              />
                            }
                          >
                            <motion.div {...pageTransition}>
                              <Component />
                            </motion.div>
                          </Suspense>
                        </Grid>
                      ))}
                    </Grid>
                  }
                />

                {/* Dynamic Routes for Other Pages */}
                {Object.entries(componentMap).map(([path, { Component }]) => (
                  <Route
                    key={path}
                    path={`/${path}`}
                    element={
                      <motion.div {...pageTransition}>
                        <Suspense
                          fallback={
                            <Skeleton
                              variant="rectangular"
                              height={400}
                              sx={{ borderRadius: 2 }}
                            />
                          }
                        >
                          <Component />
                        </Suspense>
                      </motion.div>
                    }
                  />
                ))}

                {/* 404 Page */}
                <Route
                  path="*"
                  element={
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "60vh",
                        textAlign: "center",
                      }}
                    >
                      <motion.div {...pageTransition}>
                        <Typography variant="h4" color="error">
                          404 - Page Not Found
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          Oops! The page you&apos;re looking for doesn&apos;t
                          exist.
                        </Typography>
                      </motion.div>
                    </Box>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Container>

          {/* Footer (Always Present) */}
          <Suspense
            fallback={
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 2 }}
              />
            }
          >
            <Footer />
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
