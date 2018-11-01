const botKit = require('botkit');
const controller = botKit.anywhere(configuration);


module.exports = {
    bot: async(req, res, next)=> {
        controller.hears('hello','direct_message', function(bot, message) {
            bot.reply(message,'Hello yourself!');
        })
    }
};

