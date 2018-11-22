var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
	// res.send('<h1>Hello World!!</h1>');
	
	res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket) => {
	console.log('a user connected...');

	socket.on('chat message', (msg) => {
		console.log('message arrived: ' + msg);
		io.emit('chat message', msg);
	})

	socket.on('disconnect', () => {
		console.log('a user disconnected...');
	})
})

http.listen(3000, () => {
	console.log('listening on *:3000');
})
