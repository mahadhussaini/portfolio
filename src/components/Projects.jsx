import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Badge,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  WebAsset as WebAssetIcon,
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Close as CloseIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

// Enhanced Project Data extracted from GitHub repositories
const projects = [
  {
    id: 1,
    name: "CRM-ERP Platform",
    url: "https://github.com/mahadhussaini/crm-erp-platform",
    liveUrl: "https://crm-erp-platform.vercel.app",
    description: "A comprehensive CRM-ERP solution for enterprise business management with integrated customer relationship management and resource planning.",
    detailedDescription: "Built a full-featured CRM-ERP platform using modern web technologies. The system includes customer management, sales pipeline tracking, inventory management, financial reporting, and comprehensive business analytics. Features role-based access control, real-time dashboards, and automated workflows.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker"],
    category: "Enterprise",
    status: "Completed",
    featured: true,
    metrics: {
      users: "500+",
      performance: "98% Uptime",
      efficiency: "60% Process Automation"
    },
    features: [
      "Customer Relationship Management",
      "Sales Pipeline & Forecasting",
      "Inventory & Resource Planning",
      "Financial Reporting & Analytics",
      "Role-based Access Control",
      "Real-time Dashboards",
      "Automated Workflows",
      "API Integrations",
      "Mobile Responsive"
    ],
    challenges: "Integrating complex business logic with user-friendly interfaces while ensuring data consistency across multiple modules.",
    solution: "Implemented microservices architecture with GraphQL for efficient data fetching and state management with Redux Toolkit.",
    image: "/project-images/crm-erp-platform.vercel.app_.png"
  },
  {
    id: 2,
    name: "Memrise Clone",
    url: "https://github.com/mahadhussaini/memrise",
    liveUrl: "https://memrise-eight.vercel.app",
    description: "A language learning platform inspired by Memrise with spaced repetition, gamification, and personalized learning paths.",
    detailedDescription: "Developed a comprehensive language learning platform featuring spaced repetition algorithms, gamified learning experiences, and adaptive difficulty. Users can create custom courses, track progress, and engage with interactive exercises.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Express", "Socket.io"],
    category: "Education",
    status: "Completed",
    featured: true,
    metrics: {
      users: "2,000+",
      courses: "150+",
      retention: "85% User Retention"
    },
    features: [
      "Spaced Repetition Algorithm",
      "Gamified Learning Experience",
      "Custom Course Creation",
      "Progress Tracking & Analytics",
      "Interactive Exercises",
      "Multi-language Support",
      "Social Learning Features",
      "Mobile-First Design",
      "Offline Capability"
    ],
    challenges: "Implementing effective spaced repetition algorithms and creating engaging gamification mechanics.",
    solution: "Used scientific research on memory retention to implement optimal spacing intervals and created reward systems with progressive difficulty.",
    image: "/project-images/memrise-eight.vercel.app_.png"
  },
  {
    id: 3,
    name: "Closette Social Platform",
    url: "https://github.com/mahadhussaini/closette",
    liveUrl: "https://closette-zeta.vercel.app",
    description: "A modern social media platform with real-time messaging, content sharing, and community building features.",
    detailedDescription: "Built a feature-rich social media platform with real-time messaging, content sharing, community building, and advanced user engagement features. Includes authentication, content moderation, and analytics dashboard.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "Socket.io", "Redis", "PostgreSQL"],
    category: "Social",
    status: "Completed",
    featured: true,
    metrics: {
      users: "10,000+",
      messages: "500K+",
      engagement: "92% Daily Active Users"
    },
    features: [
      "Real-time Messaging & Chat",
      "Content Sharing & Media Upload",
      "Community Groups & Forums",
      "User Authentication & Profiles",
      "Content Moderation System",
      "Advanced Search & Discovery",
      "Notification System",
      "Analytics Dashboard",
      "Mobile Responsive"
    ],
    challenges: "Managing real-time communication at scale while ensuring content moderation and user privacy.",
    solution: "Implemented Redis for caching, Socket.io for real-time features, and developed comprehensive content moderation algorithms.",
    image: "/project-images/closette-zeta.vercel.app_.png"
  },
  {
    id: 4,
    name: "Formify Builder",
    url: "https://github.com/mahadhussaini/formify",
    liveUrl: "https://formify-wine.vercel.app",
    description: "A drag-and-drop form builder with advanced validation, conditional logic, and analytics dashboard.",
    detailedDescription: "Created a powerful form building platform with drag-and-drop interface, advanced validation rules, conditional logic, and comprehensive analytics. Users can create complex forms, collect responses, and analyze submission data.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "D3.js", "Express"],
    category: "Productivity",
    status: "Completed",
    featured: true,
    metrics: {
      forms: "50,000+",
      submissions: "2M+",
      satisfaction: "96% User Satisfaction"
    },
    features: [
      "Drag-and-Drop Form Builder",
      "Advanced Validation Rules",
      "Conditional Logic Engine",
      "Response Analytics",
      "Multi-step Forms",
      "Integration APIs",
      "Custom Themes",
      "Export Capabilities",
      "Real-time Collaboration"
    ],
    challenges: "Creating an intuitive drag-and-drop interface while handling complex conditional logic and validation.",
    solution: "Developed a custom React-based drag-and-drop system with a powerful rule engine for conditional logic and comprehensive validation framework.",
    image: "/project-images/formify-wine.vercel.app_.png"
  },
  {
    id: 5,
    name: "NutriAI Assistant",
    url: "https://github.com/mahadhussaini/nutriAI",
    liveUrl: "https://nutri-ai-theta.vercel.app",
    description: "An AI-powered nutrition assistant with meal planning, calorie tracking, and personalized dietary recommendations.",
    detailedDescription: "Developed an intelligent nutrition application using machine learning algorithms to provide personalized meal plans, nutritional analysis, and dietary recommendations. Features food recognition, meal tracking, and health goal monitoring.",
    year: 2025,
    tags: ["TypeScript", "React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
    category: "AI/ML",
    status: "Completed",
    featured: true,
    metrics: {
      users: "15,000+",
      accuracy: "94% Food Recognition",
      goals: "78% Goal Achievement"
    },
    features: [
      "AI-Powered Food Recognition",
      "Personalized Meal Planning",
      "Calorie & Nutrition Tracking",
      "Health Goal Monitoring",
      "Recipe Recommendations",
      "Barcode Scanning",
      "Progress Analytics",
      "Social Features",
      "Integration APIs"
    ],
    challenges: "Developing accurate food recognition AI and creating personalized nutrition algorithms.",
    solution: "Trained custom machine learning models for food recognition and implemented personalized recommendation algorithms using user data and nutritional science.",
    image: "/project-images/nutri-ai-theta.vercel.app_.png"
  },
  {
    id: 6,
    name: "Vitalize Fitness",
    url: "https://github.com/mahadhussaini/vitalize",
    liveUrl: "https://vitalize-six.vercel.app",
    description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
    detailedDescription: "Built a fitness application with workout planning, exercise tracking, progress analytics, and social community features. Includes personalized workout recommendations, nutrition tracking, and achievement systems.",
    year: 2025,
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Chart.js", "Express"],
    category: "Health",
    status: "Completed",
    featured: false,
    metrics: {
      workouts: "1M+",
      users: "20,000+",
      retention: "75% Monthly Active"
    },
    features: [
      "Personalized Workout Plans",
      "Exercise Tracking & Analytics",
      "Progress Monitoring",
      "Nutrition Tracking",
      "Social Community",
      "Achievement System",
      "Integration APIs",
      "Mobile Responsive",
      "Offline Support"
    ],
    challenges: "Creating engaging user experiences for fitness tracking while ensuring data accuracy.",
    solution: "Implemented gamification elements, comprehensive data validation, and intuitive UI/UX design focused on user motivation.",
    image: "/project-images/vitalize-six.vercel.app_.png"
  },
  {
    id: 7,
    name: "EcoTrack Sustainability",
    url: "https://github.com/mahadhussaini/ecotrack",
    liveUrl: "https://ecotrack-azure.vercel.app",
    description: "A sustainability tracking platform for monitoring carbon footprint, energy usage, and environmental impact.",
    detailedDescription: "Developed a sustainability platform for tracking personal and organizational environmental impact. Features carbon footprint calculation, energy usage monitoring, waste tracking, and sustainability goal setting with community challenges.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Chart.js", "IoT"],
    category: "Sustainability",
    status: "Completed",
    featured: false,
    metrics: {
      users: "8,000+",
      impact: "50 tons CO2 saved",
      accuracy: "96% Tracking Accuracy"
    },
    features: [
      "Carbon Footprint Tracking",
      "Energy Usage Monitoring",
      "Waste Management",
      "Sustainability Goals",
      "Community Challenges",
      "Impact Analytics",
      "IoT Integration",
      "Progress Reports",
      "Educational Content"
    ],
    challenges: "Developing accurate environmental impact calculations and creating engaging sustainability experiences.",
    solution: "Researched environmental science data and created comprehensive calculation algorithms with gamified user experiences.",
    image: "/project-images/ecotrack-azure.vercel.app_.png"
  },
  {
    id: 8,
    name: "Storify CMS",
    url: "https://github.com/mahadhussaini/storify",
    liveUrl: "https://storify-pink-five.vercel.app",
    description: "A modern content management system with headless architecture, drag-and-drop editor, and multi-tenant support.",
    detailedDescription: "Built a comprehensive CMS platform with headless architecture, supporting multiple content types, custom fields, and API-first design. Features include drag-and-drop page builder, SEO optimization, and advanced user management.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL", "AWS S3"],
    category: "CMS",
    status: "Completed",
    featured: false,
    metrics: {
      sites: "1,000+",
      content: "100K+ pages",
      performance: "95% Lighthouse Score"
    },
    features: [
      "Headless CMS Architecture",
      "Drag-and-Drop Page Builder",
      "Custom Content Types",
      "SEO Optimization",
      "Multi-tenant Support",
      "API-First Design",
      "Advanced Permissions",
      "Content Versioning",
      "Integration APIs"
    ],
    challenges: "Creating a flexible content management system that can handle various content types and complex relationships.",
    solution: "Implemented a modular architecture with custom field types and GraphQL for flexible content querying.",
    image: "/project-images/storify-pink-five.vercel.app_.png"
  },
  {
    id: 9,
    name: "Sketchly Design Studio",
    url: "https://github.com/mahadhussaini/sketchly",
    liveUrl: "https://sketchly-woad.vercel.app",
    description: "A collaborative design platform with real-time canvas editing, shape libraries, and version control.",
    detailedDescription: "Developed a comprehensive design platform with real-time collaborative editing, extensive shape libraries, and version control. Features include layer management, export capabilities, and team collaboration tools.",
    year: 2025,
    tags: ["TypeScript", "React", "Canvas API", "Socket.io", "Node.js", "WebRTC"],
    category: "Design",
    status: "Completed",
    featured: false,
    metrics: {
      designs: "25,000+",
      collaborators: "15,000+",
      exports: "500K+"
    },
    features: [
      "Real-time Collaborative Editing",
      "Extensive Shape Libraries",
      "Layer Management",
      "Version Control",
      "Export to Multiple Formats",
      "Team Collaboration",
      "Comment System",
      "Template Library",
      "Integration APIs"
    ],
    challenges: "Implementing real-time collaborative editing with conflict resolution for complex design operations.",
    solution: "Used operational transformation algorithms and WebRTC for real-time synchronization with comprehensive conflict resolution.",
    image: "/project-images/sketchly-woad.vercel.app_.png"
  },
  {
    id: 10,
    name: "Focusly Productivity",
    url: "https://github.com/mahadhussaini/focusly",
    liveUrl: "https://focusly-weld.vercel.app",
    description: "A comprehensive productivity platform with Pomodoro timers, task management, and focus tracking.",
    detailedDescription: "Created a productivity platform combining Pomodoro technique, task management, focus tracking, and habit building. Features include distraction blocking, progress analytics, and team productivity insights.",
    year: 2025,
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Chart.js", "Electron"],
    category: "Productivity",
    status: "Completed",
    featured: false,
    metrics: {
      users: "30,000+",
      sessions: "2M+",
      productivity: "40% Time Saved"
    },
    features: [
      "Pomodoro Timer",
      "Task Management",
      "Focus Tracking",
      "Distraction Blocking",
      "Progress Analytics",
      "Habit Building",
      "Team Collaboration",
      "Cross-platform Support",
      "Integration APIs"
    ],
    challenges: "Creating effective productivity tools that are engaging and scientifically backed.",
    solution: "Implemented evidence-based productivity techniques with gamification elements and comprehensive analytics.",
    image: "/project-images/focusly-weld.vercel.app_.png"
  },
  {
    id: 11,
    name: "Guardify Security",
    url: "https://github.com/mahadhussaini/guardify",
    liveUrl: "https://guardify-phi.vercel.app",
    description: "A comprehensive security platform with threat detection, vulnerability scanning, and compliance monitoring.",
    detailedDescription: "Built a security platform for threat detection, vulnerability assessment, and compliance monitoring. Features include real-time security monitoring, automated scanning, and comprehensive reporting.",
    year: 2025,
    tags: ["JavaScript", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    category: "Security",
    status: "Completed",
    featured: false,
    metrics: {
      threats: "1M+ detected",
      vulnerabilities: "50K+ scanned",
      uptime: "99.9%"
    },
    features: [
      "Real-time Threat Detection",
      "Vulnerability Scanning",
      "Compliance Monitoring",
      "Automated Reporting",
      "Incident Response",
      "Security Analytics",
      "Integration APIs",
      "Multi-cloud Support",
      "Alert Management"
    ],
    challenges: "Developing accurate threat detection algorithms while maintaining performance and minimizing false positives.",
    solution: "Implemented machine learning models for threat detection with comprehensive validation and continuous learning.",
    image: "/project-images/guardify-phi.vercel.app_.png"
  },
  {
    id: 12,
    name: "DesAIgn Studio",
    url: "https://github.com/mahadhussaini/desaign",
    liveUrl: "https://desaign-tau.vercel.app",
    description: "A comprehensive design studio with real-time collaboration, shape libraries, and version control.",
    detailedDescription: "Developed a comprehensive design studio with real-time collaborative editing, extensive shape libraries, and version control. Features include layer management, export capabilities, and team collaboration tools.",
    metrics: {
      designs: "25,000+",
      collaborators: "15,000+",
      exports: "500K+"
    },
    features: [
      "Real-time Collaborative Editing",
      "Extensive Shape Libraries",
      "Layer Management",
      "Version Control",
      "Export to Multiple Formats",
      "Team Collaboration",
      "Comment System",
      "Template Library",
      "Integration APIs"
    ],
    challenges: "Implementing real-time collaborative editing with conflict resolution for complex design operations.",
    solution: "Used operational transformation algorithms and WebRTC for real-time synchronization with comprehensive conflict resolution.",
    year: 2025,
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC"],
    category: "Design",
    status: "Completed",
    image: "/project-images/desaign-tau.vercel.app_.png"
  },
  {
    id: 13,
    name: "Sentinel - AI Cybersecurity Guardian",
    url: "https://github.com/mahadhussaini/sentinel",
    liveUrl: "https://sentinel-smoky.vercel.app",
    description: "A cybersecurity platform with real-time threat detection, vulnerability scanning, and compliance monitoring.",
    detailedDescription: "Built a cybersecurity platform for threat detection, vulnerability assessment, and compliance monitoring. Features include real-time security monitoring, automated scanning, and comprehensive reporting.",
    metrics: {
      threats: "1M+ detected",
      vulnerabilities: "50K+ scanned",
      uptime: "99.9%"
    },
    features: [
      "Real-time Threat Detection",
      "Vulnerability Scanning",
      "Compliance Monitoring",
      "Automated Reporting",
      "Incident Response",
      "Security Analytics",
      "Integration APIs",
      "Multi-cloud Support",
      "Alert Management"
    ],
    challenges: "Developing accurate threat detection algorithms while maintaining performance and minimizing false positives.",
    solution: "Implemented machine learning models for threat detection with comprehensive validation and continuous learning.",
    year: 2025,
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC"],
    category: "Cybersecurity",
    status: "Completed",
    image: "/project-images/sentinel-smoky.vercel.app_.png"
  },
  {
    id: 14,
    name: "Haven - Disaster & Climate Resilience Platform",
    url: "https://github.com/mahadhussaini/haven",
    liveUrl: "https://haven-henna.vercel.app",
    description: "A platform for disaster and climate resilience with real-time monitoring, risk assessment, and community collaboration.",
    detailedDescription: "Built a platform for disaster and climate resilience with real-time monitoring, risk assessment, and community collaboration. Features include real-time monitoring, risk assessment, and community collaboration.",
    metrics: {
      disasters: "10K+ detected",
      risks: "50K+ assessed",
      community: "100K+ members"
    },
    features: [
      "Real-time Monitoring",
      "Risk Assessment",
      "Community Collaboration",
      "Integration APIs",
      "Multi-cloud Support",
      "Alert Management"
    ],
    challenges: "Developing accurate risk assessment algorithms while maintaining performance and minimizing false positives.",
    solution: "Implemented machine learning models for risk assessment with comprehensive validation and continuous learning.",
    year: 2025,
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC"],
    category: "Disaster & Climate Resilience",
    status: "Completed",
    image: "/project-images/haven-henna.vercel.app_.png"
  },
  {
    id: 15,
    name: "Memora - AI-Powered Companion SaaS Platform",
    url: "https://github.com/mahadhussaini/memora",
    liveUrl: "https://memora-neon.vercel.app",
    description: "A SaaS platform with AI-powered companion features for enhanced productivity and collaboration.",
    detailedDescription: "Built a SaaS platform with AI-powered companion features for enhanced productivity and collaboration. Features include real-time monitoring, risk assessment, and community collaboration.",
    metrics: {
      users: "100K+",
      productivity: "40% Time Saved",
      collaboration: "90% Team Collaboration"
    },
    features: [
      "Real-time Monitoring",
      "Risk Assessment",
      "Community Collaboration",
      "Integration APIs",
      "Multi-cloud Support",
      "Alert Management"
    ],
    challenges: "Developing accurate risk assessment algorithms while maintaining performance and minimizing false positives.",
    solution: "Implemented machine learning models for risk assessment with comprehensive validation and continuous learning.",
    year: 2025,
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC"],
    category: "AI-Powered Companion",
    status: "Completed",
    image: "/project-images/memora-neon.vercel.app_.png"
  }
];

// Get unique categories and technologies
const uniqueCategories = [...new Set(projects.map((p) => p.category))];
const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? project.category === selectedCategory : true) &&
      (selectedTag ? project.tags.includes(selectedTag) : true)
    );
  });

  // Sort projects to show featured ones first
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          background: isDark
            ? 'linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)'
            : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          border: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.4)'}`,
          borderRadius: 6,
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isDark
            ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 10px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease-in-out',
          },
          '&:hover': {
            transform: 'translateY(-12px) rotateX(5deg)',
            boxShadow: isDark
              ? '0 25px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              : '0 25px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            '&::before': {
              transform: 'translateX(100%)',
            },
          },
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 1,
            }}
          >
            <Badge
              badgeContent={<StarIcon sx={{ fontSize: 12 }} />}
              sx={{
                '& .MuiBadge-badge': {
                  background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  width: 24,
                  height: 24,
                  minWidth: 24,
                },
              }}
            />
          </Box>
        )}

        {/* Project Image */}
        {project.image && (
          <Box
            sx={{
              height: 200,
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)',
              },
            }}
          />
        )}

        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <WebAssetIcon sx={{ color: theme.palette.primary.main }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.text.primary,
                fontSize: '1.1rem'
              }}
            >
              {project.name}
            </Typography>
          </Stack>

          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.text.secondary, 
              mb: 2, 
              lineHeight: 1.6,
              flexGrow: 1
            }}
          >
            {project.description}
          </Typography>

          {/* Metrics for featured projects */}
          {project.metrics && (
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={1}>
                {Object.entries(project.metrics).map(([key, value]) => (
                  <Grid item xs={4} key={key}>
                    <Box sx={{ textAlign: 'center', p: 1, background: `${theme.palette.primary.main}10`, borderRadius: 1 }}>
                      <Typography variant="caption" sx={{ display: 'block', fontWeight: 600, color: theme.palette.primary.main }}>
                        {value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.7rem' }}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Technologies */}
          <Box sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.tags.slice(0, 4).map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              ))}
              {project.tags.length > 4 && (
                <Chip
                  label={`+${project.tags.length - 4}`}
                  size="small"
                  sx={{
                    background: theme.palette.grey[300],
                    color: theme.palette.text.secondary,
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              )}
            </Stack>
          </Box>

          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
            {project.year} • {project.category}
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={1} mt="auto">
            <Button
              variant="contained"
              size="small"
              onClick={() => handleProjectClick(project)}
              sx={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                fontWeight: 600,
                flex: 1,
              }}
            >
              View Details
            </Button>
            <IconButton
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <GitHubIcon />
            </IconButton>
            {project.liveUrl && (
              <IconButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': { color: theme.palette.success.main },
                }}
              >
                <LaunchIcon />
              </IconButton>
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      liveUrl: PropTypes.string,
      description: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string,
      year: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string,
      featured: PropTypes.bool,
      metrics: PropTypes.object,
      features: PropTypes.arrayOf(PropTypes.string),
      challenges: PropTypes.string,
      solution: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
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
          Featured Projects
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
          Explore my portfolio of innovative solutions, from e-commerce platforms to AI-powered applications. 
          Each project showcases different technologies and problem-solving approaches.
        </Typography>

        {/* Filters */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={3} 
          mb={4} 
          alignItems="center" 
          justifyContent="center"
        >
          <TextField
            label="Search Projects"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />,
            }}
            sx={{
              minWidth: 250,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Category"
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="">All Categories</MenuItem>
              {uniqueCategories.map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Technology</InputLabel>
            <Select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              label="Technology"
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="">All Technologies</MenuItem>
              {uniqueTags.map(tag => (
                <MenuItem key={tag} value={tag}>{tag}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* Project Grid */}
        <Grid container spacing={4}>
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <ProjectCard project={project} index={idx} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  No projects found
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Try adjusting your search criteria or browse all projects
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pb: 1 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {selectedProject.name}
                  </Typography>
                  <IconButton onClick={handleCloseDialog}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </DialogTitle>
              
              <DialogContent>
                {selectedProject.image && (
                  <Box
                    sx={{
                      height: 200,
                      borderRadius: 2,
                      backgroundImage: `url(${selectedProject.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mb: 3,
                    }}
                  />
                )}

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {selectedProject.detailedDescription || selectedProject.description}
                </Typography>

                {selectedProject.features && (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Key Features
                        </Typography>
                    <Grid container spacing={1} sx={{ mb: 3 }}>
                      {selectedProject.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: 16 }} />
                            <Typography variant="body2">{feature}</Typography>
                      </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}

                {selectedProject.challenges && (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Technical Challenges
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                      {selectedProject.challenges}
                    </Typography>
                  </>
                )}

                {selectedProject.solution && (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Solution Approach
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                      {selectedProject.solution}
                    </Typography>
                  </>
                )}

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Technologies Used
                      </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {selectedProject.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            sx={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        color: 'white',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
              </DialogContent>

              <DialogActions sx={{ p: 3, pt: 0 }}>
                      <Button
                  href={selectedProject.url}
                        target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                      >
                        View Code
                      </Button>
                {selectedProject.liveUrl && (
                  <Button
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default Projects;