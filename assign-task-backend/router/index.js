const express = require('express'); 

const router = express.Router(); 

const  taskRoutes = require('./taskRoutes');

const teamRoutes = require('./teamRoutes');

router.use('/assign-task',  taskRoutes ); 
router.use('/create-team',  teamRoutes ); 

module.exports = router;
