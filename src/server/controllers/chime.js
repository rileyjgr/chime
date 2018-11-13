const Feedback = require('../models/feedback');
const Event = require('../models/event');

module.exports = {
    feedback: async(request)=>{

        const message = request.queryText;
        const newFeedback = new Feedback({message});
        await newFeedback.save();

        console.log('new feedback made');
    },
    event: async(request)=>{
        console.log(request);
        const {event, date, time, people} = request.parameters;
        const newEvent = new Event({event, date, time, people});

        await newEvent.save();


    }
};

