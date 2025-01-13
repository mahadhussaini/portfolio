import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

const Education = () => {
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
          Education
        </Typography>

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Bachelor in Computer Science
        </Typography>
        <Typography color="textSecondary">
          Iqra University, Karachi, Pakistan
        </Typography>
        <Typography variant="body1">2020 - 2023</Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Focused on software development, data structures, algorithms, and
          system architecture. Worked on multiple projects using JavaScript,
          React, and Node.js. Participated in hackathons and coding
          competitions, and earned the HOD's list recognition for two
          consecutive semesters.
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Key Courses and Skills
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - Data Structures & Algorithms - Object-Oriented Programming - Web
          Development (JavaScript, React, Node.js) - Database Management (SQL,
          MongoDB) - Operating Systems - Software Engineering
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Achievements & Recognition
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - HOD's List Award (2021 - 2022) - Winner of Hackathon "Code for
          Change" (2022) - Completed Full-Stack Web Development Bootcamp (2022)
          - Volunteered as a tutor for programming students.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
