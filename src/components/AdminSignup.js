import React, { useState } from 'react';
import axios from 'axios';

function AdminSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
            alert(response.data.message); // Show success message
            setEmail('');
            setPassword('');
        } catch (error) {
            alert("Signup failed! " + (error.response?.data.message || "Please try again."));
            console.error("Signup error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Admin Signup</h2>
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
            <button type="submit">Create Admin</button>
        </form>
    );
}

export default AdminSignup;
