import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetchProjects();
  }, []);

  const fetchProjects = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/projects'); // Fetch from approved projects endpoint
          setProjects(response.data);
      } catch (error) {
          console.error("Error fetching approved projects:", error);
      }
  };

  return (
      <div>
          <h2>Approved Projects</h2>
          <button onClick={() => window.history.back()}>Back to Dashboard</button>
          {projects.length === 0 ? (
              <p>No approved projects available.</p>
          ) : (
              projects.map((project) => (
                  <div key={project._id}>
                      <h3>{project.projectName}</h3>
                      <p>{project.projectDescription}</p>
                      <p>Submitted by: {project.studentName}</p>
                      <p>Email: {project.collegeEmail}</p>
                      <a href={`http://localhost:5000/${project.ppt}`} target="_blank" rel="noopener noreferrer">Download PPT</a>
                  </div>
              ))
          )}
      </div>
  );
}

export default ViewProjects;
