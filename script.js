window.onload = function (){
var btn = document.getElementById('pBtn');
var alien = document.getElementById('pic');

function startGame () {
	var statusX = 'right';
    var statusY = 'up';
	var posX = pic.offsetLeft;
    var posY = pic.offsetTop;

	setInterval(function(){
        if(statusX ==='right'){
			posX++;
		}else if(statusX == 'left'){
			posX--;
		}
        if (posX == 485){
        	statusX = 'left';
        }else if (posX == 75){
        	statusX = 'right';
        }
        if(status ==='down'){
            posY++;
        }else if(status == 'up'){
            posY--;
        }
        if (posY == 360){
            status = 'up';
        }else if (posY == 75){
            status = 'down';
        }
        if (posX%2==0) {
        	document.getElementById('space_alien').src="sp_in_2.png";
        }else {
        	document.getElementById('space_alien').src="sp_in_1.png";
        }

        console.log(posY);

    alien.style.left = posX + 'px';
    alien.style.top = posY + 'px';
	}, 10);
}

function youWin (){
    alert('Ты поймал пришельца!');
}

btn.addEventListener("click", startGame);
alien.addEventListener("click", youWin);
}
