import React from "react";
import {
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  Chip,
  Grid,
  Divider,
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
  "JavaScript",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GraphQL",
  "Docker",
  "Firebase",
  "AWS",
  "Redux",
  "Material UI",
];

const Header = () => {
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
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        boxShadow: 3,
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
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              background: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
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
              border: '3px solid #ff7f50',
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
          fontWeight: 700,
          color: '#fff',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          mb: 1,
          fontSize: { xs: '2.2rem', sm: '3rem' },
          textAlign: 'center',
          width: '100%',
        }}
      >
        Syed Mahad Hussaini
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: '#e0eafc', mb: 2, fontWeight: 400 }}
      >
        Full Stack Developer &bull; Karachi, Pakistan
      </Typography>

      {/* About Me */}
      <Typography
        variant="body1"
        sx={{
          color: '#f4f7fa',
          maxWidth: 700,
          mb: 2,
          fontStyle: 'italic',
        }}
      >
        I am a dedicated developer with a passion for creating efficient and scalable web solutions. My expertise lies in the <b>MERN Stack</b>, with proficiency in both front-end and back-end technologies. I enjoy solving complex problems and continuously learning new tools and technologies.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#f4f7fa', maxWidth: 800, mb: 3 }}
      >
        <b>3 years of experience</b> in web development, focusing on modern JavaScript frameworks, RESTful APIs, and cloud deployment. My projects range from <b>freelance applications</b> to <b>enterprise-level solutions</b> and <b>open-source contributions</b>.
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
            fontSize: '1.1rem',
            boxShadow: 2,
          }}
        >
          Contact Me
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
            fontSize: '1.1rem',
            borderWidth: 2,
            borderColor: '#ff7f50',
            color: '#ff7f50',
            '&:hover': {
              background: '#ff7f50',
              color: '#fff',
              borderColor: '#ff7f50',
            },
          }}
        >
          Download Resume
        </Button>
      </Stack>

      {/* Contact Info */}
      <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
        <a href="mailto:mahadarshad214@gmail.com" target="_blank" rel="noopener noreferrer">
          <Email sx={{ color: '#fff', fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#ff7f50' } }} />
        </a>
        <a href="tel:+923306147798" target="_blank" rel="noopener noreferrer">
          <Phone sx={{ color: '#fff', fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#ff7f50' } }} />
        </a>
        <a href="https://github.com/mahadhussaini" target="_blank" rel="noopener noreferrer">
          <GitHub sx={{ color: '#fff', fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#ff7f50' } }} />
        </a>
        <a href="https://www.linkedin.com/in/mahad-arshad" target="_blank" rel="noopener noreferrer">
          <LinkedIn sx={{ color: '#fff', fontSize: 32, transition: 'color 0.2s', '&:hover': { color: '#ff7f50' } }} />
        </a>
      </Stack>

      <Divider sx={{ bgcolor: '#fff', opacity: 0.2, my: 3, width: '60%' }} />

      {/* Tech Stack */}
      <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
        🛠️ Tech Stack
      </Typography>
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        {techStack.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              sx={{
                background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
                color: '#fff',
                fontWeight: 500,
                fontSize: '1rem',
                boxShadow: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Header;
