const Feedback = require('../models/feedback');
const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
    // we can add entities to each intent, to get data from the user such as their slack name.
    // we can then store this stuff in a database (in our case mongodb).
    // signup
    signUp: async(req, res)=>{
        const user = req.body.name; // or whatever it is...
        const founderUser = await User.findOne({user});
        switch(founderUser){
            case 'true':
                res.json({
                    speech: 'Try logging in',
                    displayText: 'You already have an account.',
                    source: 'user'
                });
                break;
            case 'false':
                // this might be different.
                const {name, title, company} = req.value.body;

                const newUser = new User({name, title, company});

                await newUser.save();

                res.json({
                    speech: 'Welcome'+ name,
                    displayText: 'Welcome'+ name,
                    source: 'user'
                });
                break;
        }
    },
    hello: async(req, res)=>{
        console.log(req);
        res.json({
            speech: 'Howdy.',
            displayText: 'Howdy.',
            source: 'hello'
        })
    },
    // feedback api
    feedback: async(req, res)=>{

        const message = req.queryText;
        const newFeedback = new Feedback({message});
        await newFeedback.save();

        console.log('new feedback made');
    },
    // event api
    event: async(req, res)=>{
        console.log(req);
        const {event, date, time, people} = req.parameters;
        const newEvent = new Event({event, date, time, people});

        await newEvent.save();
    },
    // get event info api
    getInfo: async(req, res)=>{
        console.log(req);
        const { event, date, time, people } = req.parameters;
        const foundEvent = await Event.findOne({event, date, time, people});
        res.json({
            speech: 'I found an event: ' + foundEvent,
            displayText: 'I found an event: ' + foundEvent,
            source: 'getPersonalInfo'
        })
    }
};

