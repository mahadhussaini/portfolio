import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      py={4}
      mt={4}
      borderTop={1}
      borderColor="rgba(255, 255, 255, 0.3)"
      color="#ddd"
    >
      <Typography variant="body2" mb={2}>
        &copy; 2025 Syed Mahad Hussaini. All rights reserved.
      </Typography>

      {/* <Box mb={2}>
        <Link
          href="https://www.linkedin.com/in/mahad-arshad"
          target="_blank"
          sx={{ marginRight: 2, color: "#ddd", "&:hover": { color: "#fff" } }}
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/mahadhussaini"
          target="_blank"
          sx={{ marginRight: 2, color: "#ddd", "&:hover": { color: "#fff" } }}
        >
          GitHub
        </Link>
      </Box> */}

      <Box mb={2}>
        <Link
          href="/terms-of-service"
          sx={{
            color: "#ddd",
            marginRight: 2,
            "&:hover": { color: "#fff", textDecoration: "underline" },
          }}
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy-policy"
          sx={{
            color: "#ddd",
            "&:hover": { color: "#fff", textDecoration: "underline" },
          }}
        >
          Privacy Policy
        </Link>
      </Box>

      <Typography variant="body2" sx={{ color: "#ddd", mt: 2 }}>
        Built with ❤️ by Syed Mahad Hussaini
      </Typography>
    </Box>
  );
};

export default Footer;
