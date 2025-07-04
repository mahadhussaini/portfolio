import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Stack,
  Avatar,
} from "@mui/material";
import {
  School as SchoolIcon,
  Verified as VerifiedIcon,
  Science as ScienceIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Iqra University, Karachi, Pakistan",
    years: "2020 - 2023",
    icon: <SchoolIcon sx={{ color: '#2575fc' }} />,
    details: [
      "Advanced Data Structures & Algorithms",
      "Object-Oriented Programming with C++ & Java",
      "Full Stack Web Development (MERN Stack)",
      "Database Systems (SQL, MongoDB, Firebase)",
      "Machine Learning & AI (Python, TensorFlow)",
      "Cloud Computing & DevOps (AWS, Docker, CI/CD)",
      "System Design & Software Architecture",
      "Mobile Application Development (React Native)",
      "Computer Networks & Cybersecurity",
    ],
  },
];

const research = [
  {
    title: "AI-Powered Healthcare Diagnostic Tool",
    description: "Developed a machine learning model to predict early symptoms of diseases using TensorFlow and Python.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
  {
    title: "E-Learning Platform (LearnHub)",
    description: "Built a full-stack LMS with real-time chat, course management, and video streaming features.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
  {
    title: "Automated Attendance System",
    description: "Implemented a facial recognition-based attendance system using OpenCV and Flask.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
];

const activities = [
  { text: "Lead Organizer of Annual University Hackathon (2022)", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Vice President, Computer Science Society", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Peer Mentor & Tutor for Programming Students", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Active Member of 'Tech for Good' Volunteer Program", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
];

const certifications = [
  "AWS Certified Solutions Architect - Amazon Web Services",
  "Full Stack Web Development - Udemy",
  "Machine Learning Specialization - Coursera",
  "React Developer Certification - FreeCodeCamp",
  "DevOps Foundations - LinkedIn Learning",
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 6,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          maxWidth: 900,
          margin: '0 auto',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#2575fc', mb: 3 }}>
          🎓 Education
        </Typography>
        <Stack spacing={4} position="relative" sx={{ pl: 2, borderLeft: '3px solid #2575fc' }}>
          {education.map((edu) => (
            <Box key={edu.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #2575fc', width: 40, height: 40, zIndex: 1 }}>
                {edu.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2575fc', fontWeight: 600 }}>{edu.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>{edu.institution} | {edu.years}</Typography>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {edu.details.map((detail, i) => (
                      <li key={i} style={{ color: '#333', marginBottom: 4 }}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#2575fc', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#2575fc', fontWeight: 600, mb: 2 }}>🔬 Research & Projects</Typography>
        <Stack spacing={3} position="relative" sx={{ pl: 2, borderLeft: '3px solid #ff7f50' }}>
          {research.map((res) => (
            <Box key={res.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #ff7f50', width: 40, height: 40, zIndex: 1 }}>
                {res.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#ff7f50', fontWeight: 600 }}>{res.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>{res.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#2575fc', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#2575fc', fontWeight: 600, mb: 2 }}>🌟 Extracurricular Activities</Typography>
        <Stack spacing={2} position="relative" sx={{ pl: 2, borderLeft: '3px solid #2575fc' }}>
          {activities.map((act) => (
            <Box key={act.text} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #2575fc', width: 40, height: 40, zIndex: 1 }}>
                {act.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#2575fc', fontWeight: 500 }}>{act.text}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#2575fc', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#2575fc', fontWeight: 600, mb: 2 }}>📜 Certifications</Typography>
        <Stack spacing={1} sx={{ pl: 2 }}>
          {certifications.map((cert) => (
            <Card key={cert} sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 1, pl: 3 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <VerifiedIcon sx={{ color: '#ff7f50', mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>{cert}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Education;
