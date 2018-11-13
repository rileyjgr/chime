const Feedback = require('../models/feedback');

module.exports = {
    feedback: async(request)=>{
        await Feedback.save(request);
        console.log('new feedback made');
    },

};

