const express = require('express'); 
var app = express(); 
app.use(express.static('dist')); 
app.set('port', 3005); 

app.get('/', (req, res) => {
    res.sendfile('dist/index.html'); 
}); 
let port = process.env.PORT || 3000; 
const server = app.listen(port, () => {
    console.log('Listening on' + port); 
}); 