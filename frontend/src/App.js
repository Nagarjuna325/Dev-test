
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'; 
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));


  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (token) {
    setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn onLoginSuccess={handleLogin} />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route 
          path="/dashboard" 
          element={
            isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/signin" />
          } 
        />
        <Route 
          path="/" 
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
