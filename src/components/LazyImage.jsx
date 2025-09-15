import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton } from '@mui/material';

const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  sx = {}, 
  placeholder = true,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Box
      ref={imgRef}
      sx={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {inView && (
        <>
          {placeholder && !loaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
          )}
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            loading="lazy"
          />
        </>
      )}
    </Box>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sx: PropTypes.object,
  placeholder: PropTypes.bool,
};

export default LazyImage;
