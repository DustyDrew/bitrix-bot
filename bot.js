const express = require('express');
const app = express();
app.use(express.json({ limit: '10mb' }));

app.post('/bot.js', (req, res) => {
const event = req.body.event;
const data = req.body.data;

console.log('Получено событие:', event);

if (event === 'message.new') {
    const message = data.message;
    console.log('Новое сообщение:', message.text);
    // Ответить в чат
    fetch('https://fdm76.bitrix24.ru/rest/4489/evcj82soys65ao2y/message.send', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
        chat_id: data.chat_id,
        message: 'Бот получил сообщение: ' + message.text
     })
    });
}

res.status(200).send('OK');
});

app.listen(3000, () => {
console.log('Бот запущен на http://localhost:3000/bot.js');
});