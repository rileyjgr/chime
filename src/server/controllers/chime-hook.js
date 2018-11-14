const Event = require('../models/event');
const User = require('../models/user');
const Feedback = require('../models/feedback');

module.exports = {
    
    hello: async(agent)=>{
        agent.add('Hello THERE WE WORK BUDDY.')
    },
    
    event: async(agent)=>{
        // this is how you get parameters
        console.log(agent.parameters);
        agent.add('events hit');
    },
    
    feedback: async(agent)=>{
        const userFeedback = agent.parameters.feedback;
        const newFeedback = new Feedback({message: userFeedback});
        await newFeedback.save();

        agent.add('Thank you for your feedback, your feedback request was:' + newFeedback + 'this was sent to your supervisor anonymously');
    },
    
    getInfo: async(agent)=>{
        agent.add('get info hit');
    },
    
    weather: async(agent)=>{
        console.log(agent.parameters);
        const {name, city, etc} = agent.parameters;

        const weather = '';
        agent.add(weather);
    }

};