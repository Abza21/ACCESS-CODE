// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ACCESS CODE
        </Typography>

        <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => navigate('/dashboard')}>
          Dashboard
        </Button>
        <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => navigate('/shared-files')}>
          Shared with you
        </Button>
        <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => navigate('/data-privacy')}>
          Data Privacy
        </Button>
        <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => navigate('/nfts')}>
          NFTs
        </Button>

        <IconButton color="inherit" sx={{ ml: 0.1 }}>
          <AccountCircleIcon />
        </IconButton>
        <Button color="inherit" sx={{ textTransform: 'none' }} onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
