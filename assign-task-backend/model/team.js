const mongoose = require('mongoose');

// Define the schema
const teamSchema = new mongoose.Schema({
  name: String,
  members:  [String]
});

module.exports =
  mongoose.models.Team || mongoose.model("Team", teamSchema);


