const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
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
        const urlencodedParser = bodyParser.urlencoded({ extended: false });
        const parseJson = bodyParser.json();

        app.get('/chime', (req, res)=>{
            res.send('hello from chime')
        });


        app.post('/chime', urlencodedParser, (req, res) =>{

            const json = {
                name :   req.body.userName,
                message:  req.body.message,
                topicId : req.body.topicId,
            };

            const options = {
                url: 'https://fa077316.ngrok.io/chime',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key' : 'API-key'
                },
                json:json
            };
            request(options, (err, res, body)=>{
                if (res && (res.statusCode === 200 || res.statusCode === 201)) {
                    console.log("response is ==>");
                    console.log(res);
                    chime.chime(req, res);
                }
                else {
                    console.log("error is "+ err + " = and response code is ="+ res.statusCode );
                }
            });
            return res;
        });
    }
};


