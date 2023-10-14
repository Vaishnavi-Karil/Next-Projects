"use client";
import React, { useState, useEffect } from "react";
import TaskForm from "../../components/TaskForm";

function Home() {
  const [teams, setTeams] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    fetchData();
  }, []);
  async function fetchData() {
    try {
 
      const response = await fetch("http://localhost:5000/assign-task");
      if (response.ok) {
        const jsonData = await response.json();
        setTasks(jsonData);
      } else {
        console.error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch("http://localhost:5000/create-team");
        if (response.ok) {
          const jsonData = await response.json();
          setTeams(jsonData);
        } else {
          console.error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <div className="App">
      <h1>Task Assignment</h1>
      <TaskForm teams={teams} fetchData={fetchData} />
      <div>
        <h2>Assigned Tasks:</h2>

        {tasks.map((t, index) => (
          <div key={index} style ={{marginBottom: '1rem', border: '1px solid grey', borderRadius: '20px', padding: '0rem 0.8rem'}}>
            <p> Task: {t.task}</p>
            <p> Team: {t.team}</p>
            <p>Assigned Member : {t.assignedMember}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
