const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { WebhookClient } = require('dialogflow-fulfillment');
const chime = require('../controllers/chime.js');

module.exports ={

    html: async(app)=>{
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('/', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    chime: async(app)=>{
        app.use(bodyParser.json());

        app.get('/chime', (req, res)=>{
            res.send('hello from chime')
        });


        app.post('/chime', (req, res) =>{ chime.chime(req, res) });
    }
};


