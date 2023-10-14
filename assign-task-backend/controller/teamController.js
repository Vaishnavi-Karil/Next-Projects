const Team = require("../model/team");

async function getTeam(req, res) {
  try {
    const team = await Team.find({});
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
}

async function createTeam(req, res) {
  try {
    const team = await Team.create(req.body)
    res.status(201).json({
      team
    });
  } catch (error) {
    console.log('POST /create-team', error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
}

module.exports = { getTeam, createTeam };
