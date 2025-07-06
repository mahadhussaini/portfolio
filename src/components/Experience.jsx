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
      "Led development of enterprise SaaS platform serving 10K+ users with microservices architecture and Kubernetes orchestration",
      "Implemented CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time by 60% and improving release frequency",
      "Designed and developed GraphQL APIs with complex data querying, reducing API response time by 40%",
      "Architected real-time collaboration features using WebSocket and Socket.io, enabling concurrent editing for 500+ users",
      "Optimized frontend performance by implementing React Query, code splitting, and server-side rendering, achieving 90+ Lighthouse scores",
      "Mentored 3 junior developers and conducted code reviews, improving team code quality and knowledge sharing"
    ],
    tech: "React.js, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, GraphQL, Docker, Kubernetes, AWS, Redis"
  },
  {
    title: "Full Stack Developer - Ziphire HR",
    date: "03/2023 - 02/2024 | Remote",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Built comprehensive HR management platform with employee onboarding, performance tracking, and payroll integration",
      "Developed RESTful and GraphQL APIs handling 1M+ requests monthly with 99.9% uptime and comprehensive error handling",
      "Implemented real-time notifications and dashboard analytics using WebSocket and Chart.js for data visualization",
      "Integrated third-party services (Stripe, SendGrid, AWS S3) for payment processing, email automation, and file storage",
      "Led database optimization initiatives, reducing query execution time by 50% and implementing Redis caching",
      "Collaborated with UI/UX team to create responsive, accessible interfaces using Material UI and custom components"
    ],
    tech: "React.js, Next.js, Node.js, Express, MongoDB, MySQL, Firebase, AWS, Docker, Redis, GraphQL, Material UI"
  },
  {
    title: "Software Development Intern - Paysys Labs",
    date: "12/2022 - 02/2023 | Karachi, Pakistan",
    icon: <School sx={{ color: '#2575fc' }} />,
    description: [
      "Enhanced backend API performance by implementing caching strategies and database query optimization",
      "Developed automated testing suite using Jest and Supertest, achieving 85% code coverage",
      "Implemented security measures including JWT authentication, input validation, and SQL injection prevention",
      "Created comprehensive API documentation using Swagger/OpenAPI for better developer experience",
      "Participated in agile development processes including sprint planning, daily standups, and retrospectives"
    ],
    tech: "Node.js, Express, MongoDB, Jest, JWT, API Security, Swagger, Git, Agile"
  },
  {
    title: "Freelance Developer - Tech Solutions",
    date: "06/2022 - 11/2022 | Remote",
    icon: <VolunteerActivism sx={{ color: '#2575fc' }} />,
    description: [
      "Developed 15+ client projects including e-commerce platforms, portfolio websites, and business applications",
      "Built responsive web applications using React, Next.js, and modern CSS frameworks",
      "Implemented payment gateways (Stripe, PayPal) and third-party integrations (Google Maps, social media APIs)",
      "Optimized website performance and SEO, achieving 95+ Lighthouse scores for all projects",
      "Provided ongoing maintenance and support, ensuring client satisfaction and long-term relationships"
    ],
    tech: "React.js, Next.js, Node.js, MongoDB, Stripe, AWS, SEO, Performance Optimization"
  },
  {
    title: "Open Source Contributor",
    date: "01/2022 - Present | GitHub",
    icon: <VolunteerActivism sx={{ color: '#2575fc' }} />,
    description: [
      "Contributed to 20+ open source projects including React libraries, developer tools, and documentation",
      "Maintained popular React component library with 1K+ stars and 500+ downloads weekly",
      "Participated in hackathons and coding competitions, winning 3 awards for innovative solutions",
      "Created educational content and tutorials for the developer community",
      "Mentored junior developers through code reviews and technical discussions"
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
