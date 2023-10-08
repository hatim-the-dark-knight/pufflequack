import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const bot = new Telegraf("6603170388:AAFOgVDjefLYiha8q1igeMQmecWXrFsV7F8")

bot.command('quit', async (ctx) => {
  // Using context shortcut
  await ctx.leaveChat()
})

bot.on(message('text'), async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Welcome! Book your table now and savor a delightful dining experience with easydineouts!`, {
    reply_markup: {
        inline_keyboard: [[{ text: "Book Table", web_app: {url: "https://hatim-the-dark-knight.github.io/pufflequack/"}}]]
    }
  })
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))