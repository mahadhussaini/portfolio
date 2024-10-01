import React from "react";
import { Typography, Button, Box, Avatar } from "@mui/material";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1733356800&v=beta&t=Quc3mGhSDdWe4dJxIANuAbjxlwNPB1wCRIpI7Qn3MqI";

const Header = () => {
  return (
    <Box textAlign="center" mb={5}>
      <Avatar
        alt="Syed Mahad Hussaini"
        src={avatarUrl}
        sx={{
          width: 100,
          height: 100,
          margin: "0 auto",
          border: "2px solid white",
        }}
      />
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#fff",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          marginTop: "10px",
        }}
      >
        Syed Mahad Hussaini
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ color: "#ddd", mb: 3 }}
      >
        Full Stack Developer | Karachi, Pakistan
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Email: mahadarshad214@gmail.com | Phone: +92 3306147798
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/mahad-arshad"
          target="_blank"
          sx={{
            marginRight: 2,
            backgroundColor: "#3b5998",
            "&:hover": { backgroundColor: "#2d4373" },
          }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/mahadhussaini"
          target="_blank"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#444" },
          }}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
