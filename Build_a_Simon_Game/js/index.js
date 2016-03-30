$(function() {
	var myArray = [];
	var aiArray = [];
	var aiChoice = 0;

	function playing() {

		//random number becomes random letter
		function rNum() {
			var letter = {
				1: 'A',
				2: 'B',
				3: 'C',
				4: 'D'
			};
			var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
			return letter[num];
		};

		// update round number
		function updateRound() {
			if (aiArray.length < 10) {
				var len = '0' + aiArray.length;
			} else {
				len = aiArray.length;
			}
			$('#round').text(len);
		}

		// compare ai & user arrays as the user plays sequence
		function compareArrays() { 	
			var length = myArray.length - 1;
			if (aiArray[length] !== myArray[length]) {
				myArray.pop();
				console.log(event.type);
				if(event.type === 'mousedown'){$("#x5")[0].play();}
				return setTimeout(replay, 2500);
			}
		}

		//check button input, change button colors, 
		function toggle(event) {   
			switch (event.target.id) {
				case 'A':
					$(event.target).toggleClass("uBtnG dBtnG");
					if(event.type === 'mousedown'){$("#x1")[0].play();}
					break;
				case 'B':
					$(event.target).toggleClass("uBtnR dBtnR");
					if(event.type === 'mousedown'){$("#x2")[0].play();}
					break;
				case 'C':
					$(event.target).toggleClass("uBtnY dBtnY");
					if(event.type === 'mousedown'){$("#x3")[0].play();}
					break;
				case 'D':
					$(event.target).toggleClass("uBtnB dBtnB");
					if(event.type === 'mousedown'){$("#x4")[0].play();}
					break;
			} //switch			

			//if mouseup & user trigger btn
			if (event.type === 'mousedown' && event.which) {
				myArray.push(event.target.id);
				compareArrays();

				if (aiArray.length === myArray.length) {
					// all correct, next round
					setTimeout(aiPlay, 1000);
				}
			} //if
		} //toggle

		// plays sequence from array
		function replay() {
			//Loop & btn press function
			var i = 0;
			(function iterator() {
				$("#" + aiArray[i]).trigger("mousedown");
				setTimeout(function() {
					$("#" + aiArray[i]).trigger("mouseup");
					if (++i < aiArray.length) {
						setTimeout(iterator, 100);
					}
				}, 600)
			})();

		} //replay//

		//pushes random letter to array
		function aiPlay() {	
			myArray = [];
			aiChoice = rNum();
			// ai input stored here
			aiArray.push(aiChoice);
			updateRound();
			replay();
		} //aiPlay//

		$('.pBtn').bind("mousedown", toggle);
		$('.pBtn').bind("mouseup", toggle);

		setTimeout(aiPlay, 500);
	} //playing//

	//start game//
	$('#st').one('click', playing);

}); //doc.ready//


// MISC SNIPPETS //
//$('.pBtn').mousedown(toggle);
//$('.pBtn').mouseup(toggle);
//$("#"+aiA[i]).trigger("mousedown");	
//$("#"+aiA[i]).trigger("mouseup");
//console.log(event); //console.log(event.originalEvent); //console.log(event.type);		 
//console.log(event.target.id); console.log('target ',event.target.id); console.log(event.data);