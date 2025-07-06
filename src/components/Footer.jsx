import React from "react";
import { Box, Typography, Link, Divider, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email, Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      textAlign="center"
      py={6}
      mt={6}
      sx={{
        background: 'rgba(255,255,255,0.15)',
        color: '#222',
        borderRadius: 6,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        backdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(255,255,255,0.25)',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      {/* Top Section - Let's Connect */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 2, color: '#6366f1', letterSpacing: '-0.025em' }}
      >
        Ready to Build Something Amazing?
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", margin: "0 auto", mb: 3, color: '#333', lineHeight: 1.6, letterSpacing: '0.025em' }}
      >
        Whether you&apos;re looking to collaborate on an exciting project, need technical consultation, or just want to discuss the latest in web development, I&apos;d love to hear from you!
      </Typography>

      {/* Testimonials Section */}
      <Box sx={{ mb: 4, p: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 3 }}>
        <Typography variant="h6" sx={{ color: '#6366f1', mb: 2, fontWeight: 600, letterSpacing: '-0.025em' }}>
          💬 What Clients Say
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1, p: 2, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#333', mb: 1, lineHeight: 1.6 }}>
              &quot;Mahad delivered our SaaS platform ahead of schedule with exceptional quality. His technical expertise and problem-solving skills are outstanding.&quot;
            </Typography>
            <Typography variant="caption" sx={{ color: '#6366f1', fontWeight: 600 }}>
              — Sarah Chen, CTO at TechFlow Solutions
            </Typography>
          </Box>
          <Box sx={{ flex: 1, p: 2, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#333', mb: 1, lineHeight: 1.6 }}>
              &quot;Working with Mahad was a game-changer for our startup. He not only built a great product but also mentored our team on best practices.&quot;
            </Typography>
            <Typography variant="caption" sx={{ color: '#6366f1', fontWeight: 600 }}>
              — Alex Rodriguez, Founder at InnovateLab
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Social Media Links */}
      <Stack direction="row" spacing={3} justifyContent="center" mt={2}>
        <motion.div whileHover={{ scale: 1.2, rotate: -8 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://github.com/mahadhussaini"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ transition: "color 0.2s" }}
          >
            <GitHub fontSize="large" sx={{ color: "#6366f1", '&:hover': { color: '#f59e0b' } }} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 8 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://www.linkedin.com/in/mahad-arshad"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ transition: "color 0.2s" }}
          >
            <LinkedIn fontSize="large" sx={{ color: "#6366f1", '&:hover': { color: '#f59e0b' } }} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 0 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="mailto:mahadarshad214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ transition: "color 0.2s" }}
          >
            <Email fontSize="large" sx={{ color: "#6366f1", '&:hover': { color: '#f59e0b' } }} />
          </Link>
        </motion.div>
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          bgcolor: "rgba(99, 102, 241, 0.2)",
          my: 4,
          width: "50%",
          margin: "20px auto",
        }}
      />

      {/* Middle Section - Quote */}
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          fontSize: "1.15rem",
          maxWidth: "700px",
          margin: "0 auto",
          mb: 3,
          color: '#6366f1',
          lineHeight: 1.6,
          letterSpacing: '0.025em',
        }}
      >
        &quot;The best code is not just functional—it&apos;s elegant, maintainable, and scalable. Let&apos;s build the future, one line of code at a time.&quot;
      </Typography>

      {/* Bottom Section - Copyright */}
      <Typography variant="body2" mb={1} sx={{ color: "#888" }}>
        &copy; {new Date().getFullYear()} Syed Mahad Hussaini. All rights reserved.
      </Typography>

      <Typography variant="body2">
        Built with <Favorite sx={{ verticalAlign: "middle", color: "#f59e0b", mx: 0.5 }} /> and modern web technologies
      </Typography>
    </Box>
  );
};

export default Footer;
