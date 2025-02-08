import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const Experience = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "15px",
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}
        >
          💼 Experience
        </Typography>

        {/* Freelancer.com Experience */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Freelancer.com - Full Stack Developer
          </Typography>
          <Typography color="textprimary">
            03/2024 - Present | Remote
          </Typography>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            As a Full Stack Developer on Freelancer, I specialize in building
            modern web applications with scalable architecture, robust backend
            systems, and seamless user experiences.
          </Typography>

          <ul style={{ marginTop: 10, paddingLeft: 20 }}>
            <li>
              **Designed and developed** full-stack applications using MERN
              stack, optimizing performance and security.
            </li>
            <li>
              **Implemented RESTful APIs** and third-party integrations,
              including payment gateways and cloud services.
            </li>
            <li>
              **Utilized AWS, Docker, and CI/CD pipelines** to ensure reliable
              deployment and scalability.
            </li>
          </ul>

          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Technologies Used:</strong> React.js, Next.js, Node.js,
            Express, MongoDB, MySQL, Redis, Firebase, AWS, Docker.
          </Typography>

          <Divider sx={{ marginY: 2, backgroundColor: "#f1c40f" }} />

          {/* Key Projects */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Key Projects
          </Typography>

          {/* SoleMates E-commerce */}
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <strong>SoleMates (E-commerce Platform)</strong> - A feature-rich
            e-commerce website built using the MERN stack. Supports user
            authentication, shopping cart, order management, and secure payment
            processing.
          </Typography>
          <Typography variant="body2" color="textprimary">
            <em>Project Duration: January 2025 - May 2025</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/solemates"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "none" }}
            >
              View SoleMates on GitHub
            </a>
          </Typography>

          <Divider sx={{ marginY: 2, backgroundColor: "#f1c40f" }} />

          {/* LearnHub (LMS) */}
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>LearnHub (LMS Platform)</strong> - A full-stack Learning
            Management System featuring real-time chat, video streaming, and
            interactive courses.
          </Typography>
          <Typography variant="body2" color="textprimary">
            <em>Project Duration: August 2024 - December 2024</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/learnhub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "none" }}
            >
              View LearnHub on GitHub
            </a>
          </Typography>

          <Divider sx={{ marginY: 2, backgroundColor: "#f1c40f" }} />

          {/* EventWave (Event Management Platform) */}
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>EventWave (Event Management Platform)</strong> - A
            full-stack application designed for event creation, user
            registrations, and feedback collection. Integrated Google Calendar
            API for event synchronization.
          </Typography>
          <Typography variant="body2" color="textprimary">
            <em>Project Duration: March 2024 - July 2024</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/eventwave"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "none" }}
            >
              View EventWave on GitHub
            </a>
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

        {/* Paysys Labs Internship */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Paysys Labs - Software Development Intern
          </Typography>
          <Typography color="textprimary">
            12/2023 - 02/2024 | Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Contributed to the **Bureau of Emigration & Overseas Employment**
            project, improving backend performance and optimizing API endpoints.
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

        {/* Volunteer Work */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Volunteer - Tech for Good
          </Typography>
          <Typography color="textprimary">
            06/2023 - 09/2023 | Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Developed a user-friendly website for a non-profit organization
            focused on tech education.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Key Contribution:</strong> Reduced website load time by 30%
            by implementing **lazy loading** and optimizing resources.
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />
      </CardContent>
    </Card>
  );
};

export default Experience;
