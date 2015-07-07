var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var app = express();
require("./jobs-service.js")(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

jobsData.connectDB('mongodb://localhost/jobfinder')
//jobsData.connectDB('mongodb://rick:onelegged1@ds061208.mongolab.com:61208/jobfinder')
    .then(jobsData.seedJobs)
    .then(function() {
        console.log('connected to mongod succesfully!') ;
        jobModel;
    });

app.listen(process.env.PORT, process.env.IP);

