import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './styles/App.css'; // Import your CSS styles

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
