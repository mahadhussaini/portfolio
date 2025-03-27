import React from "react";
import {
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  Chip,
  Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
  Work,
  Code,
  BusinessCenter,
  School,
} from "@mui/icons-material";

const avatarUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1748476800&v=beta&t=m-ApWJYLSAZaNF66HFH9opbF7iq-AS4YTUSUT1h_I20";

const Header = () => {
  return (
    <Box
      textAlign="center"
      mb={5}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: "50px 20px",
        borderRadius: "15px",
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
        I am a dedicated developer with a passion for creating efficient and
        scalable web solutions. My expertise lies in the **MERN Stack**, with
        proficiency in both front-end and back-end technologies. I enjoy solving
        complex problems and continuously learning new tools and technologies.
      </Typography>

      {/* Experience Summary */}
      <Typography
        variant="body1"
        sx={{ color: "#ddd", mb: 4, maxWidth: "800px", margin: "0 auto" }}
      >
        <strong>2+ years of experience</strong> in web development, focusing on
        modern JavaScript frameworks, RESTful APIs, and cloud deployment. My
        projects range from <strong>freelance applications</strong> to{" "}
        <strong>enterprise-level solutions</strong> and{" "}
        <strong>open-source contributions</strong>.
      </Typography>

      <Divider sx={{ bgcolor: "#bbb", margin: "20px auto", width: "60%" }} />

      {/* Contact Information */}
      <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
        📩 Contact Information
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "#ddd" }}>
        <Email sx={{ verticalAlign: "middle", mr: 1, color: "white" }} />
        <a
          href="mailto:mahadarshad214@gmail.com"
          style={{ color: "#f1c40f", textDecoration: "none" }}
        >
          mahadarshad214@gmail.com
        </a>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "#ddd" }}>
        <Phone sx={{ verticalAlign: "middle", mr: 1, color: "white" }} />
        <a
          href="tel:+923306147798"
          style={{ color: "#f1c40f", textDecoration: "none" }}
        >
          +92 330 6147798
        </a>
      </Typography>

      <Divider sx={{ bgcolor: "#bbb", margin: "20px auto", width: "60%" }} />

      {/* Tech Stack */}
      <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
        🛠️ Tech Stack
      </Typography>
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 4 }}>
        {[
          "JavaScript",
          "React.js",
          "React Native",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
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

      <Divider sx={{ bgcolor: "#bbb", margin: "20px auto", width: "60%" }} />

      {/* Work Experience */}
      {/* <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
        💼 Work Experience
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            margin: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ color: "#f1c40f", mb: 1, fontWeight: "bold" }}
            >
              Freelance Developer
            </Typography>
            <Typography variant="body2" color="#ddd">
              Developed custom web applications for clients across different
              industries, focusing on performance and user experience.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            margin: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ color: "#f1c40f", mb: 1, fontWeight: "bold" }}
            >
              Open Source Contributor
            </Typography>
            <Typography variant="body2" color="#ddd">
              Contributed to GitHub repositories, implementing new features and
              enhancing application stability.
            </Typography>
          </CardContent>
        </Card>
      </Box> */}

      {/* Social Links */}
      <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
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
