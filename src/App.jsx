import React, { useState, Suspense, lazy, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CssBaseline,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));

// Page transition animation
const pageTransition = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.8 },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Dynamic MUI theme based on darkMode state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#f1c40f" : "#764ba2",
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* AppBar - Navbar */}
          {/* <AppBar
            position="sticky"
            sx={{ backgroundColor: theme.palette.background.paper }}
          > */}
          <Toolbar>
            {/* <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
          {/* </AppBar> */}

          {/* Sidebar Navigation (Drawer) */}
          {/* <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <List sx={{ width: 250 }}>
              {["Skills", "Projects", "Experience", "Education"].map(
                (text, index) => (
                  <ListItem
                    button
                    component={Link}
                    to={`/${text.toLowerCase()}`}
                    key={index}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={text} sx={{ color: "white" }} />
                  </ListItem>
                )
              )}
            </List>
          </Drawer> */}

          {/* Main Content */}
          <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
            <AnimatePresence mode="wait">
              <Routes>
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
                        { Component: Footer, key: "footer" },
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
                {["skills", "projects", "experience", "education"].map(
                  (path) => (
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
                            {React.createElement(
                              lazy(() =>
                                import(
                                  `./components/${
                                    path.charAt(0).toUpperCase() + path.slice(1)
                                  }`
                                )
                              )
                            )}
                          </Suspense>
                        </motion.div>
                      }
                    />
                  )
                )}

                {/* 404 Page */}
                <Route
                  path="*"
                  element={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        textAlign: "center",
                      }}
                    >
                      {/* <motion.div {...pageTransition}>
                        <Typography
                          variant={isMobile ? "h5" : "h4"}
                          color="error"
                        >
                          404 - Page Not Found
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          Oops! The page you&apos;re looking for doesn&apos;t
                          exist.
                        </Typography>
                      </motion.div> */}
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
            {/* <Footer /> */}
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
