const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const path = require('path');
const Routes = require('./routes');

const app = express();
const server = http.createServer(app);

server.timeout = 0; // set server timeout to infinity.


app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.resolve(__dirname, '../public/')));
app.get('/', (res, req) => res.sendFile("../public/index.html"));

app.use('/api', new Routes());

server.listen(3000, (err) => {
  if (err) console.log('Error while starting server!!', err);
  else console.log('Server started and listening on Port:', 3000);
});

process.on('unhandledRejection', (reason) => {
  console.log('unhandledRejection....', reason);
});