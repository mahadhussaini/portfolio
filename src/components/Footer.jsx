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
        sx={{ fontWeight: 700, mb: 2, color: '#2575fc' }}
      >
        Let&apos;s Connect!
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", margin: "0 auto", mb: 3, color: '#333' }}
      >
        Whether you&apos;re looking to collaborate on an exciting project or just want to chat about technology, feel free to reach out!
      </Typography>

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
            <GitHub fontSize="large" sx={{ color: "#2575fc", '&:hover': { color: '#ff7f50' } }} />
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
            <LinkedIn fontSize="large" sx={{ color: "#2575fc", '&:hover': { color: '#ff7f50' } }} />
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
            <Email fontSize="large" sx={{ color: "#2575fc", '&:hover': { color: '#ff7f50' } }} />
          </Link>
        </motion.div>
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          bgcolor: "rgba(37, 117, 252, 0.2)",
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
          color: '#2575fc',
        }}
      >
        &quot;Passion fuels innovation. Let&apos;s build the future, one line of code at a time.&quot;
      </Typography>

      {/* Bottom Section - Copyright */}
      <Typography variant="body2" mb={1} sx={{ color: "#888" }}>
        &copy; {new Date().getFullYear()} Syed Mahad Hussaini. All rights reserved.
      </Typography>

      <Typography variant="body2">
        Built with <Favorite sx={{ verticalAlign: "middle", color: "#ff7f50", mx: 0.5 }} /> by Syed Mahad Hussaini
      </Typography>
    </Box>
  );
};

export default Footer;
