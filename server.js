"use strict" 

const express = require('express'); 

var app = express(); 
app.use(express.static('dist')); 
let port = process.env.PORT || 3005; 

app.set('port', port); 
console.log('directory', __dirname); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
}); 
const server = app.listen(port, () => {
    console.log('Listening on' + port); 
}); 