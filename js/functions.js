function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printMessageComputer(msgC){
	let p = document.createElement('p');
	p.innerHTML = msgC;
	document.getElementById('computer-result').appendChild(p);
}
function clearMessagesComputer(){
	document.getElementById('computer-result').innerHTML = '';
}