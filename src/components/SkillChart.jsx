import { useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillChart = ({ skills, title }) => {
  const theme = useTheme();
  const canvasRef = useRef(null);
  const isDark = theme.palette.mode === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set up radar chart
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;
    const angles = skills.map((_, i) => (i * 2 * Math.PI) / skills.length - Math.PI / 2);

    // Draw background grid
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 1;
    
    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw spokes
    angles.forEach(angle => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.stroke();
    });

    // Draw skill data
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, 'rgba(99,102,241,0.3)');
    gradient.addColorStop(1, 'rgba(139,92,246,0.1)');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;

    ctx.beginPath();
    skills.forEach((skill, i) => {
      const angle = angles[i];
      const distance = (radius * skill.level) / 5;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw skill points
    skills.forEach((skill, i) => {
      const angle = angles[i];
      const distance = (radius * skill.level) / 5;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw skill labels
    ctx.fillStyle = isDark ? '#f8fafc' : '#1e293b';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    skills.forEach((skill, i) => {
      const angle = angles[i];
      const labelDistance = radius + 20;
      const x = centerX + Math.cos(angle) * labelDistance;
      const y = centerY + Math.sin(angle) * labelDistance + 4;
      
      ctx.fillText(skill.name, x, y);
    });

  }, [skills, isDark]);

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
        {title}
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </motion.div>
    </Box>
  );
};

SkillChart.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillChart;
