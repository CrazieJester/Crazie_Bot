var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var numPings = 0;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            case 'max':
                numPings += 1;
                bot.sendMessage({
                    to: channelID,
                    message: '<@86520168481591296> has been pinged ' + numPings + ' time(s).'
                });
                break;

            case 'pobar':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/913/355/b37.png'
                });
                break;

            case 'xero':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/7ipEuOI.jpg'
                });
                break;    

            case 'gimpy':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://gfycat.com/ThoseZanyDeviltasmanian'
                });
                break;    

            case 'vape':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/8iuAx8g.jpg'
                });
                break;   

            case 'viancri':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/993/875/084.png'
                });
                break;   

            case 'pelican':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.pinimg.com/736x/45/ca/53/45ca536f5dfaff18274d00b75e73d48c--james-park-james-darcy.jpg'
                });
                break;   

            case 'nyte':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://ih0.redbubble.net/image.366018492.7877/flat,800x800,070,f.u1.jpg'
                });
                break;   

            case 'makentz':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/a/UboMD'
                });
                break;  
            // Just add any case commands if you want to..
         }
     }
});