const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fulfillment = require('../controllers/dialogflowcontroller');

require('dotenv');

module.exports ={
    html: async(app)=>{
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


