var playerList = [
'drew-doughty-8474563',
'derek-forbort-8475762',
'kevin-gravel-8475857',
'paul-ladue-8476983',
'alec-martinez-8474166',
'jake-muzzin-8474162'];
//left handed = 0, right handed = 1
var answerList = [1,0,0,1,0,0];
var index = 0;
var displayImage = document.getElementById('images');
var displayName = document.getElementById('names');
var userScore = 0;
var finalScore = 0;
var guess = -1;

function buildImage() {
	// alert(getName(index));
	finalScore = userScore;
	userScore = 0;
	getRandomIndex();
	document.getElementById("score").innerHTML = userScore;
	document.getElementById("images").src = getImage(index);
	document.getElementById("names").innerHTML = getName(index);
/*
	var img = document.createElement('img');
	img.src = playerImg[index];
	var name = document.createTextNode(playerName[index]);
	document.getElementById('content').appendChild(img);
*/
}

function changeImage(){
	getRandomIndex();
	document.getElementById("images").src = getImage(index);
	document.getElementById("names").innerHTML = getName(index);
	// document.getElementById("score").innerHTML = userScore;
}

// stuff = 'alec-martinez-8474166'
function textEdit(stuff){
	var output = stuff.replace(/-/g, " ");
	//output = output.replace(/[^0-9]/g, '');
	//output = output.slice(null, -7);
	return output;
}

function getName(number){
	var name = textEdit(playerList[number]);
	return name;
}

// link = 'alec-martinez-8474166'
function getImage(number){
	var link = playerList[number];
	link = 'https://www.nhl.com/player/' + link + '@2x.jpg';
	// link = 'https://www.nhl.com/player/' + 
	return link;
}


function addScore(){
	userScore = userScore + 1;
	document.getElementById("score").innerHTML = userScore;
}

function myFunctionLeft(){
	guess = 0;
	if(guess === playerAnswer[index]){
		changeImage();
		addScore();
	}
	else{
		finalScore = userScore;
		location.assign("game_over.html");
		document.getElementById("score").innerHTML = userScore;
		// alert("lose page in progress... but you lost");
		// userScore = 0;
	}
}

function myFunctionRight(){
	guess = 1;
	if(guess === playerAnswer[index]){	
		changeImage();
		addScore();
	}
	else{
		finalScore = userScore;
		location.assign("game_over.html");
		document.getElementById("score").innerHTML = userScore;
		// alert("lose page in progress... but you lost");
		// userScore = 0;
	}
}

function getRandomIndex(){
	//var x = Math.floor(Math.random() * ideaList.length);
	//x = Math.floor(Math.random() * ideaList.length);
	// alert("success");
	index = Math.floor(Math.random() * playerList.length);
}