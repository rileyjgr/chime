const Feedback = require('../models/feedback');

module.exports = {
    feedback: async(request)=>{

        const message = request.queryText;
        const newFeedback = new Feedback({message});
        await newFeedback.save();

        console.log('new feedback made');
    },
    event: async(request)=>{
        console.log(request);

    }
};

