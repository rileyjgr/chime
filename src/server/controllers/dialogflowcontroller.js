'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const chime = require('./chime-hook');

exports.dialogflowFirebaseFulFillment = functions.https.onRequest((request, response)=>{
    const agent = new WebhookClient({request, response});

    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    let intentMap = new Map();

    intentMap.set('Hello', chime.hello);
    intentMap.set('Feedback', chime.feedback);
    intentMap.set('Event',chime.event);
    intentMap.set('getPersonalInfo',chime.getInfo);

    agent.handleRequest(intentMap);

});