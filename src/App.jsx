import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RoomPage from './pages/RoomPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
// import SignupPage from './pages/SignupPage';
import VerificationPage from './pages/VerificationPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/verification" element={<VerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
