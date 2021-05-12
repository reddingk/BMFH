const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const http = require('http').Server(app);

// set ports
var port = process.env.PORT || 1001;

// parse application/json
app.use(bodyParser.json());

// Set Cors Header
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Point static path to dist
app.use(express.static(path.join(__dirname, 'build')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build','index.html'));
});
  
http.listen(port, function(){
    console.log('Application is open on port ' + port);
});