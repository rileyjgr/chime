const brain = require('brain.js');


module.exports = {
    chime: async(req, res)=>{
        console.log(req);
        // each action will be a case in a switch statement.
        // each action is an intent.
        // we can add entities to each intent, to get data from the user such as their slack name.
        // we can then store this stuff in a database (in our case mongodb).
        if (req.body.result.action === 'hello') {
            // we will do all of our api calls to controllers.js here.

            // then await for our response.
            await res.json({
                speech: 'surprise',
                displayText: 'Hi!',
                source: 'hi'
            });
        }
    }
};

