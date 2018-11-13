const chime = require('./chime');
const flow = require('../dialogueflow.config');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');


module.exports = {
    switch: async(intent, req, res)=>{
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
                chime.hello(req, res);
                //code in here
                res.json(flow.responseConfig);
                break;
            case 'Feedback':
                console.log('hit intent'+ intent);
                chime.feedback(req, res);
                break;
            case 'Event':
                console.log('hit intent: '+ intent);
                chime.event(req, res);
                break;
            case 'SignUp':
                chime.signUp(req, res);
                break;
            case 'getPersonalInfo':
                chime.getInfo(req, res);
                break;
        }
    }
};
