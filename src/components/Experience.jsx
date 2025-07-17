import React from "react";
import { Card, CardContent, Typography, Box, Stack, Avatar } from "@mui/material";
import { Work, School, VolunteerActivism } from "@mui/icons-material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer - Arc Inventador",
    date: "02/2024 - Present | Karachi, Pakistan",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Led a talented team to build an enterprise SaaS platform serving 10K+ users, focusing on collaboration and user experience.",
      "Worked closely with colleagues to design and develop GraphQL APIs, making data accessible and useful for everyone involved.",
      "Mentored junior developers, sharing knowledge and fostering a supportive, growth-oriented environment.",
      "Implemented CI/CD pipelines and real-time features, always striving to make our work smoother and more impactful.",
      "Celebrated team wins and learned from challenges, believing that great products come from great teamwork."
    ],
    tech: "React.js, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, GraphQL, Docker, Kubernetes, AWS, Redis"
  },
  {
    title: "Full Stack Developer - Ziphire HR",
    date: "03/2023 - 02/2024 | Remote",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Collaborated with a diverse team to build an HR management platform that made work life easier for thousands of users.",
      "Listened to user feedback and worked with designers to create accessible, intuitive interfaces.",
      "Integrated third-party services and optimized databases, always with an eye on making things better for people.",
      "Enjoyed the process of learning together, solving problems, and celebrating our progress as a team."
    ],
    tech: "React.js, Next.js, Node.js, Express, MongoDB, MySQL, Firebase, AWS, Docker, Redis, GraphQL, Material UI"
  },
  {
    title: "Software Development Intern - Paysys Labs",
    date: "12/2022 - 02/2023 | Karachi, Pakistan",
    icon: <School sx={{ color: '#2575fc' }} />,
    description: [
      "Worked alongside experienced engineers to improve backend APIs and implement security measures, learning the value of teamwork and mentorship.",
      "Participated in agile development, daily standups, and retrospectives, growing both technically and personally.",
      "Contributed to automated testing and documentation, always eager to help the team succeed."
    ],
    tech: "Node.js, Express, MongoDB, Jest, JWT, API Security, Swagger, Git, Agile"
  },
  {
    title: "Freelance Developer - Tech Solutions",
    date: "06/2022 - 11/2022 | Remote",
    icon: <VolunteerActivism sx={{ color: '#2575fc' }} />,
    description: [
      "Partnered with clients to bring their ideas to life, building e-commerce platforms and business applications that made a difference.",
      "Focused on clear communication, reliability, and building lasting relationships with clients and collaborators.",
      "Took pride in delivering high-quality work and supporting clients beyond project delivery."
    ],
    tech: "React.js, Next.js, Node.js, MongoDB, Stripe, AWS, SEO, Performance Optimization"
  },
  {
    title: "Open Source Contributor",
    date: "01/2022 - Present | GitHub",
    icon: <VolunteerActivism sx={{ color: '#2575fc' }} />,
    description: [
      "Contributed to open source projects, sharing knowledge and learning from a vibrant developer community.",
      "Created educational content and mentored newcomers, believing in the power of giving back and growing together."
    ],
    tech: "React.js, TypeScript, Open Source, Technical Writing, Community Building"
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
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#6366f1', mb: 3, letterSpacing: '-0.025em' }}>
          💼 Experience
        </Typography>
        <Stack spacing={4} position="relative" sx={{ pl: 2, borderLeft: '3px solid #6366f1' }}>
          {experiences.map((exp) => (
            <Box key={exp.title} sx={{ position: 'relative' }}>
              <Avatar sx={{ position: 'absolute', left: -38, top: 8, bgcolor: '#fff', border: '2px solid #6366f1', width: 40, height: 40, zIndex: 1 }}>
                {exp.icon}
              </Avatar>
              <Card sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 2, pl: 6 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 600, letterSpacing: '-0.025em' }}>{exp.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>{exp.date}</Typography>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{ color: '#333', marginBottom: 4, lineHeight: 1.6 }}>{desc}</li>
                    ))}
                  </ul>
                  <Typography variant="caption" sx={{ color: '#6366f1', fontWeight: 500 }}>
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
