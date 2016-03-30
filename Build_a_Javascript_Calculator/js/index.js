

function nButton(id, n) {
	var doBtn = document.getElementById(id).addEventListener("click", 
		function() {
			return document.getElementById("display").innerHTML += n;
		}, false);
	return doBtn;
}

function add() {document.getElementById("display").innerHTML += "+"};
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add, false);  


nButton("one", 	1);
nButton("two", 	2);
nButton("three", 	3);
nButton("four", 	4);
nButton("five", 	5);
nButton("six", 	6);
nButton("seven", 	7);
nButton("eight", 	8);
nButton("nine", 	9);
nButton("zero", 	0);


// operators  
nButton("addBtn", 	'+');
nButton("minBtn", 	'-');
nButton("divBtn", 	'/');
nButton("multiBtn", 	'*');

// clear
function cl() {
	document.getElementById("display").innerHTML = "";
}

var clBtn = document.getElementById("clear");
clBtn.addEventListener("click", cl, false);

// equals
function eq() {
	var x = eval(document.getElementById("display").innerHTML);
	document.getElementById("display").innerHTML = x;
}

var eqBtn = document.getElementById("equal");
eqBtn.addEventListener("click", eq, false);


/*   old/experimental code
// operators  

function add() {document.getElementById("display").innerHTML += "+";}
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add, false);  

function min() {document.getElementById("display").innerHTML += "-";}
var minBtn = document.getElementById("minBtn");
minBtn.addEventListener("click", min, false);

function div() {document.getElementById("display").innerHTML += "/";}
var divBtn = document.getElementById("divBtn");
divBtn.addEventListener("click", div, false);

function multi() {document.getElementById("display").innerHTML += "*";}
var multiBtn = document.getElementById("multiBtn");
multiBtn.addEventListener("click", multi, false);

// equals


var btn[] = {
	nButton("one", 1),
	nButton("two", 2)
}
var btn = [];

btn[1] = nButton("one", 1);
btn[2] = nButton("two", 2);
btn[3] = nButton("three", 3);
btn[4] = nButton("four", 4);
btn[5] = nButton("five", 5);
btn[6] = nButton("six", 6);
btn[7] = nButton("seven", 7);
btn[8] = nButton("eight", 8);
btn[9] = nButton("nine", 9);
btn[0] = nButton("zero", 0);


*/  //old/experimental code