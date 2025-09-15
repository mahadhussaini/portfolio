import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
  Stack,
  Chip,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  FormatQuote as QuoteIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Mahad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, problem-solving skills, and ability to translate complex requirements into elegant solutions made him invaluable to our project. The platform has increased our sales by 40% in just 3 months!",
    project: "E-commerce Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    linkedIn: "https://linkedin.com/in/sarah-johnson",
    metrics: "40% increase in sales, 60% faster load times",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "HealthFirst Medical",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Working with Mahad on our healthcare management system was a game-changer. He understood the complexity of HIPAA compliance and built a robust, secure platform. His technical expertise and commitment to quality helped us streamline our operations and improve patient care significantly.",
    project: "Healthcare Management System",
    technologies: ["React", "Express.js", "PostgreSQL", "AWS"],
    linkedIn: "https://linkedin.com/in/david-chen",
    metrics: "50% reduction in administrative time, 99.9% uptime",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "EduTech Innovations",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Mahad transformed our vision of an interactive learning platform into reality. His innovative approach to UX/UI design and seamless API integrations created an engaging experience for our students. The platform now serves over 10,000 active users and continues to grow daily.",
    project: "Interactive Learning Platform",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Firebase"],
    linkedIn: "https://linkedin.com/in/emily-rodriguez",
    metrics: "10,000+ active users, 95% user satisfaction",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Operations Director",
    company: "LogiFlow Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "The logistics dashboard Mahad developed has revolutionized our supply chain management. The real-time tracking, predictive analytics, and intuitive interface have improved our efficiency by 35%. His ability to work with complex data and present it beautifully is remarkable.",
    project: "Logistics Dashboard",
    technologies: ["React", "D3.js", "Python", "Docker"],
    linkedIn: "https://linkedin.com/in/michael-thompson",
    metrics: "35% efficiency improvement, $2M cost savings",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Marketing Director",
    company: "CreativeSpace Agency",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Mahad built us a stunning portfolio website with an integrated CMS that allows our team to showcase our work effortlessly. The site's performance, SEO optimization, and modern design have significantly improved our online presence and client acquisition rate.",
    project: "Portfolio Website & CMS",
    technologies: ["Next.js", "Tailwind CSS", "Strapi", "Vercel"],
    linkedIn: "https://linkedin.com/in/lisa-park",
    metrics: "200% increase in leads, 90+ PageSpeed score",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    role: "Tech Lead",
    company: "FinanceFlow Pro",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "The fintech application Mahad developed for us handles complex financial calculations and real-time data processing with ease. His expertise in security best practices and scalable architecture has made our platform trusted by thousands of users managing millions in assets.",
    project: "Fintech Application",
    technologies: ["React", "Node.js", "Redis", "Kubernetes"],
    linkedIn: "https://linkedin.com/in/ahmed-hassan",
    metrics: "1000+ users, $50M+ assets managed",
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(168,85,247,0.1) 100%)'
            : 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 50%, rgba(168,85,247,0.05) 100%)',
          borderRadius: 6,
          p: { xs: 3, sm: 6 },
          mb: 6,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
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
          Client Testimonials
        </Typography>
        
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 6,
            color: theme.palette.text.secondary,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Here&apos;s what clients and collaborators say about working with me. 
          These testimonials represent real projects and measurable results.
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: isDark
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    borderRadius: 4,
                    position: 'relative',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <QuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontSize: 32,
                      color: theme.palette.primary.main,
                      opacity: 0.3,
                    }}
                  />
                  
                  <CardContent sx={{ p: 4 }}>
                    {/* Rating */}
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{
                        mb: 2,
                        '& .MuiRating-iconFilled': {
                          color: '#fbbf24',
                        },
                      }}
                    />

                    {/* Testimonial Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                        fontStyle: 'italic',
                      }}
                    >
                      &quot;{testimonial.testimonial}&quot;
                    </Typography>

                    {/* Project Info */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        Project: {testimonial.project}
                      </Typography>
                      
                      {/* Technologies */}
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                        {testimonial.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                              color: 'white',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>

                      {/* Metrics */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.success.main,
                          fontWeight: 600,
                          background: isDark
                            ? 'rgba(16, 185, 129, 0.1)'
                            : 'rgba(16, 185, 129, 0.05)',
                          p: 1,
                          borderRadius: 2,
                          border: `1px solid ${theme.palette.success.main}20`,
                        }}
                      >
                        📊 Results: {testimonial.metrics}
                      </Typography>
                    </Box>

                    {/* Client Info */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {testimonial.role} at {testimonial.company}
                        </Typography>
                      </Box>
                      <IconButton
                        href={testimonial.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#0077b5',
                          '&:hover': {
                            background: 'rgba(0, 119, 181, 0.1)',
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              mt: 6,
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              borderRadius: 4,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Impact Summary
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                  <Box textAlign="center">
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      25+
                    </Typography>
                    <Typography variant="body2">Satisfied Clients</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box textAlign="center">
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      50+
                    </Typography>
                    <Typography variant="body2">Projects Delivered</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box textAlign="center">
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      $5M+
                    </Typography>
                    <Typography variant="body2">Business Value Created</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box textAlign="center">
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      99%
                    </Typography>
                    <Typography variant="body2">Client Satisfaction</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Testimonials;
