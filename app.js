const express = require('express'); 

const app = express(); 

const port = 8000;

app.use(express.json()); 

app.get('/', function(req, res){
    res.status(200).json({
        message : "Welcome to REST API's Development field"
    })
})

app.listen(port, function(){
    console.log(`server is listening on http://localhost:${port}`)
})

