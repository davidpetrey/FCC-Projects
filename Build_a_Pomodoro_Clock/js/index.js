// adjust var time for testing 
var time = 25;
var cTime = (time * 60)
var running = 0;

function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML = "Pause";
  } else {
    running = 0;
    document.getElementById("startPause").innerHTML = "Resume";
  }
}

function reset() {
  running = 0;

  document.getElementById("startPause").innerHTML = "Start";
  setTimeout(function() {
    time = 25;
    cTime = (time * 60);
    document.getElementById("output").innerHTML = "25:00";
  }, 1000);
}

function increment() {
  if (cTime > 0 && running !== 0) {
    console.log(running);
    setTimeout(function() {
      cTime--;
      var mins = Math.floor(cTime / 60);
      var secs = Math.floor(cTime % 60);

      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }

      document.getElementById("output").innerHTML = mins + ":" + secs;
      increment();
    }, 1000);
  }
  console.log(running);
  if (cTime == 0) {
    var audio = new Audio('http://dptest.nfshost.com/other/bell.mp3');
    audio.play();
  }
}