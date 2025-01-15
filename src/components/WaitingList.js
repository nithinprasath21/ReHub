import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WaitingList() {
  const [waitingList, setWaitingList] = useState([]);

  useEffect(() => {
      fetchWaitingList();
  }, []);

  const fetchWaitingList = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/waitinglist'); // Fetch from waiting list endpoint
          setWaitingList(response.data);
      } catch (error) {
          console.error("Error fetching waiting list:", error);
      }
  };

  const handleApprove = async (id) => {
      try {
          await axios.post(`http://localhost:5000/api/projects/approve/${id}`);
          fetchWaitingList(); // Refresh waiting list after approval
      } catch (error) {
          console.error("Error approving project:", error);
      }
  };

  return (
      <div>
          <h2>Waiting List</h2>
          <button onClick={() => window.history.back()}>Back to Dashboard</button>
          {waitingList.length === 0 ? (
              <p>No projects in the waiting list.</p>
          ) : (
              waitingList.map((project) => (
                  <div key={project._id}>
                      <h3>{project.projectName}</h3>
                      <p>{project.projectDescription}</p>
                      <p>Submitted by: {project.studentName}</p>
                      <p>Email: {project.collegeEmail}</p>
                      <a href={`http://localhost:5000/${project.ppt}`} target="_blank" rel="noopener noreferrer">Download PPT</a>
                      <button onClick={() => handleApprove(project._id)}>Approve</button>
                  </div>
              ))
          )}
      </div>
  );
}

export default WaitingList;
