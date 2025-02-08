import React from "react";
import { Box, Typography, Link, Divider, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email, Favorite } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      textAlign="center"
      py={6}
      mt={6}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#ddd",
        animation: "fadeInUp 1.5s ease-in-out",
      }}
    >
      {/* Top Section - Let's Connect */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
      >
        Let&apos;s Connect!
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", margin: "0 auto", mb: 3 }}
      >
        Whether you&apos;re looking to collaborate on an exciting project or
        just want to chat about technology, feel free to reach out!
      </Typography>

      {/* Social Media Links */}
      <Stack direction="row" spacing={3} justifyContent="center" mt={2}>
        <Link
          href="https://github.com/mahadhussaini"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <GitHub
            fontSize="large"
            sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mahad-arshad"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <LinkedIn
            fontSize="large"
            sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
          />
        </Link>
        <Link
          href="mailto:mahadarshad214@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <Email
            fontSize="large"
            sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
          />
        </Link>
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.3)",
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
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto",
          mb: 3,
        }}
      >
        &quot;Passion fuels innovation. Let&apos;s build the future, one line of
        code at a time.&quot;
      </Typography>

      {/* Bottom Section - Copyright */}
      <Typography variant="body2" mb={1} sx={{ color: "#bbb" }}>
        &copy; {new Date().getFullYear()} Syed Mahad Hussaini. All rights
        reserved.
      </Typography>

      <Typography variant="body2">
        Built with{" "}
        <Favorite sx={{ verticalAlign: "middle", color: "#e74c3c", mx: 0.5 }} />{" "}
        by Syed Mahad Hussaini
      </Typography>
    </Box>
  );
};

export default Footer;
