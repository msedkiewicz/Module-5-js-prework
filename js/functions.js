function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printMessageComputer(msgC){
	let spanC = document.createElement('span');
	spanC.innerHTML = msgC;
	document.getElementById('computer-result').appendChild(spanC);
}
function clearMessagesComputer(){
	document.getElementById('computer-result').innerHTML = '';
}

function printMessageHuman(msgH){
	let spanH = document.createElement('span');
	spanH.innerHTML = msgH;
	document.getElementById('human-result').appendChild(spanH);
}
function clearMessagesHuman(){
	document.getElementById('human-result').innerHTML = '';
}