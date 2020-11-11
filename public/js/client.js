console.log('paramURL: 'url);
const socket = io(url, {transports: [ 'websocket' ]});

let ul = document.querySelector("#UL");
ul.addEventListener('click', (e) => {
	e.stopPropagation();	
	if (e.target && e.target.tagName == 'BUTTON') {
			let i = e.target.getAttribute('data-index');
			let callMsg = {
				username: `nick-pepelo_${parseInt(i)+1}`,
				message: 'event call'
			};

			socket.emit('new-event', callMsg);
			console.log("socekt new-event emit content ", callMsg); 
		}
});

