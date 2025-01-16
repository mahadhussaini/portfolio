import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      py={6}
      mt={4}
      borderTop={1}
      borderColor="rgba(255, 255, 255, 0.3)"
      color="#ddd"
    >
      <Typography variant="body2" mb={2}>
        &copy; 2025 Syed Mahad Hussaini. All rights reserved.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Typography variant="body2">
            Built with ❤️ by Syed Mahad Hussaini
          </Typography>
        </Grid>
      </Grid>

      {/* Social Media Links */}
      <Grid container spacing={2} justifyContent="center" mt={2}>
        <Grid item>
          <Link
            href="https://github.com/mahadhussaini"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHub
              fontSize="large"
              sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
            />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/mahad-arshad"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedIn
              fontSize="large"
              sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
            />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="mailto:mahadarshad214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Email
              fontSize="large"
              sx={{ color: "#ddd", "&:hover": { color: "#f1c40f" } }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
