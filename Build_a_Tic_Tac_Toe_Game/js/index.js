var myarr = [], arrX = [], arrO = [], user = 'user', ai = 'ai', alertOnce = 0;
var winNum = [	[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

var reset = function() {
	myarr = [], arrX = [], arrO = [];
	$(".cell").each(function() {
		$(this).html('');	
	});
	bindButton();
}

var win = function(w) {
	setTimeout(function(){
		reset();
		alert(w+' winner!!!        play again?');
		if(alertOnce === 0){
			alert('LETS PLAY GLOBAL THERMONUCLEAR WAR, OK?');
			alertOnce = 1;
		}
	}, 800);
}

var checkWin = function(someArr, w) {
	var c = [];
	if(myarr.length < 9) {
		for(k=0; k<8; k++){
			for(i=0; i<3; i++) {
				for(j=0; j<someArr.length; j++) {
					if(winNum[k][i] === someArr[j]) {
						c.push(winNum[k][i]);
						if(c.length === 3) {
							return win(w);
						} 	
					}	
				}	
			}	
			var c = [];
		}
		if(w === 'user') {
			setTimeout(function(){
				aiTurn();
			}, 500);
		}
	} else {
		reset();
		alert('tie');
	}
}

var aiTurn = function() {
	var num = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
	var last = myarr[(myarr.length-1)];
	if(myarr.indexOf(num) > -1){
		if(myarr.length < 9){
			aiTurn();
		}
	} else {
		var aiMove = '#'+num
		myarr.push(num);
		arrO.push(num);
		$(aiMove).append('O');
		checkWin(arrO, ai);
	}
}

// onclick stuff
function bindButton() {
	$(".cell").unbind('click').one("click", function() {
		$(this).append('X');
		myarr.push(Number(this.id));
		arrX.push(Number(this.id));
		checkWin(arrX, user);

	});
}
bindButton();