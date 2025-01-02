// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

function SignIn({ onLogin, onToggle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            onLogin(response.data.token); // Call onLogin with the token received
        } catch (error) {
            alert("Error logging in!");
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
            <p>New user? <span onClick={onToggle} style={{ cursor: 'pointer', color: 'blue' }}>Sign Up</span></p>
        </form>
    );
}

export default SignIn;
