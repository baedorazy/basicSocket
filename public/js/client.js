const socket = io('localhost:3004', {transports: [ 'websocket' ]});
const btnEvent = document.querySelector('#btnEvent');

btnEvent.addEventListener('click', () => {
	let callMsg = ({
		username: 'nick-pepelo',
		message: 'event call'
	});

	socket.emit('new-event', callMsg);
	console.log("socekt new-event emit content ", callMsg); 
});

