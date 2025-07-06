import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Avatar,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import {
  Star as StarIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    position: "CTO",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Mahad delivered our enterprise SaaS platform ahead of schedule with exceptional quality. His technical expertise in microservices architecture and cloud deployment was invaluable. The platform now serves 10K+ users with 99.9% uptime.",
    project: "Enterprise SaaS Platform",
    impact: ["40% faster deployment", "99.9% uptime", "10K+ users"],
    technologies: ["React", "Node.js", "Kubernetes", "AWS"]
  },
  {
    name: "Alex Rodriguez",
    position: "Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Mahad was a game-changer for our startup. He not only built a great product but also mentored our team on best practices. His attention to detail and problem-solving skills are outstanding.",
    project: "Startup MVP Platform",
    impact: ["50% faster development", "Team mentoring", "Best practices"],
    technologies: ["React", "Node.js", "MongoDB", "Firebase"]
  },
  {
    name: "Dr. Emily Watson",
    position: "Lead Researcher",
    company: "HealthTech Innovations",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Mahad's work on our AI-powered healthcare platform exceeded expectations. His understanding of both technical implementation and healthcare requirements was crucial for our success.",
    project: "AI Healthcare Platform",
    impact: ["95% accuracy", "Real-time processing", "HIPAA compliant"],
    technologies: ["Python", "TensorFlow", "React Native", "AWS"]
  },
  {
    name: "Michael Thompson",
    position: "Product Manager",
    company: "E-Commerce Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The e-commerce platform Mahad built for us handles 10K+ concurrent users seamlessly. His expertise in performance optimization and scalable architecture is remarkable.",
    project: "E-commerce Platform",
    impact: ["10K+ concurrent users", "60% performance improvement", "99.9% uptime"],
    technologies: ["React", "Node.js", "Redis", "Docker"]
  }
];

const caseStudies = [
  {
    title: "Enterprise SaaS Transformation",
    company: "TechFlow Solutions",
    duration: "6 months",
    challenge: "Legacy system with poor performance and limited scalability",
    solution: "Built microservices architecture with Kubernetes orchestration and CI/CD pipelines",
    results: [
      "40% reduction in deployment time",
      "99.9% system uptime",
      "10K+ active users",
      "60% improvement in API response time"
    ],
    technologies: ["React", "Node.js", "Kubernetes", "GraphQL", "AWS"]
  },
  {
    title: "AI-Powered Healthcare Platform",
    company: "HealthTech Innovations",
    duration: "8 months",
    challenge: "Manual diagnostic processes with low accuracy and slow turnaround",
    solution: "Developed ML models for disease detection with real-time patient monitoring",
    results: [
      "95% accuracy in disease detection",
      "90% reduction in diagnosis time",
      "Real-time patient monitoring",
      "HIPAA compliant architecture"
    ],
    technologies: ["Python", "TensorFlow", "React Native", "AWS", "Docker"]
  },
  {
    title: "E-commerce Microservices Platform",
    company: "E-Commerce Solutions",
    duration: "4 months",
    challenge: "Monolithic architecture unable to handle high traffic and complex features",
    solution: "Implemented microservices with Redis caching and load balancing",
    results: [
      "10K+ concurrent users supported",
      "60% improvement in page load time",
      "99.9% uptime achieved",
      "Real-time inventory management"
    ],
    technologies: ["React", "Node.js", "Redis", "Docker", "PostgreSQL"]
  }
];

const Testimonials = () => {
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
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#6366f1', mb: 4, letterSpacing: '-0.025em' }}>
          💬 Client Testimonials & Case Studies
        </Typography>

        {/* Testimonials Section */}
        <Typography variant="h5" sx={{ color: '#6366f1', fontWeight: 600, mb: 3, letterSpacing: '-0.025em' }}>
          What Clients Say
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 3, 
                  boxShadow: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 600, letterSpacing: '-0.025em' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {testimonial.position} at {testimonial.company}
                        </Typography>
                        <Box sx={{ display: 'flex', mt: 1 }}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} sx={{ color: '#f59e0b', fontSize: 16 }} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" sx={{ color: '#333', mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                      &quot;{testimonial.text}&quot;
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="caption" sx={{ color: '#6366f1', fontWeight: 600, display: 'block', mb: 1 }}>
                      Project: {testimonial.project}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                        Key Impacts:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                        {testimonial.impact.map((impact, i) => (
                          <Chip 
                            key={i} 
                            label={impact} 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                              color: '#fff',
                              fontSize: '0.7rem'
                            }} 
                          />
                        ))}
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                        Technologies:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                        {testimonial.technologies.map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                              borderColor: '#6366f1',
                              color: '#6366f1',
                              fontSize: '0.7rem'
                            }} 
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Case Studies Section */}
        <Typography variant="h5" sx={{ color: '#6366f1', fontWeight: 600, mb: 3, letterSpacing: '-0.025em' }}>
          📊 Case Studies
        </Typography>
        <Grid container spacing={3}>
          {caseStudies.map((study, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 3, 
                  boxShadow: 2 
                }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BusinessIcon sx={{ color: '#6366f1', mr: 1 }} />
                      <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 600, letterSpacing: '-0.025em' }}>
                        {study.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                      <strong>Company:</strong> {study.company} | <strong>Duration:</strong> {study.duration}
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ p: 2, background: 'rgba(255,107,107,0.1)', borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ color: '#ff6b6b', fontWeight: 600, mb: 1 }}>
                            🎯 Challenge
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.6 }}>
                            {study.challenge}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Box sx={{ p: 2, background: 'rgba(74,144,226,0.1)', borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ color: '#4a90e2', fontWeight: 600, mb: 1 }}>
                            💡 Solution
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.6 }}>
                            {study.solution}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Box sx={{ p: 2, background: 'rgba(46,204,113,0.1)', borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ color: '#2ecc71', fontWeight: 600, mb: 1 }}>
                            📈 Results
                          </Typography>
                          <ul style={{ margin: 0, paddingLeft: 16 }}>
                            {study.results.map((result, i) => (
                              <li key={i} style={{ color: '#333', fontSize: '0.875rem', marginBottom: 4, lineHeight: 1.6 }}>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                    
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                        Technologies Used:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                        {study.technologies.map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small" 
                            icon={<CodeIcon />}
                            sx={{ 
                              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                              color: '#fff',
                              fontSize: '0.75rem'
                            }} 
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Testimonials; 