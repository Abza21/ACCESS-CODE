// src/components/SharedFiles.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const SharedFiles = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Shared Files</Typography>
      <Typography variant="body1">This is where you can view files shared with you.</Typography>
    </Box>
  );
};

export default SharedFiles;
