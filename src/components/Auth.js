import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isSignup) {
                // Handle signup
                response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
                alert(response.data.message); // Show success message
            } else {
                // Handle login
                response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
                const token = response.data.token;
                localStorage.setItem('token', token); // Store token in local storage

                // Redirect based on user role
                const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT without jwtDecode
                if (decodedToken.role === 'admin') {
                    navigate('/admin'); // Redirect to Admin Dashboard
                } else if (decodedToken.role === 'researcher') {
                    navigate('/researcher'); // Redirect to Researcher UI
                } else if (decodedToken.role === 'mentor') {
                    navigate('/mentor'); // Redirect to Mentor UI
                }
            }
            setEmail('');
            setPassword('');
        } catch (error) {
            alert("Operation failed! " + (error.response?.data.message || "Please try again."));
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{isSignup ? "Admin Signup" : "Login"}</h2>
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
                <button type="submit">{isSignup ? "Create Admin" : "Login"}</button>
            </form>
            <p>
                {isSignup ? "Already have an account?" : "Don't have an account?"}
                <button onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Login" : "Sign Up"}
                </button>
            </p>
        </div>
    );
}

export default Auth;
