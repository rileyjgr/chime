const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const chime = require('../controllers/chime.js');

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
        const urlencodedParser = bodyParser.urlencoded({ extended: false });
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


            switch(intent){
                default:
                    const google = 'test';
                    const slack = 'test';
                    const def = 'test';
                    flow.googleResponse = google.toString();
                    flow.slackResponse = slack.toString();
                    flow.defaultText = def.toString();
                    res.json(flow.responseConfig);
                    break;
                case 'Hello':
                    console.log('hit intent:'+ intent);
                    //code in here
                    res.json(flow.responseConfig);
                    break;
                case 'Feedback':
                    console.log('hit intent'+ intent);
                    chime.feedback(request);
            }

        });
    }
};


