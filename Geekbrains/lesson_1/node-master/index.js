var beeper = require('beeper');
var TelegramBot = require('node-telegram-bot-api');
var token = '475969461:AAHcyC-_0STvRrFwLKsfBWoLSmblPY6BxCM';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;

    console.log("\x1b[36m%s\x1b[0m", "Имя: " + msg.from.first_name);
    console.log("\x1b[33m%s\x1b[0m", "Сообщение: " + msg.text);
    beeper(2);

    bot.sendMessage(chatId, "Hello! ", {caption: "I'm a bot!"});
});