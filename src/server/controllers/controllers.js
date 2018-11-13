const chime = require('./chime');
const flow = require('../dialogueflow.config');

module.exports = {
    switch: async(intent, request, res)=>{
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
                chime.hello(request, res);
                //code in here
                res.json(flow.responseConfig);
                break;
            case 'Feedback':
                console.log('hit intent'+ intent);
                chime.feedback(request, res);
                break;
            case 'Event':
                console.log('hit intent: '+ intent);
                chime.event(request, res);
                break;
            case 'SignUp':
                chime.signUp(request, res);
                break;
            case 'getPersonalInfo':
                chime.getInfo(request, res);
                break;
        }
    }
};
