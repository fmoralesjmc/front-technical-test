import React from 'react';
import { Box } from '@mui/material';
import { Atom } from 'react-loading-indicators';

interface LoadingIndicatorProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ color = '#000', size = 'small' }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <Atom color="#9ca59c" size="large" text="Loadgin" textColor="" />
    </Box>
  );
};

export default LoadingIndicator;