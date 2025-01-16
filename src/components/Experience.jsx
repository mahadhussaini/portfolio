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
            As a Full Stack Developer on Freelancer, I developed several web
            applications from scratch, focusing on both the front-end and
            back-end to provide full-fledged solutions for clients. My work
            included creating and deploying both simple and complex systems
            using modern technologies.
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
            MongoDB, Express, React, and Node.js (MERN). Implemented user
            authentication, course management, real-time chat features, and
            integrated video streaming for course content.
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
            - Developed a full-stack Event Management Portal with features such
            as event creation, registration, user feedback, and notifications.
            Integrated Google Calendar API to synchronize events.
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
            Assisted in developing features for emigration applications,
            managing user profiles, improving the backend API, and streamlining
            the data flow to enhance user experience.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>
              Key Achievements: Improved application performance by optimizing
              database queries and implementing caching mechanisms, reducing
              page load time by 40%.
            </em>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Technologies Used: Node.js, Express, MongoDB, MySQL, Redis,
            JavaScript.
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
            Firebase. Focused on building a sleek and interactive user
            experience.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            - Developed a mobile weather app using React Native that fetches
            live weather data from the OpenWeather API, allowing users to search
            for weather information by city.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>Project Duration: Ongoing</em>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Developed a Blog Platform using Node.js and MongoDB where users
            can register, log in, create posts, and interact through comments.
            Focused on implementing a clean RESTful API.
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
            Assisted in developing a user-friendly website for the organization,
            enabling better communication with volunteers and donors.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            <em>
              Key Contribution: Reduced the website load time by 30% by
              optimizing images, implementing lazy loading, and refactoring the
              code for better efficiency.
            </em>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Technologies Used: HTML, CSS, JavaScript, React, Firebase, Google
            Analytics.
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 3, backgroundColor: "#f1c40f" }} />

        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Additional Achievements & Recognition
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            - Recognized as "Best Developer of the Month" for three consecutive
            months at Freelancer.com based on client reviews and project
            quality.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            - Awarded "Outstanding Intern" at Paysys Labs for exceptional
            performance and contributions to project optimization and feature
            development.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Experience;
