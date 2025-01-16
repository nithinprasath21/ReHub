import React, { useState } from 'react';
import axios from 'axios';

function CreateUser({ userType, onUserCreated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/signup`, { 
                email, 
                password,
                role: userType // Send the userType as role
            });
            alert(response.data.message); // Show success message
            setEmail('');
            setPassword('');
            if (onUserCreated) onUserCreated(); // Call the callback function to refresh the project list
        } catch (error) {
            alert("Error creating user! " + (error.response?.data.message || "Please try again."));
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder={`Enter ${userType} email`} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder={`Enter ${userType} password`} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Create {userType.charAt(0).toUpperCase() + userType.slice(1)}</button>
        </form>
    );
}

export default CreateUser;
