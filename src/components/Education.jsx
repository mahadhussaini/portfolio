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
          consecutive semesters. Additionally, developed skills in
          problem-solving, critical thinking, and teamwork through group-based
          academic projects.
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Key Courses and Skills
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - Data Structures & Algorithms
          <br />
          - Object-Oriented Programming
          <br />
          - Web Development (JavaScript, React, Node.js)
          <br />
          - Database Management (SQL, MongoDB)
          <br />
          - Operating Systems
          <br />
          - Software Engineering
          <br />
          - Cloud Computing (AWS, Azure)
          <br />- Machine Learning (Python, TensorFlow)
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Achievements & Recognition
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - HOD's List Award (2021 - 2022)
          <br />
          - Winner of Hackathon "Code for Change" (2022)
          <br />
          - Completed Full-Stack Web Development Bootcamp (2022)
          <br />
          - Volunteered as a tutor for programming students
          <br />
          - Awarded "Best Final Year Project" for the Mobile App
          <br />- Received multiple accolades for innovation in app design
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Certifications
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - Full Stack Web Development Certificate (2022) - Udemy
          <br />
          - AWS Certified Solutions Architect (2023) - Amazon Web Services
          <br />
          - Machine Learning Specialist Certificate (2023) - Coursera
          <br />- React Developer Certification (2023) - FreeCodeCamp
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Projects
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          <strong>Project 1: E-Commerce Web App</strong>
          <br />
          Built a fully functional e-commerce platform using React, Node.js, and
          MongoDB. Integrated payment gateway (Stripe), user authentication
          (JWT), and implemented product search and filter functionality.
          <br />
          <strong>Project 2: AI Chatbot</strong>
          <br />
          Developed an AI-driven chatbot using Python and TensorFlow, which
          integrates with websites to provide real-time customer support.
          <br />
          <strong>Project 3: Task Manager App</strong>
          <br />A task management application built with React, Redux, and
          Firebase for real-time collaboration.
        </Typography>

        <Divider
          sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
        />

        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Additional Activities
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          - Lead Organizer for the University's Annual Hackathon (2022)
          <br />
          - Member of the Computer Science Society, Iqra University
          <br />
          - Active Contributor to Open Source Projects on GitHub
          <br />
          - Regular Participant in Coding Competitions on HackerRank and
          LeetCode
          <br />- Peer Mentor for Junior Students in the Computer Science
          Department
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
