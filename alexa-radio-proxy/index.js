const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const streamUrl = 'https://azura2.cmaudiovideo.com:8040/radio.mp3';
  req.pipe(request(streamUrl)).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy rodando na porta ${port}`);
});
