import {
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  Chip,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQElb7kbs6CG7Q/profile-displayphoto-crop_800_800/B4DZtVFo0UIIAI-/0/1766659103911?e=1768435200&v=beta&t=6YjImW-24xvVeRmrT58frbfLNM2R3bCzq9vd1kYF19E";

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
        overflow: 'hidden',
        borderRadius: 6,
        mb: 8,
        p: { xs: 4, sm: 8 },
        minHeight: { xs: 500, sm: 600 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark
          ? `linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%),
             radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
          : `linear-gradient(135deg, #ede9fe 0%, #ddd6fe 30%, #c7d2fe 70%, #a5b4fc 100%),
             radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
        boxShadow: isDark
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        border: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
               radial-gradient(circle at 70% 80%, rgba(99,102,241,0.2) 0%, transparent 40%)`
            : `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 40%),
               radial-gradient(circle at 70% 80%, rgba(99,102,241,0.1) 0%, transparent 40%)`,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          animation: 'shimmer 3s ease-in-out infinite',
        },
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Enhanced Animated Avatar with multiple rings */}
      <Box
        sx={{
          mb: 3,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        >
          <Avatar
            alt="Syed Mahad Hussaini"
            src={avatarUrl}
            sx={{
              width: { xs: 130, sm: 160 },
              height: { xs: 130, sm: 160 },
              border: '6px solid rgba(255,255,255,0.9)',
              boxShadow: isDark
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 4px rgba(99, 102, 241, 0.3)'
                : '0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(99, 102, 241, 0.2)',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              position: 'relative',
              zIndex: 2,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: isDark
                  ? '0 35px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 6px rgba(99, 102, 241, 0.4)'
                  : '0 35px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 6px rgba(99, 102, 241, 0.3)',
              },
            }}
          />
          
          {/* Primary animated ring */}
          <Box
            sx={{
              position: 'absolute',
              top: -12,
              left: -12,
              width: { xs: 154, sm: 184 },
              height: { xs: 154, sm: 184 },
              borderRadius: '50%',
              border: `3px solid ${borderRing}`,
              boxSizing: 'border-box',
              zIndex: 1,
              animation: 'spin 8s linear infinite',
              opacity: 0.8,
            }}
          />
          
          {/* Secondary animated ring */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: { xs: 170, sm: 200 },
              height: { xs: 170, sm: 200 },
              borderRadius: '50%',
              border: `2px dashed rgba(245, 158, 11, 0.6)`,
              boxSizing: 'border-box',
              zIndex: 0,
              animation: 'spin 12s linear infinite reverse',
              opacity: 0.6,
            }}
          />
          
          {/* Glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: 180, sm: 220 },
              height: { xs: 180, sm: 220 },
              borderRadius: '50%',
              background: isDark
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
              zIndex: -1,
              animation: 'glow 3s ease-in-out infinite alternate',
            }}
          />
        </motion.div>
      </Box>

      {/* Name & Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: textColor,
          textShadow: isDark ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
          mb: 1,
          fontSize: { xs: '2.2rem', sm: '3rem' },
          textAlign: 'center',
          width: '100%',
          letterSpacing: '-0.025em',
        }}
      >
        Syed Mahad Hussaini
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: subTextColor, mb: 2, fontWeight: 500, letterSpacing: '0.025em' }}
      >
        Full Stack Developer &bull; Karachi, Pakistan
      </Typography>

      {/* About Me */}
      <Typography
        variant="body1"
        sx={{
          color: subTextColor,
          maxWidth: 700,
          mb: 2,
          fontStyle: 'italic',
          lineHeight: 1.6,
          letterSpacing: '0.025em',
        }}
      >
        Hi, I’m Mahad—a curious problem solver, lifelong learner, and passionate <b>Full Stack Developer</b>. I love building things that make life easier, more beautiful, or more fun. My journey in tech began with a fascination for how things work, and it’s grown into a career where I get to collaborate, create, and help others every day.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: subTextColor, maxWidth: 800, mb: 3, lineHeight: 1.6, letterSpacing: '0.025em' }}
      >
        Over the past few years, I’ve worked with amazing teams to deliver projects that solve real problems—whether it’s a SaaS platform for businesses, a tool for healthcare professionals, or a simple app that brings people together. I believe in the power of technology to connect, empower, and inspire. When I’m not coding, you’ll find me mentoring, learning something new, or enjoying a good cup of tea. Let’s build something meaningful together!
      </Typography>

      {/* Call to Action */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3} alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="mailto:mahadarshad214@gmail.com"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            background: buttonContained,
            color: isDark ? '#fff' : '#7c2d12',
            '&:hover': {
              background: isDark
                ? 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)'
                : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: isDark ? '#fff' : '#fff',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          Let&apos;s Collaborate
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="/resume.pdf"
          target="_blank"
          download
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: '1rem',
            borderWidth: 2,
            borderColor: buttonOutlined,
            color: buttonOutlined,
            background: isDark ? 'transparent' : '#fff',
            '&:hover': {
              background: buttonOutlined,
              color: '#fff',
              borderColor: buttonOutlined,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
          }}
        >
          Download Resume
        </Button>
      </Stack>

      {/* Contact Info */}
      <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
        <a href="mailto:mahadarshad214@gmail.com" target="_blank" rel="noopener noreferrer">
          <Email sx={{ color: textColor, fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#f59e0b' } }} />
        </a>
        <a href="tel:+923306147798" target="_blank" rel="noopener noreferrer">
          <Phone sx={{ color: textColor, fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#f59e0b' } }} />
        </a>
        <a href="https://github.com/mahadhussaini" target="_blank" rel="noopener noreferrer">
          <GitHub sx={{ color: textColor, fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#f59e0b' } }} />
        </a>
        <a href="https://www.linkedin.com/in/mahad-arshad" target="_blank" rel="noopener noreferrer">
          <LinkedIn sx={{ color: textColor, fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#f59e0b' } }} />
        </a>
      </Stack>

      <Divider sx={{ bgcolor: textColor, opacity: 0.2, my: 3, width: '60%' }} />

      {/* Tech Stack */}
      <Typography variant="h6" sx={{ color: textColor, mb: 2, fontWeight: 600, letterSpacing: '0.025em' }}>
        🛠️ Core Technologies
      </Typography>
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        {techStack.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              sx={{
                background: chipBg,
                color: chipText,
                fontWeight: 500,
                fontSize: '0.875rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Header;
