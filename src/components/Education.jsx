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
      "Advanced Data Structures & Algorithms with competitive programming focus",
      "Full Stack Web Development (MERN Stack, Next.js, TypeScript)",
      "Database Systems (SQL, MongoDB, Redis, PostgreSQL)",
      "Machine Learning & AI (Python, TensorFlow, Scikit-learn)",
      "Cloud Computing & DevOps (AWS, Docker, Kubernetes, CI/CD)",
      "System Design & Software Architecture (Microservices, Scalability)",
      "Mobile Application Development (React Native, Flutter)",
      "Computer Networks & Cybersecurity (Network Security, Penetration Testing)",
      "Software Engineering (Agile, Scrum, Project Management)",
      "Data Science & Analytics (Big Data, Data Visualization)"
    ],
  },
];

const research = [
  {
    title: "AI-Powered Healthcare Diagnostic System",
    description: "Developed machine learning models for early disease detection using TensorFlow and Python. Achieved 95% accuracy in skin disease classification and 90% in respiratory condition prediction.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
  {
    title: "Smart City IoT Management Platform",
    description: "Built comprehensive IoT platform for smart city management with real-time sensor data collection, predictive analytics, and automated alert systems. Monitored 1000+ devices across multiple city sectors.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
  {
    title: "Blockchain-Based Supply Chain Tracking",
    description: "Implemented blockchain solution for transparent supply chain management with smart contracts, real-time tracking, and immutable audit trails. Reduced fraud by 80% and improved traceability.",
    icon: <ScienceIcon sx={{ color: '#ff7f50' }} />,
  },
];

const activities = [
  { text: "Lead Organizer - Annual University Hackathon (2022-2023)", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Vice President - Computer Science Society (2022-2023)", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Technical Mentor - Programming Bootcamp for Beginners", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Open Source Contributor - React Ecosystem Projects", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Speaker - University Tech Talks on Modern Web Development", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
  { text: "Competitive Programming - Solved 500+ problems on LeetCode/HackerRank", icon: <GroupIcon sx={{ color: '#2575fc' }} /> },
];

const certifications = [
  "AWS Certified Solutions Architect Associate - Amazon Web Services",
  "Google Cloud Professional Developer - Google Cloud Platform",
  "Microsoft Certified: Azure Developer Associate - Microsoft",
  "Full Stack Web Development Bootcamp - Udemy (2023)",
  "Machine Learning Specialization - Coursera (2023)",
  "React Developer Certification - Meta (2023)",
  "DevOps Engineering - LinkedIn Learning (2023)",
  "TypeScript Fundamentals - Microsoft Learn (2023)",
  "GraphQL API Development - Apollo GraphQL (2023)",
  "Docker Certified Associate - Docker Inc. (2023)"
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
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#6366f1', mb: 3, letterSpacing: '-0.025em' }}>
          🎓 Education
        </Typography>
        <Stack spacing={4} position="relative" sx={{ pl: 2, borderLeft: '3px solid #6366f1' }}>
          {education.map((edu) => (
            <Box key={edu.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #6366f1', width: 40, height: 40, zIndex: 1 }}>
                {edu.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 600, letterSpacing: '-0.025em' }}>{edu.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>{edu.institution} | {edu.years}</Typography>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {edu.details.map((detail, i) => (
                      <li key={i} style={{ color: '#333', marginBottom: 4, lineHeight: 1.6 }}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#6366f1', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#6366f1', fontWeight: 600, mb: 2, letterSpacing: '-0.025em' }}>🔬 Research & Projects</Typography>
        <Stack spacing={3} position="relative" sx={{ pl: 2, borderLeft: '3px solid #f59e0b' }}>
          {research.map((res) => (
            <Box key={res.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #f59e0b', width: 40, height: 40, zIndex: 1 }}>
                {res.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 600, letterSpacing: '-0.025em' }}>{res.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1, lineHeight: 1.6 }}>{res.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#6366f1', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#6366f1', fontWeight: 600, mb: 2, letterSpacing: '-0.025em' }}>🌟 Extracurricular Activities</Typography>
        <Stack spacing={2} position="relative" sx={{ pl: 2, borderLeft: '3px solid #6366f1' }}>
          {activities.map((act) => (
            <Box key={act.text} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #6366f1', width: 40, height: 40, zIndex: 1 }}>
                {act.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#6366f1', fontWeight: 500, lineHeight: 1.6 }}>{act.text}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 4, bgcolor: '#6366f1', opacity: 0.2 }} />
        <Typography variant="h5" sx={{ color: '#6366f1', fontWeight: 600, mb: 2, letterSpacing: '-0.025em' }}>📜 Certifications</Typography>
        <Stack spacing={1} sx={{ pl: 2 }}>
          {certifications.map((cert) => (
            <Card key={cert} sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 1, pl: 3 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <VerifiedIcon sx={{ color: '#f59e0b', mr: 2 }} />
                <Typography variant="body2" sx={{ color: '#333', fontWeight: 500, lineHeight: 1.6 }}>{cert}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Education;
