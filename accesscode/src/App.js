// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import SharedFiles from './components/SharedFiles';
import DataPrivacy from './components/DataPrivacy';
import NFTs from './components/NFTs';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/shared-files" element={<SharedFiles />} />
        <Route path="/data-privacy" element={<DataPrivacy />} />
        <Route path="/nfts" element={<NFTs />} />
      </Routes>
    </Router>
  );
};

export default App;
