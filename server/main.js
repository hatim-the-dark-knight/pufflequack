
const { Markup, Telegraf } = require('telegraf');

const { message } = require('telegraf/filters');

const bot = new Telegraf("6603170388:AAFOgVDjefLYiha8q1igeMQmecWXrFsV7F8")

bot.start(async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Welcome! Book your table now and savor a delightful dining experience with easydineouts!`, Markup.keyboard([Markup.button.webApp("Book Table", "https://hatim-the-dark-knight.github.io/pufflequack/")]).resize(),);

})

bot.on(message, async (ctx) => {
  const data = JSON.parse(ctx.message.web_app_data.data);
  const { date, seats, time_slot } = data;
  // Reply to the user with "Your data was:"
  await ctx.reply(`Table booked for ${date} from ${time_slot} for ${seats} people. Enjoy!`);


});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))