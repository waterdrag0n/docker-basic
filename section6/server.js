const express = require('express');
const redis = require('redis');

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const app = express();

client.set('number', 0);

app.get('/', (req, res) => {
  client.get('number', (err, number) => {
    res.send('숫자: ' + number);
    client.set('number', Number(number) + 1);
  });
});

app.listen(8080, () => console.log('server running!'));
