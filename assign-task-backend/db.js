require("dotenv").config();
const mongoose = require("mongoose");

// const MONGO_DB =
//   "mongodb://127.0.0.1:27017/nextmernjwttemplate" || "mongodb+srv://vaishnavigkaril:eUhj6Kspgeaxf6JE@team-pro.qkcqo7v.mongodb.net/team-pro?retryWrites=true&w=majority";

  
const MONGO_DB =
 "mongodb+srv://vaishnavigkaril:eUhj6Kspgeaxf6JE@team-pro.qkcqo7v.mongodb.net/team-pro?retryWrites=true&w=majority" || "mongodb://127.0.0.1:27017/nextmernjwttemplate";
const db = async () => {
  try {
    await mongoose.connect(MONGO_DB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;