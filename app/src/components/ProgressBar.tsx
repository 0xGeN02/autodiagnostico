// src/components/ProgressBar.tsx
import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

type ProgressBarProps = {
  completionPercentage: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ completionPercentage }) => {
  return (
    <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000, bgcolor: 'background.paper', p: 1 }}>
      <Typography variant="body2" color="textSecondary">{`Progreso: ${Math.round(completionPercentage)}%`}</Typography>
      <LinearProgress variant="determinate" value={completionPercentage} />
    </Box>
  );
};

export default ProgressBar;