import React from "react";
import { Typography, Button, Box, Avatar, Stack } from "@mui/material";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1742428800&v=beta&t=lrJaDWj0t-jZZ1RSD-KhIxLbPc3YX_Ej4Xy-7621LS8";

const Header = () => {
  return (
    <Box
      textAlign="center"
      mb={5}
      sx={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px 20px",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
      }}
    >
      <Avatar
        alt="Syed Mahad Hussaini"
        src={avatarUrl}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto",
          border: "4px solid white",
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
          marginTop: "15px",
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

      <Typography
        variant="body1"
        sx={{
          color: "#ddd",
          marginBottom: 3,
          maxWidth: "700px",
          margin: "0 auto",
          fontStyle: "italic",
        }}
      >
        Passionate about building web applications that solve real-world
        problems. Skilled in both front-end and back-end technologies with a
        focus on clean, maintainable code.
      </Typography>

      {/* Tagline or Short Introduction */}
      <Typography variant="body1" sx={{ color: "#ddd", mb: 4 }}>
        "Building scalable, high-performance web solutions to bridge the gap
        between ideas and real-world applications."
      </Typography>

      {/* Contact Info */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Email:{" "}
        <a href="mailto:mahadarshad214@gmail.com" style={{ color: "#f1c40f" }}>
          mahadarshad214@gmail.com
        </a>{" "}
        | Phone:{" "}
        <a href="tel:+923306147798" style={{ color: "#f1c40f" }}>
          +92 330 6147798
        </a>
      </Typography>

      {/* Skills Section */}
      <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
        Key Skills
      </Typography>
      <Typography variant="body1" sx={{ color: "#ddd", mb: 4 }}>
        JavaScript | React | Node.js | Express | MongoDB | SQL | Git | Docker |
        Python | HTML/CSS | REST APIs | Agile Development
      </Typography>

      {/* Button Section */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/mahad-arshad"
          target="_blank"
          sx={{
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
      </Stack>
    </Box>
  );
};

export default Header;
