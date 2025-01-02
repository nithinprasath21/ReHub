// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

function SignUp({ onToggle }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/signup', { email, password });
            alert("Sign-up successful! You can now sign in.");
            onToggle(); // Automatically switch to sign-in after successful sign-up
        } catch (error) {
            alert("Error signing up!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
            <button type="submit">Sign Up</button>
            <p>Already have an account? <span onClick={onToggle} style={{ cursor: 'pointer', color: 'blue' }}>Sign In</span></p>
        </form>
    );
}

export default SignUp;
