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

      <Typography variant="body2" sx={{ color: "#ddd", mt: 2 }}>
        Built with ❤️ by Syed Mahad Hussaini
      </Typography>
    </Box>
  );
};

export default Footer;
