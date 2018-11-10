const brain = require('brain.js');
const api = require('./controllers.js');


module.exports = {
    chime: async(req, res)=>{
        console.log(req);
        const action = req.body.result.action;
        const request = req.body;
        // not sure if this is correct or not
        const user = req.body.result.name;
        // each action will be a case in a switch statement.
        // each action is an intent.

        switch(action){
            case 'hello':
                api.hello(request, res);
                break;
            case 'calender':
               api.calender(request, res);
               break;
            case '':
                break;

        }
    }
};

