import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AddProject from './components/AddProject';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <Navbar />

            {/* Routes */}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-project" element={<AddProject />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
