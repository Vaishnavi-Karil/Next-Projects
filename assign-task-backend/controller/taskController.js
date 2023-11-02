
const Task = require('../model/task');
const Team = require('../model/team');

// Define a variable to keep track of the current member index for each team
const teamMemberIndices = {};

async function getTask(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching assigned tasks:', error);
    res.status(500).json({ error: 'Failed to fetch assigned tasks' });
  }
}

async function createTask(req, res) {
  try {
    const { task, team } = req.body;
    const selectedTeam = await Team.findOne({ name: team });

    if (!selectedTeam) {
      return res.status(400).json({ error: 'Team not found' });
    }

    // Get the current member index for the team, initializing it to 0 if not set
    let currentMemberIndex = teamMemberIndices[team] || 0;

    // Get the assigned member for this task based on the current member index
    const assignedMember = selectedTeam.members[currentMemberIndex];

    // Increment the current member index and wrap around when it reaches the end
    currentMemberIndex = (currentMemberIndex + 1) % selectedTeam.members.length;

    // Update the current member index for the team
    teamMemberIndices[team] = currentMemberIndex;

    const tasks = await Task.create({ task, team, assignedMember });
    res.status(201).json({ tasks, message: 'Task assigned successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
}

module.exports = { createTask, getTask };
