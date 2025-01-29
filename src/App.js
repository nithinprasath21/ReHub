import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProject from './components/AddProject';
import LandingPage from './components/LandingPage';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/add-project" element={<AddProject />} />
            </Routes>
        </Router>
    );
}

export default App;
