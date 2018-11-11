const brain = require('brain.js');
const api = require('./controllers.js');
const { dialogflow, Image, Table, Carousel } = require('actions-on-google');

module.exports = {
    chime: async(req, res)=>{
        console.log(req);
        const request = req.body.result;
        const intent = req.body.arguments.rawText;

        switch(intent){
            case 'hello':
                api.hello(request, res);
        }
    }



};

