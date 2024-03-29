'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const chime = require('./chime-hook');
const music = require('./galiboo-hook');

require('dotenv').config();

exports.dialogflowFirebaseFulFillment = functions.https.onRequest((request, response)=>{
    const agent = new WebhookClient({request, response});
    let intentMap = new Map();

    intentMap.set('Hello', chime.hello);
    intentMap.set('Feedback', chime.feedback);
    intentMap.set('Event', chime.event);
    intentMap.set('getPersonalInfo',chime.getInfo);
    intentMap.set('weather', chime.weather);
    intentMap.set('News', chime.News);
    intentMap.set('Music', music.music);

    
    agent.handleRequest(intentMap);

});