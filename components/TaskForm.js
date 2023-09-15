import React, { useState , useEffect} from 'react';

function TaskForm({ teams , fetchData}) {
  const [task, setTask] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');


  async function submitForm(e) {
     e.preventDefault();
    try {

      const data = {
        task : task , 
        team : selectedTeam
      }

      console.log('data', data);
      const response = await fetch('http://localhost:5000/assign-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Data sent successfully');
        // Optionally, you can handle success here or redirect to another page.
        fetchData();
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  
  return (
    <div>
      <form onSubmit={submitForm}>
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
        <Team teams = {teams}/>
      </select>
      <br/>
      <br/>
      <button>Assign Task</button>
      </form>  
    </div>
  );
}

const Team = ({teams}) => {
  return (
    <>
      {teams.map((team) => {
        const {name, _id} = team;
        return (
          <option key={_id} value={name}>
            {name}
          </option>
        );
      })}
    </>
  );
};
// onClick={handleSubmit}

export default TaskForm;
