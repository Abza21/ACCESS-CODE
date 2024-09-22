// src/components/Auth.js

import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Box, Button, Typography } from '@mui/material';

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and SignUp

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (email, password) => {
    // Handle login logic
    console.log('Login:', { email, password });
  };

  const handleSignUp = (userData) => {
    // Handle sign-up logic
    console.log('Sign Up:', userData);
  };

  return (
    <Box>
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <SignUp onSignUp={handleSignUp} />
      )}

      <Box textAlign="center" marginTop="16px">
        {isLogin ? (
          <>
            <Typography>Don't have an account?</Typography>
            <Button onClick={toggleAuthMode}>Sign Up</Button>
          </>
        ) : (
          <>
            <Typography>Already have an account?</Typography>
            <Button onClick={toggleAuthMode}>Login</Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Auth;
