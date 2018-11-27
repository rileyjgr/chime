const Feedback = require('../models/feedback');
const User = require('../models/user');

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
        console.log(req.body);

        const {user, password} = req.body;

        const foundUser = await User.findOne({user, password});

        if(foundUser){
            res.json({user: 'logged in'});
        } else {
            res.json({error: 'Your Username or password is incorrect'});
        }
         
    },
    signup: async(req, res)=>{
        const {user, email, password, name} = req.body;

        const foundUser = await User.findOne({user});

        if(foundUser){
            return res.json({error: 'user already exists'});
        } else {
            const newUser = new User({user, email, password, name});
            await newUser.save();
            return res.json({user: 'Signed Up'})
        }
    }
}