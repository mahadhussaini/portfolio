import { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Paper,
  TextField,
  Avatar,
  Fab,
  Zoom,
  Fade,
  Stack,
  useTheme,
  CircularProgress
} from '@mui/material';
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as UserIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatbot = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm Mahad's virtual assistant. How can I help you learn more about his work today?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('skills') || lowerInput.includes('tech')) {
        botResponse = "Mahad is an expert in React, Next.js, Node.js, and TypeScript. He also has extensive experience with WebRTC and Infobip APIs for real-time communication!";
      } else if (lowerInput.includes('project')) {
        botResponse = "He has worked on several high-impact projects like an AI-powered CRM, a multi-tenant CMS, and a language learning platform with 2,000+ users.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
        botResponse = "You can reach out to him via the Contact section or directly through LinkedIn. He's always open to discussing new opportunities!";
      } else {
        botResponse = "That's a great question! Mahad specializes in building high-performance, AI-integrated web applications. Is there a specific project or skill you'd like to dive into?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}>
        <Zoom in={true}>
          <Fab
            color="primary"
            aria-label="chat"
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)',
              }
            }}
          >
            {isOpen ? <CloseIcon /> : <ChatIcon />}
          </Fab>
        </Zoom>
      </Box>

      <AnimatePresence>
        {isOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            sx={{
              position: 'fixed',
              bottom: 110,
              right: 32,
              zIndex: 1000,
              width: { xs: 'calc(100vw - 64px)', sm: 400 },
              maxWidth: 400,
            }}
          >
            <Paper
              elevation={24}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: 500,
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.95)' 
                  : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              }}
            >
              {/* Header */}
              <Box sx={{ 
                p: 2, 
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                  <BotIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    AI Portfolio Assistant
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Ask me anything about Mahad!
                  </Typography>
                </Box>
              </Box>

              {/* Chat Body */}
              <Box 
                ref={scrollRef}
                sx={{ 
                  flexGrow: 1, 
                  p: 2, 
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  scrollbarWidth: 'thin',
                }}
              >
                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    sx={{
                      alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                      maxWidth: '85%',
                    }}
                  >
                    <Paper
                      sx={{
                        p: 1.5,
                        borderRadius: msg.isBot ? '20px 20px 20px 4px' : '20px 20px 4px 20px',
                        background: msg.isBot 
                          ? (isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6')
                          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        color: msg.isBot ? 'text.primary' : 'white',
                      }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                    </Paper>
                  </Box>
                ))}
                {isTyping && (
                  <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={16} color="primary" />
                    <Typography variant="caption" color="text.secondary">Thinking...</Typography>
                  </Box>
                )}
              </Box>

              {/* Input Area */}
              <Box sx={{ p: 2, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.1)'}` }}>
                <Stack direction="row" spacing={1}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                  <IconButton 
                    onClick={handleSend}
                    disabled={!input.trim()}
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      '&:hover': { bgcolor: 'primary.dark' },
                      '&.Mui-disabled': { bgcolor: 'action.disabledBackground', color: 'action.disabled' }
                    }}
                  >
                    <SendIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Paper>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
