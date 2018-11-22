const io = require('socket.io-client')('http://localhost:8080');

// , {
// 	path: '/',
// 	serveClient: false,
// 	pingInterval: 10000,
// 	pingTimeout: 5000,
// 	cookie: false
// 	// secure: true
// });

io.on('connect', (socket) => {
	console.log('connection established...' + socket);
})
