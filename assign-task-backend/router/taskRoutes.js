const express = require('express'); 
const { createTask, getTask } = require('../controller/taskController');

const router = express.Router(); 
router.post('/', createTask);
router.get('/', getTask);

module.exports = router;