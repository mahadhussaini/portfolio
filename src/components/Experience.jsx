import { Card, CardContent, Typography, Box, Stack, useTheme } from "@mui/material";
import { Work, School, VolunteerActivism } from "@mui/icons-material";
import { motion } from "framer-motion";
import { cloneElement } from "react";

const experiences = [
  {
    title: "Full Stack Engineer - Recv",
    date: "09/2025 - Present | Remote",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Developed and maintained a financial management admin frontend using Angular 13, TypeScript, and Angular Material, supporting complex workflows for loans, deposits, accounting, and client management.",
      "Architected RESTful API integrations with Fineract backend services, designing scalable service layers and HTTP interceptors for authentication, caching, and error handling.",
      "Built responsive UI components using RxJS observables, ensuring seamless user experience for financial operations, including journal entries and transaction processing.",
      "Implemented data visualization features using Chart.js and D3.js for financial reports and real-time transaction monitoring dashboards.",
      "Optimized build processes and deployment pipelines using Docker containerization, reducing deployment time and ensuring consistent environments."
    ],
    tech: "Angular 13, TypeScript, Angular Material, RxJS, Chart.js, D3.js, Cypress, Docker, RESTful APIs, Fineract"
  },
  {
    title: "Full Stack Developer - Arc Inventador",
    date: "03/2025 - 08/2025 | Karachi, Pakistan",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Integrated Infobip communication APIs (SMS, Voice, and WebRTC) into web applications to enable multi-channel customer engagement.",
      "Developed and maintained front-end and back-end components to support seamless interaction with Infobip services.",
      "Designed and implemented server-side logic using Node.js and Express for handling high-volume API requests and responses."
    ],
    tech: "React.js, Node.js, Express, Infobip APIs, WebRTC, SMS/Voice Integration"
  },
  {
    title: "Junior Full Stack Developer - ASC First Solutions Pvt Ltd",
    date: "03/2024 - 02/2025 | Karachi, Pakistan",
    icon: <Work sx={{ color: '#2575fc' }} />,
    description: [
      "Designed and integrated a performance evaluation module, allowing HR to conduct regular appraisals, track KPIs, and maintain transparent employee feedback.",
      "Developed a recruitment pipeline feature matching candidate profiles to job postings and streamlining the interview scheduling process.",
      "Implemented a payroll management system with automated salary calculations, tax deductions, and downloadable payslips.",
      "Incorporated analytics dashboards for HR admins to visualize workforce metrics such as attendance trends and department-wise headcount."
    ],
    tech: "MongoDB, Express, React, Node.js, HR Management Systems, Analytics Dashboards"
  },
  {
    title: "Software Development Intern - Paysys Labs",
    date: "12/2023 - 02/2024 | Karachi, Pakistan",
    icon: <School sx={{ color: '#2575fc' }} />,
    description: [
      "Contributed to the development of Government of Pakistan projects (Bureau of Emigration & Overseas Employment) in collaboration with the National Bank of Pakistan.",
      "Participated in the design and implementation of secure backend services, gaining hands-on experience in enterprise-grade software development."
    ],
    tech: "Node.js, Express, Backend Services, Government Tech Solutions"
  }
];

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 6,
          letterSpacing: '-0.02em'
        }}
      >
        Professional Journey
      </Typography>

      <Stack spacing={4} position="relative" sx={{ pl: { xs: 2, sm: 4 }, borderLeft: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
        {experiences.map((exp, idx) => (
          <Box
            key={exp.title}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            sx={{ position: 'relative' }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: { xs: -26, sm: -42 },
                top: 24,
                width: 16,
                height: 16,
                borderRadius: '50%',
                bgcolor: theme.palette.primary.main,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                zIndex: 2,
              }}
            />

            <Card
              sx={{
                background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                borderRadius: 6,
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
                boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(10px)',
                  border: `1px solid ${theme.palette.primary.main}40`,
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: isDark ? '#fff' : '#0f172a', mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                      {exp.date}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: { xs: 1, sm: 0 }, opacity: 0.8 }}>
                    {cloneElement(exp.icon, { sx: { fontSize: 32, color: theme.palette.primary.main } })}
                  </Box>
                </Stack>

                <Box sx={{ mb: 3 }}>
                  {exp.description.map((desc, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        mb: 1.5,
                        lineHeight: 1.6,
                        display: 'flex',
                        gap: 1.5,
                        '&::before': {
                          content: '"•"',
                          color: theme.palette.primary.main,
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.tech.split(', ').map((t, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
