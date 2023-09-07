'use client'
import React, { useState } from 'react';
import TaskForm from '../../components/TaskForm';


function Home() {
  const [teams] = useState(['Team A', 'Team B', 'Team C']); // Replace with your teams
  const [tasks, setTasks] = useState([]);

  const assignTask = ({ task, selectedTeam }) => {
    setTasks([...tasks, { task, selectedTeam }]);
  };

  return (
    <div className="App">
      <h1>Task Assignment</h1>
      <TaskForm teams={teams} onTaskSubmit={assignTask} />
      <div>
        <h2>Assigned Tasks:</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              Task: {t.task}, Team: {t.selectedTeam}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
