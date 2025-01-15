import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser'; // Import the CreateUser component

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [waitingList, setWaitingList] = useState([]);

  useEffect(() => {
      fetchProjects();
      fetchWaitingList();
  }, []);

  const fetchProjects = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/projects');
          setProjects(response.data);
      } catch (error) {
          console.error("Error fetching approved projects:", error);
      }
  };

  const fetchWaitingList = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/waitinglist');
          setWaitingList(response.data);
      } catch (error) {
          console.error("Error fetching waiting list:", error);
      }
  };

  const handleApprove = async (id) => {
      try {
          await axios.post(`http://localhost:5000/api/projects/approve/${id}`);
          fetchWaitingList(); // Refresh waiting list after approval
          fetchProjects(); // Refresh approved projects after approval
      } catch (error) {
          console.error("Error approving project:", error);
      }
  };

  const handleReject = async (id) => {
      try {
          await axios.delete(`http://localhost:5000/api/projects/reject/${id}`);
          fetchWaitingList(); // Refresh waiting list after rejection
      } catch (error) {
          console.error("Error rejecting project:", error);
      }
  };

  return (
      <div>
          <h2>Admin Dashboard</h2>
          
          <h3>Create New Researcher</h3>
          <CreateUser userType="researcher" />

          <h3>Create New Mentor</h3>
          <CreateUser userType="mentor" />

          <h3>Approved Projects</h3>
          {projects.length === 0 ? (
              <p>No approved projects available.</p>
          ) : (
              projects.map((project) => (
                  <div key={project._id}>
                      <h4>{project.projectName}</h4>
                      <p>{project.projectDescription}</p>
                  </div>
              ))
          )}

          <h3>Waiting List Projects</h3>
          {waitingList.length === 0 ? (
              <p>No projects in the waiting list.</p>
          ) : (
              waitingList.map((project) => (
                  <div key={project._id}>
                      <h4>{project.projectName}</h4>
                      <button onClick={() => handleApprove(project._id)}>Approve</button>
                      <button onClick={() => handleReject(project._id)}>Reject</button>
                  </div>
              ))
          )}
      </div>
  );
}

export default AdminDashboard;
