const { Markup, Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf("6349591425:AAHbIeQI_qjuPxO1FOHPoluO6WAkqGDRJ3k")

bot.start(async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Welcome! Book your table now and savor a delightful dining experience with easydineouts!`, Markup.keyboard([Markup.button.webApp("Book Table", "https://hatim-the-dark-knight.github.io/pufflequack/")]).resize(),);

})

bot.on(message, async (ctx) => {
  const data = JSON.parse(ctx.message.web_app_data.data);
  const { date, seats, time_slot } = data;
  console.log(date, seats, time_slot);
  await ctx.reply(`Your imaginary table is booked. Enjoy!`);
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))