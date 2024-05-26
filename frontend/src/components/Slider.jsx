import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { pink } from '@mui/material/colors';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ContinuousSlider = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        bgcolor: pink[600],
        height: '75px', // Increase height to 80px
        width: '100%', // Set width to 100%
        fontFamily: 'Roboto Mono, monospace', // Use the same font as in the navbar
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'inline-flex',
          animation: `${scroll} 15s linear infinite`, // Slower animation
          width: '200%', // Adjust slider width
        }}
      >
        <Box sx={{ display: 'flex', width: '50%' }}>
          {Array(6)
            .fill('Stay tuned for 2024     ')
            .map((text, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{
                  display: 'inline-block',
                  paddingRight: theme.spacing(6),
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'black',
                  fontSize: '17px', // Font size
                }}
              >
                {text}
              </Typography>
            ))}
        </Box>
        <Box sx={{ display: 'flex', width: '50%' }}>
          {Array(6)
            .fill('Stay tuned for 2024')
            .map((text, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{
                  display: 'inline-block',
                  paddingRight: theme.spacing(6),
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'black',
                  fontSize: '17px', // Font size
                }}
              >
                {text}
              </Typography>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContinuousSlider;
