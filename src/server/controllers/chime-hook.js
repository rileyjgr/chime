const Feedback = require('../models/feedback');
const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
    hello: async(agent)=>{
        agent.add('Hello THERE WE WORK BUDDY.')
    },
    event: async(agent)=>{
        agent.add('events hit');
    },
    feedback: async(agent)=>{
        agent.add('feedback hit');
    },
    getInfo: async(agent)=>{
        agent.add('get info hit');
    }
};