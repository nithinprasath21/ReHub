import React from 'react';
import CreateUser from './CreateUser'; // Import the CreateUser component

function AdminDashboard() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            
            <h3>Create New Researcher</h3>
            <CreateUser userType="researcher" onUserCreated={() => {}} />

            <h3>Create New Mentor</h3>
            <CreateUser userType="mentor" onUserCreated={() => {}} />

            <h3>Create New Admin</h3>
            <CreateUser userType="admin" onUserCreated={() => {}} /> {/* Use CreateUser for creating admins */}
        </div>
    );
}

export default AdminDashboard;
