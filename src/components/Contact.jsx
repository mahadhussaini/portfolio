import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Stack,
  Chip,
  useTheme,
  Alert,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
  Language as LanguageIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "mahadarshad214@gmail.com",
      href: "mailto:mahadarshad214@gmail.com",
      description: "Feel free to drop me a line anytime",
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: "+92 330 6147798",
      href: "tel:+923306147798",
      description: "Available for calls (PKT timezone)",
    },
    {
      icon: <LocationIcon />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
      description: "Open to remote and local opportunities",
    },
    {
      icon: <ScheduleIcon />,
      label: "Availability",
      value: "Open to Projects",
      href: null,
      description: "Currently accepting new projects",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahad-arshad",
      color: "#0077b5",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/mahadhussaini",
      color: isDark ? "#fff" : "#333",
    },
    {
      icon: <LanguageIcon />,
      label: "Portfolio",
      href: "https://mahadhussaini.netlify.app",
      color: theme.palette.primary.main,
    },
  ];

  const services = [
    "Full Stack Development",
    "React/Next.js Applications",
    "Node.js Backend Development",
    "Database Design & Optimization",
    "Cloud Deployment & DevOps",
    "API Development & Integration",
    "UI/UX Implementation",
    "Performance Optimization",
    "Technical Consulting",
    "Code Review & Mentoring",
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
            ? `linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(168,85,247,0.15) 100%),
               radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
            : `linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(168,85,247,0.08) 100%),
               radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`,
          borderRadius: 6,
          p: { xs: 4, sm: 8 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          border: `2px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.4)'}`,
          backdropFilter: 'blur(20px)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
          },
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
          Let&apos;s Work Together
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
          I&apos;m always excited to discuss new opportunities, innovative projects, 
          or just have a conversation about technology. Let&apos;s create something amazing together!
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                background: isDark
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, color: theme.palette.text.primary }}
                >
                  Send Me a Message
                </Typography>
                
                {submitStatus && (
                  <Alert
                    severity={submitStatus === "success" ? "success" : "error"}
                    sx={{ mb: 3 }}
                    icon={submitStatus === "success" ? <CheckCircleIcon /> : undefined}
                  >
                    {submitStatus === "success"
                      ? "Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!"
                      : "Sorry, there was an error sending your message. Please try again or email me directly."}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                        sx={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          '&:hover': {
                            background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                          },
                          '&:disabled': {
                            background: 'rgba(99, 102, 241, 0.5)',
                          },
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information & Services */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              {/* Contact Info */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 3, color: theme.palette.text.primary }}
                  >
                    Contact Information
                  </Typography>
                  <Stack spacing={2}>
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <Box
                          component={info.href ? "a" : "div"}
                          href={info.href}
                          target={info.href ? "_blank" : undefined}
                          rel={info.href ? "noopener noreferrer" : undefined}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': info.href ? {
                              '& .MuiBox-root:first-of-type': {
                                background: theme.palette.primary.main,
                                color: 'white',
                              },
                            } : {},
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: 2,
                              background: `${theme.palette.primary.main}20`,
                              color: theme.palette.primary.main,
                              transition: 'all 0.2s ease-in-out',
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                            >
                              {info.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: theme.palette.text.primary, mb: 0.5 }}
                            >
                              {info.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: theme.palette.text.secondary }}
                            >
                              {info.description}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 3, color: theme.palette.text.primary }}
                  >
                    Connect With Me
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: social.color,
                            background: `${social.color}15`,
                            '&:hover': {
                              background: social.color,
                              color: 'white',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.2s ease-in-out',
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Services */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 3, color: theme.palette.text.primary }}
                  >
                    Services I Offer
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        viewport={{ once: true }}
                      >
                        <Chip
                          label={service}
                          size="small"
                          sx={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Contact;
