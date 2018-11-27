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
        agent.add('feedback hit');
    },
    getInfo: async(agent)=>{
        agent.add('get info hit');
    },
    weather: async(agent)=>{
        agent.add('weather hit.');
    }
};