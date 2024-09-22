// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      onLogin(); // Call onLogin to update authentication state
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { name, username, email, password, confirmPassword });
      localStorage.setItem('token', response.data.token);
      onLogin(); // Call onLogin to update authentication state
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {isSignup && (
        <>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
        </>
      )}

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {isSignup && (
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={isSignup ? handleSignup : handleLogin}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isSignup ? 'Sign Up' : 'Login'}
      </Button>
      <Button onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2 }}>
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </Button>
    </Box>
  );
};

export default Login;
