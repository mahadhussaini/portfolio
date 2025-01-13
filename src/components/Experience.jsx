import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const Experience = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "15px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Experience
        </Typography>

        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Freelancer.com - Full Stack Developer
          </Typography>
          <Typography color="textSecondary">
            03/2024 - Present, Remote
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Developed several full-stack web applications using the MERN stack.
            Worked extensively on both front-end and back-end to build scalable
            and efficient solutions.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>Project Duration: August 2024 - December 2024</em>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            - Developed a full-stack Learning Management System (LMS) using
            MongoDB, Express, React, and Node.js (MERN). - Implemented user
            authentication, course management, and real-time chat features.
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/learnhub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "underline" }}
            >
              View LearnHub on GitHub
            </a>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Developed a full-stack Event Management Portal. Integrated
            features such as event creation, registration, and user feedback.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <em>Project Duration: March 2024 - July 2024</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/eventwave"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "underline" }}
            >
              View EventWave on GitHub
            </a>
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 3, backgroundColor: "#f1c40f" }} />

        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Paysys Labs - Software Development Intern
          </Typography>
          <Typography color="textSecondary">
            12/2023 - 02/2024, Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Worked on the Bureau of Emigration & Overseas Employment Project.
            - Assisted in developing features for emigration applications,
            managing user profiles, and improving the backend API.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>
              Key Achievements: Improved application performance by optimizing
              database queries and implementing caching mechanisms.
            </em>
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 3, backgroundColor: "#f1c40f" }} />

        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Personal Side Projects
          </Typography>
          <Typography color="textSecondary">Ongoing, Remote</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Created a Portfolio Website to showcase personal projects,
            including a blog section and contact form built with React and
            Firebase. - Developed a mobile weather app using React Native that
            fetches live weather data from the OpenWeather API.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>Project Duration: Ongoing</em>
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 3, backgroundColor: "#f1c40f" }} />

        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Volunteer - Tech for Good
          </Typography>
          <Typography color="textSecondary">
            06/2023 - 09/2023, Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Volunteered as a Front-End Developer for a non-profit organization
            focused on providing tech education to underprivileged communities.
            - Built and maintained the organization's website, helping to
            improve their outreach and volunteer engagement.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>
              Key Contribution: Reduced the website load time by 30% by
              optimizing images and implementing lazy loading.
            </em>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Experience;
