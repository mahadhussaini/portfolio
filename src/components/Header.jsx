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
  "https://media.licdn.com/dms/image/v2/D4D03AQH5f51S2SOtlg/profile-displayphoto-shrink_800_800/B4DZbelo9KHEAc-/0/1747491133558?e=1753315200&v=beta&t=4DoUL8xTtKWzseGZRvB9MYFaMnz93rrQQ9YT7ImLcFc";

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
  const background = isDark
    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)'
    : 'linear-gradient(135deg, #ede9fe 0%, #c7d2fe 50%, #a5b4fc 100%)';
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
        borderRadius: 4,
        mb: 6,
        p: { xs: 3, sm: 6 },
        minHeight: { xs: 400, sm: 500 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Avatar with border */}
      <Box
        sx={{
          mb: 2,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <Avatar
            alt="Syed Mahad Hussaini"
            src={avatarUrl}
            sx={{
              width: { xs: 110, sm: 140 },
              height: { xs: 110, sm: 140 },
              border: '5px solid #fff',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              background: background,
            }}
          />
          {/* Animated border ring */}
          <Box
            sx={{
              position: 'absolute',
              top: -8,
              left: -8,
              width: { xs: 126, sm: 156 },
              height: { xs: 126, sm: 156 },
              borderRadius: '50%',
              border: `3px solid ${borderRing}`,
              boxSizing: 'border-box',
              zIndex: 0,
              animation: 'spin 6s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
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
        I&apos;m a passionate <b>Full Stack Developer</b> with expertise in building scalable, high-performance web applications. Specializing in modern JavaScript ecosystems, cloud-native architectures, and microservices, I transform complex business requirements into elegant, maintainable solutions.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: subTextColor, maxWidth: 800, mb: 3, lineHeight: 1.6, letterSpacing: '0.025em' }}
      >
        With <b>3+ years of experience</b> across diverse domains including <b>SaaS platforms</b>, <b>enterprise applications</b>, and <b>real-time systems</b>, I&apos;ve successfully delivered projects that serve millions of users. My expertise spans from <b>frontend optimization</b> and <b>backend architecture</b> to <b>DevOps automation</b> and <b>cloud infrastructure</b>.
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
