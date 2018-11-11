const brain = require('brain.js');
const api = require('./controllers.js');
const { dialogflow, Image, Table, Carousel } = require('actions-on-google');

module.exports = {
    chime: async(conv, params)=>{
        const flow = dialogflow({
            debug: true,
        });
        // This is how you call your intent.
        // since we already are using app for express, i changed dialogue flows base name
        // to flow instead of app.
        flow.intent('hello', api.hello(conv, params));

    }
};

