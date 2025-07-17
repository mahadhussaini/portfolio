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
import { Global } from "@emotion/react";

// Lazy load components
const Header = lazy(() => import("./components/Header.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
// Remove Testimonials import and lazy loading
// const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
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
  // Remove testimonials from componentMap
  // testimonials: { Component: Testimonials, icon: <EmojiObjectsIcon />, label: "Testimonials" },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Modern color palette
  const lightPalette = {
    mode: "light",
    primary: { main: "#6366f1" },
    secondary: { main: "#f59e0b" },
    background: { default: "#f8fafc", paper: "rgba(255,255,255,0.95)" },
    text: { primary: "#1e293b" },
    success: { main: "#10b981" },
    warning: { main: "#f59e0b" },
    error: { main: "#ef4444" },
    info: { main: "#3b82f6" },
  };
  const darkPalette = {
    mode: "dark",
    primary: { main: "#6366f1" },
    secondary: { main: "#f59e0b" },
    background: { default: "#0f172a", paper: "rgba(15,23,42,0.95)" },
    text: { primary: "#f8fafc" },
    success: { main: "#10b981" },
    warning: { main: "#f59e0b" },
    error: { main: "#ef4444" },
    info: { main: "#3b82f6" },
  };
  const palette = darkMode ? darkPalette : lightPalette;

  // Modern font
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#6366f1" },
          secondary: { main: "#f59e0b" },
          background: darkMode
            ? { default: "#0f172a", paper: "rgba(15,23,42,0.95)" }
            : { default: "#f8fafc", paper: "rgba(255,255,255,0.95)" },
          text: { primary: darkMode ? "#f8fafc" : "#1e293b" },
          success: { main: "#10b981" },
          warning: { main: "#f59e0b" },
          error: { main: "#ef4444" },
          info: { main: "#3b82f6" },
        },
        typography: {
          fontFamily: [
            'Inter',
            'Poppins',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ].join(','),
          h1: { 
            fontWeight: 800,
            fontSize: '2.5rem',
            letterSpacing: '-0.025em'
          },
          h2: { 
            fontWeight: 700,
            fontSize: '2rem',
            letterSpacing: '-0.025em'
          },
          h3: { 
            fontWeight: 600,
            fontSize: '1.5rem',
            letterSpacing: '-0.025em'
          },
          h4: { 
            fontWeight: 600,
            fontSize: '1.25rem',
            letterSpacing: '-0.025em'
          },
          h5: { 
            fontWeight: 600,
            fontSize: '1.125rem',
            letterSpacing: '-0.025em'
          },
          h6: { 
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '-0.025em'
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            letterSpacing: '0.025em'
          },
          body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: '0.025em'
          },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '8px 24px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              },
              contained: {
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                },
              },
              outlined: {
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                fontWeight: 500,
                fontSize: '0.75rem',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 8,
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: darkMode 
                  ? 'rgba(15,23,42,0.8)' 
                  : 'rgba(255,255,255,0.98)',
                backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
              },
            },
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
      {/* Global gradient background */}
      <Global
        styles={{
          body: {
            minHeight: '100vh',
            background: darkMode
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
            fontFamily: 'Inter, Poppins, Roboto, Helvetica Neue, Arial, sans-serif',
            transition: 'background 0.5s',
          },
        }}
      />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* AppBar with theme toggle and menu button */}
          <AppBar position="static" sx={{
            background: theme.palette.mode === 'dark'
              ? 'rgba(15,23,42,0.8)'
              : 'rgba(255,255,255,0.98)',
            color: theme.palette.text.primary,
            boxShadow: theme.palette.mode === 'dark' ? 3 : 2,
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" }, color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>
                My Portfolio
              </Typography>
              <IconButton onClick={handleThemeToggle} sx={{ color: theme.palette.text.primary }}>
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
                        // Remove Testimonials from the home page grid
                        // { Component: Testimonials, key: "testimonials" },
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
