const Event = require('../models/event');
const User = require('../models/user');
const Feedback = require('../models/feedback');
const googleapis = require('./google-apis')
module.exports = {
    
    hello: async(agent)=>{
        agent.add('Hello.')
    },
    // Create Event Intent
    event: async(agent)=>{
        // this is how you get parameters
        console.log(agent.parameters);

        const user = agent.userId;
        const foundUser = await User.findOne({user});

        switch(foundUser){
            case true:
                console.log(foundUser);
                agent.add('user found, events hit')
                break;
            case false:
                // const token = await googleapis.getToken(user);

                // const newUser = new User({user, token});
                // await newUser.save();
                agent.add('no user found, events hit')
        }
        
    },

    // Get Calendar Info
    getInfo: async(agent)=>{
        agent.add('get info hit');
    },
    
    feedback: async(agent)=>{
        const userFeedback = agent.parameters.feedback;
        const newFeedback = new Feedback({message: userFeedback});
        await newFeedback.save();

        agent.add('Thank you for your feedback, your feedback request was:' + newFeedback + 'this was sent to your supervisor anonymously');
    },
    
    weather: async(agent)=>{
        console.log(agent.parameters);
        const {name, city, etc} = agent.parameters;

        const weather = '';
        agent.add(weather);
    }

};