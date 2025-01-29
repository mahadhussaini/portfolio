import React from "react";
import {
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1742428800&v=beta&t=lrJaDWj0t-jZZ1RSD-KhIxLbPc3YX_Ej4Xy-7621LS8";

const Header = () => {
  return (
    <Box
      textAlign="center"
      mb={5}
      sx={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "50px 20px",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      {/* Animated Avatar */}
      <Avatar
        alt="Syed Mahad Hussaini"
        src={avatarUrl}
        sx={{
          width: 140,
          height: 140,
          margin: "0 auto",
          border: "4px solid white",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />

      {/* Name & Title */}
      <Typography
        variant="h2"
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

      <Typography variant="h6" sx={{ color: "#ddd", mb: 3 }}>
        Full Stack Developer | Karachi, Pakistan
      </Typography>

      {/* About Me Section */}
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
        Passionate about developing modern web applications that solve
        real-world problems. With a strong foundation in front-end and back-end
        technologies, I focus on writing clean, scalable, and maintainable code.
      </Typography>

      {/* Experience Summary */}
      <Typography
        variant="body1"
        sx={{ color: "#ddd", mb: 4, maxWidth: "800px", margin: "0 auto" }}
      >
        <strong>2+ years of experience</strong> in developing web applications,
        specializing in the **MERN Stack**, **RESTful APIs**, and **Cloud
        Deployments**. Experienced in working on **Freelance Projects,
        Enterprise Applications, and Open-Source Contributions**.
      </Typography>

      {/* Contact Information */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        📧 Email:{" "}
        <a
          href="mailto:mahadarshad214@gmail.com"
          style={{ color: "#f1c40f", textDecoration: "none" }}
        >
          mahadarshad214@gmail.com
        </a>{" "}
        | 📞 Phone:{" "}
        <a
          href="tel:+923306147798"
          style={{ color: "#f1c40f", textDecoration: "none" }}
        >
          +92 330 6147798
        </a>
      </Typography>

      {/* Skills Section */}
      <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
        Tech Stack
      </Typography>
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 3 }}>
        {[
          "JavaScript",
          "React.js",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "GraphQL",
          "Docker",
          "Firebase",
          "AWS",
          "Redux",
          "Material UI",
        ].map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              sx={{ backgroundColor: "#f1c40f", color: "#222" }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Quote */}
      <Typography
        variant="body1"
        sx={{
          color: "#ddd",
          fontStyle: "italic",
          fontSize: "1.1rem",
          mb: 4,
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        "Building scalable, high-performance web solutions to bridge the gap
        between ideas and real-world applications."
      </Typography>

      {/* Buttons for LinkedIn, GitHub */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        mb={3}
        marginTop={2}
      >
        <Button
          variant="contained"
          startIcon={<LinkedIn />}
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
          startIcon={<GitHub />}
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
