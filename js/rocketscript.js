var timer = null;
var countdownNumber = 10;

var cambiarFase = function(state){
 document.body.className = 'body-fase' + state;
  				clearInterval(timer);
  				countdownNumber = 10;

 	if (state == 2) {
 		timer = setInterval(function(){
 		document.getElementById('countdown').innerHTML = countdownNumber;
 		countdownNumber = countdownNumber-1;
 			if (countdownNumber <= 0) {
 				cambiarFase(3)
 			}
 		},1000);

 	} else if (state == 3) {
 		var success = setTimeout(function(){
 			var randomNumber = Math.round(Math.random()*10);
 			if (randomNumber > 5){
 				cambiarFase(4)
 			} else {
 				cambiarFase(5)
 			}
 		}, 2000);
 	};

};