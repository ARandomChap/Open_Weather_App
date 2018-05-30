// var http = require('http');
var request = require('request');  

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

var path = require('path');

app.use(express.static(path.join(__dirname + 'public')));

const cors = require('cors')
app.use(cors())

var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var APIKEY = '&APPID=cbb9f01bcf0dd0087bc9a777aa7d7cd3';
var metric = '&units=metric';
var imperial = '&units=imperial';
var loc;


app.post('/weatherMetric', function(req, res) {
	
    loc = req.body.location;
    
    var tempURL = url+loc+APIKEY+metric;     
    
    // console.log(tempURL);
   
    request(tempURL, function(error, response, body){
        res.send(body);
        console.log(body);
    });
    
});

app.post('/weatherImperial', function(req, res) {
	
    loc = req.body.location;
    
    var tempURL = url+loc+APIKEY+imperial;     
    
    // console.log(tempURL);
   
    request(tempURL, function(error, response, body){
        res.send(body);
        console.log(body);
    });
    
});

app.listen(8081, function () {
console.log("Listening on port 8081");
})
