"use strict" 

const express = require('express'); 
const path = require('path');
var app = express(); 
app.use(express.static('dist')); 
let port = process.env.PORT || 3005; 

app.set('port', port); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
}); 
const server = app.listen(port, () => {
    console.log('Listening on' + port); 
}); 