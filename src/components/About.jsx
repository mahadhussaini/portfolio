import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  Divider,
} from "@mui/material";
import {
  Code as CodeIcon,
  Timeline as TimelineIcon,
  Psychology as PsychologyIcon,
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Favorite as FavoriteIcon,
  Coffee as CoffeeIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const stats = [
    { label: "Years of Experience", value: "3+", icon: <TimelineIcon /> },
    { label: "Projects Completed", value: "50+", icon: <CodeIcon /> },
    { label: "Technologies Mastered", value: "30+", icon: <PsychologyIcon /> },
    { label: "Satisfied Clients", value: "25+", icon: <EmojiEventsIcon /> },
  ];

  const interests = [
    "Full Stack Development",
    "AI & Machine Learning",
    "Cloud Architecture",
    "Mobile Development",
    "Open Source",
    "Tech Mentoring",
    "Tea Brewing",
    "Travel & Photography",
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries",
      icon: <PsychologyIcon />,
    },
    {
      title: "Quality",
      description: "Delivering clean, maintainable, and scalable code",
      icon: <EmojiEventsIcon />,
    },
    {
      title: "Collaboration",
      description: "Working effectively with diverse teams and stakeholders",
      icon: <FavoriteIcon />,
    },
    {
      title: "Learning",
      description: "Continuous growth and knowledge sharing",
      icon: <SchoolIcon />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: isDark
            ? 'linear-gradient(165deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)'
            : 'linear-gradient(165deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 250, 252, 0.4) 100%)',
          borderRadius: 10,
          p: { xs: 4, sm: 10 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
            : '0 25px 50px -12px rgba(99, 102, 241, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.3)'}`,
          backdropFilter: 'blur(32px) saturate(200%)',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.025em',
          }}
        >
          Engineering the Future
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 600,
            mb: 6,
            color: theme.palette.text.secondary,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '1rem'
          }}
        >
          High-Impact Digital Experiences & AI-Infused Architectures
        </Typography>

        <Grid container spacing={4}>
          {/* Personal Story */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: isDark
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                borderRadius: 4,
                p: 3,
                height: '100%',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, color: theme.palette.primary.main }}
                >
                  My Journey
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.7, mb: 3, color: theme.palette.text.primary }}
                >
                  Hi! I&apos;m Mahad, a <strong>Full Stack Engineer & MERN Stack Specialist</strong> dedicated to building high-performance, enterprise-grade applications.
                  My expertise spans across <strong>Angular</strong>, the <strong>MERN Stack</strong>, and <strong>Real-time Communication (WebRTC)</strong>.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.7, mb: 3, color: theme.palette.text.primary }}
                >
                  With a track record of delivering scalable financial management systems, interactive communication tools, and robust HR modules,
                  I focus on creating <strong>future-proof architectures</strong>. From architecting RESTful services to designing intuitive human-centric interfaces,
                  I bridge the gap between complex engineering and seamless user experience.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.7, color: theme.palette.text.primary }}
                >
                  I believe that modern software should be <strong>agentic</strong>, <strong>data-driven</strong>, and <strong>performant</strong>.
                  Whether it's integrating global communication APIs or optimizing multi-tenant cloud environments, I strive for engineering excellence in every line of code.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      color: 'white',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                      <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Core Values */}
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: theme.palette.text.primary }}
            >
              Core Values & Principles
            </Typography>
            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={value.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        background: isDark
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                        borderRadius: 3,
                        p: 3,
                        textAlign: 'center',
                        height: '100%',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                      >
                        {value.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Interests & Hobbies */}
          <Grid item xs={12}>
            <Divider sx={{ my: 4 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: theme.palette.text.primary }}
            >
              Interests & Passions
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={interest}
                    sx={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Fun Fact */}
          <Grid item xs={12}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                color: 'white',
                borderRadius: 4,
                p: 3,
                textAlign: 'center',
                mt: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <CoffeeIcon /> Fun Fact
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                I&apos;ve consumed over 1,000 cups of tea while coding and it&apos;s directly proportional
                to the quality of my code! ☕️ Each cup represents a problem solved, a feature built,
                or a bug squashed.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
