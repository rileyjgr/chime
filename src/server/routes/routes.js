const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const chime = require('../controllers/chime.js');
const determineIntent = require('../controllers/controllers');

require('dotenv');
//dialogue flow request config
const flow = require('../dialogueflow.config');

module.exports ={

    html: async(app)=>{
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('/', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    chime: async(app)=>{
        const parseJson = bodyParser.json();

        app.get('/chime', (req, res)=>{
            res.send('hello from chime')
        });


        app.post('/chime', parseJson, (req, res) =>{
            // intent will always come in however you set it up on dialogue flow
            const intent = req.body.queryResult.intent.displayName;
            // params will be passed in here
            const request = req.body.queryResult;

            console.log(request);
            console.log(intent);

            determineIntent.switch(intent, request, res);
        });
    }
};


