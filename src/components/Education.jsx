import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import {
  School as SchoolIcon,
  Star as StarIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Work as WorkIcon,
  EmojiEvents as EmojiEventsIcon,
  Code as CodeIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Education = () => {
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          padding: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          {/* Section Title */}
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}
          >
            🎓 Education
          </Typography>

          {/* Education Details */}
          <List>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon sx={{ color: "#f1c40f" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: "#f1c40f" }}>
                    Bachelor in Computer Science
                  </Typography>
                }
                secondary={
                  <>
                    <Typography color="textSecondary">
                      Iqra University, Karachi, Pakistan
                    </Typography>
                    <Typography variant="body1">2020 - 2023</Typography>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Course Overview */}
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Specialized in **software development, algorithms, system
            architecture, and full-stack web development**. Participated in
            **hackathons, research projects, and coding competitions**, earning
            multiple recognitions.
          </Typography>

          <Divider
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
          />

          {/* Key Courses & Skills */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            📚 Key Courses & Skills
          </Typography>
          <List dense>
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Web Development (JavaScript, React, Node.js)",
              "Database Management (SQL, MongoDB)",
              "Operating Systems",
              "Software Engineering",
              "Cloud Computing (AWS, Azure)",
              "Machine Learning (Python, TensorFlow)",
            ].map((course, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CodeIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={course} />
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
          />

          {/* Achievements & Recognition */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🏆 Achievements & Recognition
          </Typography>
          <List dense>
            {[
              "HOD's List Award (2021 - 2022)",
              'Winner of Hackathon "Code for Change" (2022)',
              "Completed Full-Stack Web Development Bootcamp (2022)",
              "Volunteered as a tutor for programming students",
              "Awarded 'Best Final Year Project' for the Mobile App",
              "Received multiple accolades for innovation in app design",
            ].map((achievement, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <EmojiEventsIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
          />

          {/* Certifications */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            📜 Certifications
          </Typography>
          <List dense>
            {[
              "Full Stack Web Development Certificate (2022) - Udemy",
              "AWS Certified Solutions Architect (2023) - Amazon Web Services",
              "Machine Learning Specialist Certificate (2023) - Coursera",
              "React Developer Certification (2023) - FreeCodeCamp",
            ].map((cert, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={cert} />
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
          />

          {/* Projects Section */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            💻 Projects
            <IconButton onClick={() => setOpenProjects(!openProjects)}>
              {openProjects ? (
                <ExpandLessIcon sx={{ color: "#ff7f50" }} />
              ) : (
                <ExpandMoreIcon sx={{ color: "#ff7f50" }} />
              )}
            </IconButton>
          </Typography>

          <Collapse in={openProjects}>
            <List dense>
              {[
                {
                  title: "E-Commerce Web App",
                  description:
                    "Built a full-fledged e-commerce platform using React, Node.js, and MongoDB. Implemented authentication, payment processing, and product search.",
                },
                {
                  title: "AI Chatbot",
                  description:
                    "Developed an AI-powered chatbot using Python and TensorFlow, integrated for real-time customer support on websites.",
                },
                {
                  title: "Task Manager App",
                  description:
                    "Created a task management application with real-time collaboration using React, Redux, and Firebase.",
                },
              ].map((project, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <WorkIcon sx={{ color: "#ff7f50" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={project.title}
                    secondary={project.description}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <Divider
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "#f1c40f" }}
          />

          {/* Additional Activities */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🌟 Additional Activities
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            - Lead Organizer for University's Annual Hackathon (2022)
            <br />
            - Member of the Computer Science Society, Iqra University
            <br />
            - Active Open Source Contributor on GitHub
            <br />- Peer Mentor for Junior CS Students
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Education;
