import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Correctly import jwtDecode
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function SignIn({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            onLogin(response.data.token); // Pass the token back to the parent component.

            // Decode token to get user role
            const decodedToken = jwtDecode(response.data.token); // Use jwtDecode to decode JWT
            if (decodedToken.role === 'admin') {
                navigate('/admin'); // Redirect to Admin Dashboard
            } else if (decodedToken.role === 'researcher') {
                navigate('/researcher'); // Redirect to Researcher UI
            } else if (decodedToken.role === 'mentor') {
                navigate('/mentor'); // Redirect to Mentor UI
            }
        } catch (error) {
            alert("Login failed! Please check your credentials.");
            console.error("Login error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default SignIn;
