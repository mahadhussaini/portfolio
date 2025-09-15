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
          fontFamily: [
            '"Inter"',
            '"Poppins"',
            '"Roboto"',
            '"SF Pro Display"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'system-ui',
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
                borderRadius: 20,
                border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                background: darkMode 
                  ? 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: darkMode
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: darkMode 
                    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: darkMode
                    ? '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 20px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
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
                background: darkMode 
                  ? 'linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                backdropFilter: 'blur(24px)',
                borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                boxShadow: darkMode
                  ? '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
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
          '*': {
            scrollBehavior: 'smooth',
          },
          body: {
            minHeight: '100vh',
            background: darkMode
              ? `linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #374151 60%, #4b5563 100%),
                 radial-gradient(circle at 20% 80%, rgba(120, 113, 108, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
              : `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #cbd5e1 60%, #94a3b8 100%),
                 radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`,
            backgroundAttachment: 'fixed',
            fontFamily: 'Inter, Poppins, Roboto, Helvetica Neue, Arial, sans-serif',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'auto',
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
            background: darkMode 
              ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
              : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '10px',
            '&:hover': {
              background: darkMode 
                ? 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
            },
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
          <AppBar position="sticky" sx={{
            background: theme.palette.mode === 'dark'
              ? 'rgba(15,23,42,0.95)'
              : 'rgba(255,255,255,0.95)',
            color: theme.palette.text.primary,
            boxShadow: theme.palette.mode === 'dark' ? 3 : 2,
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            backdropFilter: 'blur(20px)',
            zIndex: 1100,
          }}>
            <Toolbar sx={{ 
              justifyContent: "space-between",
              px: { xs: 2, sm: 3 },
              minHeight: { xs: 56, sm: 64 }
            }}>
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { sm: "none" }, 
                  color: theme.palette.text.primary,
                  mr: 1
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  color: theme.palette.text.primary, 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Portfolio
              </Typography>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  color: theme.palette.text.primary, 
                  fontWeight: 700,
                  fontSize: '1rem',
                  display: { xs: 'block', sm: 'none' }
                }}
              >
                Portfolio
              </Typography>
              <IconButton 
                onClick={handleThemeToggle} 
                sx={{ 
                  color: theme.palette.text.primary,
                  ml: 1
                }}
              >
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
          <Container 
            maxWidth="lg" 
            sx={{ 
              flexGrow: 1, 
              py: { xs: 2, sm: 4 },
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
        
        {/* Analytics Component */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
