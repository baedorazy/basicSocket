const config = require('dotenv').config().parsed;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3005; // env 3004
const router = require('./router/main')(app);

if(process.env.NODE_ENV === 'development') {
	// development setting
} else {
	// local setting
}

server.listen(port, () => {
  console.log('Server listening at port %d!', port);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.on('new-event', (data) => {
      console.log('someting emit newEvent', data);
  });

  socket.on('disconnect', () => {
      console.log(io.sockets.adapter.rooms);
  });
});

