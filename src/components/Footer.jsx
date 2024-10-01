import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      py={3}
      mt={4}
      borderTop={1}
      borderColor="rgba(255, 255, 255, 0.3)"
      color="#ddd"
    >
      <Typography variant="body2">&copy; 2024 Syed Mahad Hussaini</Typography>
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
        sx={{ color: "#ddd", "&:hover": { color: "#fff" } }}
      >
        GitHub
      </Link>
    </Box>
  );
};

export default Footer;
