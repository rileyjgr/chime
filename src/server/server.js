const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');

const app = express();

const port = process.env.PORT || 3000;
const mongoConnect = process.env.MONGODB_URI || 'mongodb://localhost:27017/chime';

mongoose.connect(mongoConnect).then(function(error) {
    if (error) {
        console.log(error);
    }
});

const db = mongoose.connection;
Schema = mongoose.Schema;


db.on("error", console.error.bind(console, "connection error:"));

db.once('open', function(){
    routes.html(app);
    routes.chime(app);
    app.listen(port);
});

console.log('Listening...');
