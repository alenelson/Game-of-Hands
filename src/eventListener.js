window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event){
	//switch handles ship movement
	switch(event.keyCode){
		case 37:
			myFunctionLeft();
			break;
		case 39:
			myFunctionRight();
			break;
	}
}