import { useState, Suspense, lazy, useMemo } from "react";
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
  Stack,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  EmojiObjects as EmojiObjectsIcon,
  RateReview as RateReviewIcon,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Global } from "@emotion/react";

// Lazy load components
const Header = lazy(() => import("./components/Header.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Analytics = lazy(() => import("./components/Analytics.jsx"));
const AIChatbot = lazy(() => import("./components/AIChatbot.jsx"));

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
  about: { Component: About, icon: <PersonIcon />, label: "About" },
  skills: { Component: Skills, icon: <EmojiObjectsIcon />, label: "Skills" },
  projects: { Component: Projects, icon: <CodeIcon />, label: "Projects" },
  experience: {
    Component: Experience,
    icon: <WorkIcon />,
    label: "Experience",
  },
  education: { Component: Education, icon: <SchoolIcon />, label: "Education" },
  testimonials: { Component: Testimonials, icon: <RateReviewIcon />, label: "Testimonials" },
  contact: { Component: Contact, icon: <ContactMailIcon />, label: "Contact" },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");


  // Modern font
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#6366f1",
            light: "#818cf8",
            dark: "#4338ca",
            contrastText: "#ffffff"
          },
          secondary: {
            main: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
            contrastText: "#ffffff"
          },
          background: darkMode
            ? {
              default: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%)",
              paper: "rgba(15,23,42,0.95)"
            }
            : {
              default: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
              paper: "rgba(255,255,255,0.95)"
            },
          text: {
            primary: darkMode ? "#f8fafc" : "#1e293b",
            secondary: darkMode ? "#cbd5e1" : "#64748b"
          },
          success: { main: "#10b981", light: "#34d399", dark: "#059669" },
          warning: { main: "#f59e0b", light: "#fbbf24", dark: "#d97706" },
          error: { main: "#ef4444", light: "#f87171", dark: "#dc2626" },
          info: { main: "#3b82f6", light: "#60a5fa", dark: "#2563eb" },
          grey: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827"
          }
        },
        typography: {
          fontFamily: '"Plus Jakarta Sans", "Outfit", sans-serif',
          h1: { fontWeight: 800, fontSize: '2.5rem', letterSpacing: '-0.04em' },
          h2: { fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.03em' },
          h3: { fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' },
          h4: { fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' },
          h5: { fontWeight: 600, fontSize: '1.125rem', letterSpacing: '-0.01em' },
          h6: { fontWeight: 600, fontSize: '1rem', letterSpacing: '0em' },
          body1: { fontSize: '1rem', lineHeight: 1.6, letterSpacing: '0.02em' },
          body2: { fontSize: '0.875rem', lineHeight: 1.5, letterSpacing: '0.01em' },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '12px 32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover::before': {
                  left: '100%',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              },
              contained: {
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                boxShadow: '0 4px 15px 0 rgba(99, 102, 241, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #9333ea 100%)',
                  boxShadow: '0 8px 25px 0 rgba(99, 102, 241, 0.4)',
                },
              },
              outlined: {
                borderWidth: '2px',
                borderColor: 'currentColor',
                backdropFilter: 'blur(10px)',
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                '&:hover': {
                  borderWidth: '2px',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                border: `1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.3)'}`,
                background: darkMode
                  ? 'linear-gradient(165deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.5) 100%)'
                  : 'linear-gradient(165deg, rgba(255,255,255,0.5) 0%, rgba(248,250,252,0.5) 100%)',
                backdropFilter: 'blur(24px) saturate(200%)',
                boxShadow: darkMode
                  ? '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  : '0 12px 40px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-10px) scale(1.01)',
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.8)'}`,
                  boxShadow: darkMode
                    ? '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '0 25px 60px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 1)',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                fontWeight: 600,
                fontSize: '0.75rem',
                padding: '4px 8px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#ffffff',
                border: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                },
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 12,
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,1)',
                    boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.2)',
                  },
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: darkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(16px) saturate(180%)",
                borderBottom: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`,
                boxShadow: "none",
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
      {/* Enhanced Global Styles */}
      <Global
        styles={{
          '@import': 'url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap")',
          '*': {
            scrollBehavior: 'smooth',
          },
          body: {
            minHeight: '100vh',
            background: darkMode
              ? `radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
                 radial-gradient(at 50% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
                 radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
                 radial-gradient(at 50% 50%, rgba(99, 102, 241, 0.05) 0px, transparent 50%),
                 radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
                 radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
                 #0a0f1d`
              : `radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
                 radial-gradient(at 50% 0%, rgba(245, 158, 11, 0.1) 0px, transparent 50%),
                 radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
                 radial-gradient(at 50% 50%, rgba(99, 102, 241, 0.05) 0px, transparent 50%),
                 radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.05) 0px, transparent 50%),
                 radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.05) 0px, transparent 50%),
                 #f0f4f8`,
            backgroundAttachment: 'fixed',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: darkMode ? 0.35 : 0.15,
              zIndex: -1,
              pointerEvents: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cturbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3e%3c/svg%3e")`,
            },
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            overflowX: 'hidden',
          },
          '::selection': {
            backgroundColor: darkMode ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.2)',
            color: darkMode ? '#ffffff' : '#1e293b',
          },
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.5)',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '10px',
            '&:hover': {
              background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
            },
          },
          '@keyframes mesh': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
          },
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          '@keyframes glow': {
            '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
          },
        }}
      />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* AppBar with theme toggle and menu button */}
          {/* Floating Pill Navbar */}
          <AppBar
            position="fixed"
            sx={{
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: '90%', sm: 'fit-content' },
              minWidth: { sm: 400 },
              borderRadius: 50,
              background: darkMode
                ? 'rgba(15, 23, 42, 0.6)'
                : 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(12px) saturate(200%)',
              border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              boxShadow: darkMode
                ? '0 10px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
                : '0 10px 32px rgba(99, 102, 241, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
              zIndex: 1100,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                boxShadow: darkMode
                  ? '0 15px 40px rgba(0, 0, 0, 0.5)'
                  : '0 15px 40px rgba(99, 102, 241, 0.2)',
              }
            }}
          >
            <Toolbar sx={{
              justifyContent: "space-between",
              px: { xs: 2, sm: 4 },
              minHeight: { xs: 50, sm: 60 },
              gap: 2
            }}>
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: "none" },
                  color: theme.palette.text.primary,
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '-0.02em',
                  textDecoration: 'none',
                  display: { xs: 'none', md: 'block' },
                  '&:hover': {
                    color: theme.palette.primary.main,
                  }
                }}
              >
                PORTFOLIO.
              </Typography>

              {/* Desktop Nav Items inside the pill */}
              <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {Object.entries(componentMap).slice(0, 4).map(([path, { label }]) => (
                  <Button
                    key={path}
                    component={Link}
                    to={path === "home" ? "/" : `/${path}`}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      borderRadius: 10,
                      px: 2,
                      minWidth: 'auto',
                      '&:hover': {
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                        color: theme.palette.primary.main,
                      }
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>

              <IconButton
                onClick={handleThemeToggle}
                sx={{
                  color: theme.palette.text.primary,
                  bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  '&:hover': {
                    bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    transform: 'rotate(15deg)',
                  }
                }}
              >
                {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
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

          <Container
            maxWidth="lg"
            sx={{
              flexGrow: 1,
              pt: { xs: 12, sm: 16 }, // Padding for floating navbar
              pb: { xs: 4, sm: 8 },
              px: { xs: 2, sm: 3 }
            }}
          >
            <AnimatePresence mode="wait">
              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                      {[
                        { Component: Header, key: "header" },
                        { Component: About, key: "about" },
                        { Component: Skills, key: "skills" },
                        { Component: Projects, key: "projects" },
                        { Component: Experience, key: "experience" },
                        { Component: Education, key: "education" },
                        { Component: Testimonials, key: "testimonials" },
                        { Component: Contact, key: "contact" },
                      ].map(({ Component, key }) => (
                        <Grid item xs={12} key={key}>
                          <Suspense
                            fallback={
                              <Skeleton
                                variant="rectangular"
                                height={200}
                                sx={{ borderRadius: 8, opacity: 0.1 }}
                              />
                            }
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 30, scale: 0.98 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
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

        {/* Analytics Component */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <Suspense fallback={null}>
          <AIChatbot />
        </Suspense>
      </Router>
    </ThemeProvider >
  );
};

export default App;
