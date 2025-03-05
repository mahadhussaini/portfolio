import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  School as SchoolIcon,
  Code as CodeIcon,
  EmojiEvents as EmojiEventsIcon,
  Verified as VerifiedIcon,
  Event as EventIcon,
  Science as ScienceIcon,
  Group as GroupIcon,
  Lightbulb as LightbulbIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "15px",
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
                    Bachelor of Science in Computer Science
                  </Typography>
                }
                secondary={
                  <>
                    <Typography sx={{ color: "white" }}>
                      Iqra University, Karachi, Pakistan
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      2020 - 2023
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Coursework & Practical Experience */}
          <Typography variant="h6" sx={{ color: "#f1c40f", marginTop: 2 }}>
            📚 Key Courses & Practical Skills
          </Typography>
          <List dense>
            {[
              "Advanced Data Structures & Algorithms",
              "Object-Oriented Programming with C++ & Java",
              "Full Stack Web Development (MERN Stack)",
              "Database Systems (SQL, MongoDB, Firebase)",
              "Machine Learning & AI (Python, TensorFlow)",
              "Cloud Computing & DevOps (AWS, Docker, CI/CD)",
              "System Design & Software Architecture",
              "Mobile Application Development (React Native)",
              "Computer Networks & Cybersecurity",
            ].map((course, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CodeIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={course} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

          {/* Research Projects & Academic Contributions */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🔬 Research & Projects
          </Typography>
          <List dense>
            {[
              {
                title: "AI-Powered Healthcare Diagnostic Tool",
                description:
                  "Developed a machine learning model to predict early symptoms of diseases using TensorFlow and Python.",
              },
              {
                title: "E-Learning Platform (LearnHub)",
                description:
                  "Built a full-stack LMS with real-time chat, course management, and video streaming features.",
              },
              {
                title: "Automated Attendance System",
                description:
                  "Implemented a facial recognition-based attendance system using OpenCV and Flask.",
              },
            ].map((project, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ScienceIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText
                  primary={project.title}
                  secondary={project.description}
                  sx={{
                    color: "#fff",
                    "& .MuiListItemText-primary": {
                      fontWeight: "bold",
                    },
                    "& .MuiListItemText-secondary": {
                      color: "#fff",
                      opacity: 0.8,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

          {/* Extracurricular Activities & Leadership */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🌟 Extracurricular Activities
          </Typography>
          <List dense>
            {[
              "Lead Organizer of Annual University Hackathon (2022)",
              "Vice President, Computer Science Society",
              "Peer Mentor & Tutor for Programming Students",
              "Active Member of 'Tech for Good' Volunteer Program",
            ].map((activity, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <GroupIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={activity} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

          {/* Certifications */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            📜 Certifications
          </Typography>
          <List dense>
            {[
              "AWS Certified Solutions Architect - Amazon Web Services",
              "Full Stack Web Development - Udemy",
              "Machine Learning Specialization - Coursera",
              "React Developer Certification - FreeCodeCamp",
              "DevOps Foundations - LinkedIn Learning",
            ].map((cert, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={cert} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

          {/* Conferences & Workshops */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🎤 Conferences & Workshops Attended
          </Typography>
          <List dense>
            {[
              "Google DevFest Karachi 2022 - Speaker on React Development",
              "Microsoft Azure Bootcamp 2023",
              "Web3 & Blockchain Workshop - NUST",
              "DevOps & Cloud Computing Seminar - P@SHA",
            ].map((event, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <EventIcon sx={{ color: "#ff7f50" }} />
                </ListItemIcon>
                <ListItemText primary={event} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

          {/* Future Learning Goals */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            🚀 Future Learning Goals
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            🔍 Expanding expertise in **AI & Machine Learning**, with a focus on
            deep learning and computer vision.
            <br />
            🌐 Diving into **Blockchain Development** and exploring **Web3
            technologies**.
            <br />
            📈 Enhancing skills in **Data Engineering** and **Big Data
            Analytics**.
            <br />
            🤖 Developing proficiency in **Robotics and IoT** systems.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Education;
