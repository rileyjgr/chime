const brain = require('brain.js');
const api = require('./controllers.js');
const util = require('util')
const { dialogflow, Image, Table, Carousel } = require('actions-on-google');

module.exports = {
    chime: async(req, res)=>{
        console.log(`post/${util.inspect(req,false,null)}`);
        // const request = req.body.result;
        // const intent = req.body.arguments.rawText;
        //
        // switch(intent){
        //     case 'hello':
        //         console.log(req);
        //         api.hello(request, res);
        // }
        return res;
    }



};

