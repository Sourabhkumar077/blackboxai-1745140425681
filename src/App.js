import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatbotPage from './pages/ChatbotPage';
import MentalHealthAssessmentPage from './pages/MentalHealthAssessmentPage';
import PersonalizedTherapySuggestionsPage from './pages/PersonalizedTherapySuggestionsPage';
import ConnectToTherapistsPage from './pages/ConnectToTherapistsPage';
import UserDashboardPage from './pages/UserDashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
// Other pages will be imported here later

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/assessment" element={<MentalHealthAssessmentPage />} />
          <Route path="/therapy-suggestions" element={<PersonalizedTherapySuggestionsPage />} />
          <Route path="/connect-therapists" element={<ConnectToTherapistsPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfileSettingsPage />} />
          {/* Other routes will be added here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
