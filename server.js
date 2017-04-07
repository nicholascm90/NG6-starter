"use strict" 
var fs = require('fs');
var express = require('express'); 

var app = express(); 
app.use(express.static('dist')); 
let port = process.env.PORT || 3005; 

app.set('port', port); 
console.log('directory', __dirname); 
fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
}); 
var server = app.listen(port, () => {
    console.log('Listening on' + port); 
}); 