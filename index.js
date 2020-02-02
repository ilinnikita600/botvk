const vk = require('node-vk-bot-api'); // Подключение либы
const fs = require('fs'); // эту можно не использовать, но пригодится потом

const bot = new VkBot(process.env.cd8283eab96cc3c148d8dec9edcbba2ae30a4bea183976ce2410436674d14e0a88a94c74a84dcdcefc865);// сюда наш токен вместо TOKEN

bot.startPolling(() => { // Это запускает нашего бота
    console.log('[BOT] Бот успешно запущен!'); // Лог - запустился или нет
});

// думаю стоит начать с bot command, bot command - если в двух словах, то он регает команду, которая будет отвечать на сообщение

bot.command('Hello', (ctx) => {
    ctx.reply(`Hi man`) // То есть, если мы напишем боту Hello, то он нам ответит hi
});

bot.command('+peer', (ctx) => {
    ctx.reply('Peer ID -  ${ctx.message.peer_id}') // тут уже есть api, его можно найти в вк девелоперс
// ${ТАК ЗАПИСЫВАЮТ ПЕРЕМЕННЫЕ}, но можно по другому
}); 
