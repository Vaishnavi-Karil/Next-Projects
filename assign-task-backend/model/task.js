const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
  task: String, 
  team: String,
  assignedMember : String
});


module.exports =
  mongoose.models.Task || mongoose.model("Task", taskSchema);
