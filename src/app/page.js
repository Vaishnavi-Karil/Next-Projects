'use client'
import React, { useState , useEffect} from 'react';
import TaskForm from '../../components/TaskForm';


function Home() {
  const [teams] = useState(['Team A', 'Team B', 'Team C']); // Replace with your teams
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/assigned-tasks');
        if (response.ok) {
          const jsonData = await response.json();
          setTasks(jsonData);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

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
