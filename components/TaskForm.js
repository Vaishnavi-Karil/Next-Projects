import React, { useState } from 'react';

function TaskForm({ teams, onTaskSubmit }) {
  const [task, setTask] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleSubmit = () => {
    if (task.trim() && selectedTeam) {
      onTaskSubmit({ task, selectedTeam });
      setTask('');
    }
  };

  return (
    <div>
        
      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task description"
      />
      <br/>
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="" disabled>
          Select Team
        </option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      <br/>
      <br/>
      <button onClick={handleSubmit}>Assign Task</button>
    </div>
  );
}

export default TaskForm;
