const express = require('express'); 
const cors = require('cors'); 
const db = require('./db');

const getAllApi = require('./router')
const app = express(); 

const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
  };
  app.use(express.json());
  app.use(cors(corsOptions));

  app.use('/', getAllApi)
 
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    db();
  });



