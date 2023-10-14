const express = require('express'); 
const { createTeam, getTeam } = require('../controller/teamController');

const router = express.Router(); 

router.get('/', getTeam ); 

router.post('/', createTeam);

module.exports = router;