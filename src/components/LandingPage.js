// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Project Management System</h1>
            <Link to="/add-project">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>Add Project</button>
            </Link>
        </div>
    );
}

export default LandingPage;
