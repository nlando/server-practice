//Brings in express to be required
const { response } = require('express');
const express = require('express');

//Object that holds all methods for the server
const app = express();

app.get('/home', function(req, res){
    res.render('home');
});



//sets page viewing to ejs
app.set('view engine', 'ejs');

//Designate where server will bind and listen
app.listen(4000, function(){
    console.log('Live on Port 4000');
});