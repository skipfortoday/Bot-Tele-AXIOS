const TelegramBot = require("node-telegram-bot-api");
const token = "1843056931:AAFO7mDJpXKno-IV6LCeNoQTcayHhW1xWqA";
const bot = new TelegramBot(token, { polling: true });
const axios = require('axios').default;


bot.on("message", function name(message) {
  bot.sendMessage(message.chat.id, "Halo saya Simple Telegram Bot!");
});


bot.onText(/\/news/, (msg)=>{
axios.get('https://developers.coinmarketcal.com/v1/events', { headers : {
  'x-api-key': 'mg3czw2p4J9X3M4ygmctn19yeg9hMWtu8sftMGLY' 
}})
  .then(function (response) {
    // handle success
    console.log(response.data.body[0]);
    bot.sendMessage(msg.chat.id, `Judul Berita : ${response.data.body[0].title.en} , Coin :  ${response.data.body[0].coins[0].fullname}, Tanggal Event : ${response.data.body[0].date_event}, Sumber : ${response.data.body[0].source}`, {
      reply_to_message_id: msg.message_id,
   });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});

