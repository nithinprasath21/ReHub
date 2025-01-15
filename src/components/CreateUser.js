import React, { useState } from 'react';
import axios from 'axios';

function CreateUser({ userType }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(userType); // Set default role based on prop

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', { email, password, role });
            alert(`${role.charAt(0).toUpperCase() + role.slice(1)} created successfully!`);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Error creating user:", error.response ? error.response.data : error.message);
            alert("Error creating user! " + (error.response?.data.message || "Please try again."));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Create New {role.charAt(0).toUpperCase() + role.slice(1)}</h4>
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
            <button type="submit">Create {role.charAt(0).toUpperCase() + role.slice(1)}</button>
        </form>
    );
}

export default CreateUser;
