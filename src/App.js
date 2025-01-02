// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Apply from './components/Apply';
import Admin from './components/Admin';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/admin" element={<Admin />} /> {/* Directly render Admin */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
