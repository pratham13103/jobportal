import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import OtpLogin from './pages/OtpLogin';
import Profile from './pages/Profile';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/otp-login" element={<OtpLogin />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
