const Feedback = require('../models/feedback');

module.exports = {
    feedback: async(req, res)=>{
        await Feedback.find({}, (err, feeds)=>{
            console.log(feeds);
            let api = {};
            feeds.forEach((feed)=>{
                api[feed.message] = feedback;
            });
           res.json(api);
        });
        next();
    },
    login: async(req, res)=>{

    },
    signup: async(req, res)=>{
        
    }
}