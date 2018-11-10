const brain = require('brain.js');


module.exports = {
    chime: async(req, res)=>{
        console.log(req);
        if (req.body.result.action === 'hello') {
            // here we will pass the stuff  to the other stuff to do cool fucking stuff.
            await res.json({
                speech: 'surprise',
                displayText: 'Hi!',
                source: 'hi'
            });
        }
    }
};

