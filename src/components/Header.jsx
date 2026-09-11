import {
  Typography,
  Button,
  Box,
  Avatar,
  useTheme,
  Stack,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
import { cloneElement } from "react";
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQE6zXMuLJU5dg/profile-displayphoto-scale_400_400/B4DZ2Npe1zHUAg-/0/1776197956542?e=1790812800&v=beta&t=gNFd6Si8FBklZv8tvsYf4qKn4Wyp1ySWJbK6lCmIoYs";

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Firebase",
  "Redux",
  "Material UI",
  "Tailwind CSS",
];

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Dynamic styles based on theme
  const textColor = isDark ? '#fff' : '#1e293b';
  const subTextColor = isDark ? '#f1f5f9' : '#475569';
  const chipBg = isDark
    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    : 'linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%)';
  const chipText = isDark ? '#fff' : '#3730a3';
  const borderRing = isDark ? '#f59e0b' : '#f59e0b';
  const buttonContained = isDark
    ? 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
    : 'linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)';
  const buttonOutlined = isDark ? '#f59e0b' : '#f59e0b';

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: { xs: 8, md: 12 },
        mb: 8,
        p: { xs: 4, sm: 8, md: 12 },
        minHeight: { xs: 'auto', md: 600 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark
          ? 'linear-gradient(165deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)'
          : 'linear-gradient(165deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 250, 252, 0.4) 100%)',
        backdropFilter: 'blur(40px) saturate(180%)',
        boxShadow: isDark
          ? '0 30px 60px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
          : '0 30px 60px -12px rgba(99, 102, 241, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.3)'}`,
        overflow: 'hidden',
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.05)',
            border: `1px solid ${isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'}`,
            borderRadius: 10,
            px: 2,
            py: 0.5,
            mb: 4,
            width: 'fit-content'
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: '#10b981',
              borderRadius: '50%',
              boxShadow: '0 0 10px #10b981',
              animation: 'pulse 2s infinite'
            }}
          />
          <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 700, letterSpacing: '0.05em' }}>
            AVAILABLE FOR NEW PROJECTS
          </Typography>
        </Box>
      </motion.div>
      {/* Avatar Section */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Avatar
          alt="Syed Mahad Hussaini"
          src={avatarUrl}
          sx={{
            width: { xs: 120, sm: 140 },
            height: { xs: 120, sm: 140 },
            border: `4px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,1)'}`,
            boxShadow: theme.shadows[10],
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 5,
            right: 5,
            width: 32,
            height: 32,
            bgcolor: theme.palette.primary.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `4px solid ${isDark ? '#0f172a' : '#fff'}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          <Typography sx={{ fontSize: '1rem' }}>👋</Typography>
        </Box>
      </Box>

      {/* Name & Title */}
      {/* Hero Headline */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 900,
          color: textColor,
          textAlign: 'center',
          mb: 2,
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          background: isDark
            ? 'linear-gradient(to bottom, #fff 30%, rgba(255,255,255,0.6) 100%)'
            : 'linear-gradient(to bottom, #0f172a 30%, #475569 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Syed Mahad<br />Hussaini
      </Typography>

      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          mb: 4,
          fontWeight: 600,
          fontSize: { xs: '1.1rem', sm: '1.5rem' },
          letterSpacing: '-0.01em',
        }}
      >
        Full Stack Engineer & MERN Stack Specialist
      </Typography>

      {/* About Me */}
      <Typography
        variant="body1"
        sx={{
          color: subTextColor,
          maxWidth: 800,
          textAlign: 'center',
          mb: 6,
          fontSize: { xs: '1rem', sm: '1.2rem' },
          lineHeight: 1.7,
        }}
      >
        Engineering high-impact digital experiences and AI-infused architectures.
        Passionate about building scalable systems that solve complex problems and
        driving innovation through clean, performant code.
      </Typography>

      {/* Buttons */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={8}>
        <Button
          variant="contained"
          size="large"
          href="mailto:mahadarshad214@gmail.com"
          sx={{
            borderRadius: 10,
            px: 6,
            py: 2,
            fontSize: '1rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 24px rgba(99, 102, 241, 0.4)',
            }
          }}
        >
          Let&apos;s Build Together
        </Button>
        <Button
          variant="outlined"
          size="large"
          href="/resume.pdf"
          target="_blank"
          sx={{
            borderRadius: 10,
            px: 6,
            py: 2,
            fontSize: '1rem',
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            color: textColor,
            backdropFilter: 'blur(10px)',
            '&:hover': {
              borderColor: theme.palette.primary.main,
              bgcolor: 'rgba(99, 102, 241, 0.05)',
              transform: 'translateY(-2px)',
            }
          }}
        >
          View Resume
        </Button>
      </Stack>

      {/* Quick Links */}
      <Stack direction="row" spacing={4} sx={{ mb: 8 }}>
        {[
          { icon: <GitHub />, url: "https://github.com/mahadhussaini" },
          { icon: <LinkedIn />, url: "https://www.linkedin.com/in/mahad-arshad" },
          { icon: <Email />, url: "mailto:mahadarshad214@gmail.com" }
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            whileHover={{ y: -5, color: theme.palette.primary.main }}
            style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', cursor: 'pointer' }}
          >
            {cloneElement(item.icon, { sx: { fontSize: 28 } })}
          </motion.a>
        ))}
      </Stack>

      {/* Tech Stack Horizontal Scroll/Grid */}
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        <Divider sx={{ mb: 4, opacity: 0.1 }}>
          <Chip
            label="TECH ECOSYSTEM"
            size="small"
            sx={{ fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.65rem' }}
          />
        </Divider>
        <Grid container spacing={2} justifyContent="center">
          {techStack.slice(0, 10).map((tech, i) => (
            <Grid item key={i}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05, bgcolor: 'rgba(99, 102, 241, 0.1)' }}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: 4,
                  bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                  color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  cursor: 'default'
                }}
              >
                {tech}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default Header;
