import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth'; // Import the Auth component
import AdminDashboard from './components/AdminDashboard';
import ResearcherUI from './components/ResearcherUI'; // Import Researcher UI component
import MentorUI from './components/MentorUI'; // Import Mentor UI component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} /> {/* Use Auth for both login and signup */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/researcher" element={<ResearcherUI />} />
                <Route path="/mentor" element={<MentorUI />} />
            </Routes>
        </Router>
    );
}

export default App;
