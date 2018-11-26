const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fulfillment = require('../controllers/dialogflowcontroller');
const appcontrollers = require('../controllers/appcontrollers');

require('dotenv');

module.exports ={
    html: async(app)=>{
        app.get('/api/feedback', (req, res)=> {
            appcontrollers.feedback(req, res);
        });
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    chime: async(app)=>{
        const parseJson = bodyParser.json();
        app.get('/chime', (req, res)=>{
            res.send('hello from chime')
        });
        app.post('/chime', parseJson, (request, response) =>{
            fulfillment.dialogflowFirebaseFulFillment(request, response);
        });
    }
};


