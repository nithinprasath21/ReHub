// src/components/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ViewProjects from './ViewProjects'; // New component for viewing projects
import WaitingList from './WaitingList'; // New component for waiting list

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard'); // Track current page

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

    const renderPage = () => {
        switch (currentPage) {
            case 'viewProjects':
                return <ViewProjects />;
            case 'waitingList':
                return <WaitingList />;
            default:
                return (
                    <>
                        <h2>Admin Dashboard</h2>
                        <button onClick={handleLogout} style={{ float: 'right' }}>Sign Out</button>
                        <button onClick={() => setCurrentPage('viewProjects')}>View Projects</button>
                        <button onClick={() => setCurrentPage('waitingList')}>Waiting List</button>
                    </>
                );
        }
    };

    return (
        <div>
            {isLoggedIn ? renderPage() : (
                <>
                    {showSignUp ? (
                        <SignUp onToggle={() => setShowSignUp(false)} />
                    ) : (
                        <SignIn onLogin={handleLogin} onToggle={() => setShowSignUp(true)} />
                    )}
                </>
            )}
        </div>
    );
}

export default Admin;
