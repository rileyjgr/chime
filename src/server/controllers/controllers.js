const User = require('../models/user');

module.exports = {
    // we can add entities to each intent, to get data from the user such as their slack name.
    // we can then store this stuff in a database (in our case mongodb).

    hello: async(request,res)=>{

        // example res of what we send back to user
        await res.json({
            speech: 'surprise',
            displayText: 'Hi!',
            source: 'hi'
        });
    },

    calender: async(request, res)=>{
        // Your code up here

        await res.json({
           // your response here
        });
    },

    // logic for user sign up...

    signUp: async(request, res)=>{
        const user = request.body.name; // or whatever it is...
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

                const newUser = new User({name, title, company});

                await newUser.save();

                // not sure how we call their name here..
                res.json({
                    speech: 'Welcome %name%',
                    displayText: 'Welcome %name%',
                    source: 'user'
                });
                break;
        }

    }
};
