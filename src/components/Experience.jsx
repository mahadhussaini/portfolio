import React from "react";
import { Card, CardContent, Typography, Box, Stack, Avatar } from "@mui/material";
import { Work, School, VolunteerActivism } from "@mui/icons-material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Arc Inventador - Full Stack Developer",
    date: "02/2025 - Present | Karachi, Pakistan",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Led the development of a multi-tenant SaaS platform, enhancing scalability and performance.",
      "Automated deployment pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%.",
      "Integrated GraphQL APIs with complex data querying capabilities, improving data fetching efficiency.",
      "Implemented microservices architecture using Docker and Kubernetes for modular and maintainable codebases.",
      "Enhanced frontend performance by optimizing React components and applying server-side rendering with Next.js."
    ],
    tech: "React.js, Node.js, Express, MongoDB, Kubernetes, Docker, GraphQL, TypeScript, AWS"
  },
  {
    title: "Ziphire HR - Full Stack Developer",
    date: "03/2024 - 02/2025 | Remote",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Designed and developed full-stack applications using the MERN stack, ensuring robust performance and security.",
      "Implemented RESTful and GraphQL APIs, enabling seamless integration with third-party services.",
      "Utilized AWS, Docker, and CI/CD pipelines to ensure smooth deployment and scalability.",
      "Collaborated with UI/UX designers to create responsive and visually appealing user interfaces.",
      "Managed databases including MongoDB and MySQL, optimizing queries and enhancing data storage strategies."
    ],
    tech: "React.js, Next.js, Node.js, Express, MongoDB, MySQL, Firebase, AWS, Docker, Redis"
  },
  {
    title: "Paysys Labs - Software Development Intern",
    date: "12/2023 - 02/2024 | Karachi, Pakistan",
    icon: <School sx={{ color: '#2575fc' }} />,
    description: [
      "Enhanced backend performance and optimized API endpoints.",
      "Implemented data validation and security measures to safeguard user information.",
      "Assisted in code reviews and refining development workflows to improve efficiency."
    ],
    tech: "Node.js, Express, MongoDB, API Security"
  },
  {
    title: "Volunteer - Tech for Good",
    date: "06/2023 - 09/2023 | Karachi, Pakistan",
    icon: <VolunteerActivism sx={{ color: '#2575fc' }} />,
    description: [
      "Developed a responsive and accessible website for a non-profit organization.",
      "Implemented features to improve accessibility and user engagement."
    ],
    tech: "React.js, Accessibility, UX/UI"
  }
];

const Experience = () => {
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
          💼 Experience
        </Typography>
        <Stack spacing={4} position="relative" sx={{ pl: 2, borderLeft: '3px solid #2575fc' }}>
          {experiences.map((exp) => (
            <Box key={exp.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #2575fc', width: 40, height: 40, zIndex: 1 }}>
                {exp.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2575fc', fontWeight: 600 }}>{exp.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>{exp.date}</Typography>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{ color: '#333', marginBottom: 4 }}>{desc}</li>
                    ))}
                  </ul>
                  <Typography variant="caption" sx={{ color: '#2575fc', fontWeight: 500 }}>
                    {exp.tech}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Experience;
