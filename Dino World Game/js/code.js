const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');

var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');
placar = criaPlacar();
placar.desenhar();
witdh = 400;
height = 200;
var over = false;
var stop = false;


const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {
		 
		mario.classList.remove('jump');
	}, 400);
}

const loop = setInterval(() => {

	console.log('loop');

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


	if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 80 && LimparTela)
	{
	
    
	pipe.style.animation = 'none';
	pipe.style.left = `${pipePosition}px`;

	mario.style.animation = 'none';
	mario.style.bottom = `${marioPosition}px`;

	mario.src = './images/dino-gameover.png'
	mario.style.width = '180px'
	mario.style.marginLeft = '1px' 

	over = true;
	clearInterval(loop);
	}

}, 10);

document.addEventListener("keydown", event => {
    const { key } = event
    if (key.toLowerCase() === "r") {
      location.reload()
    }
  })


document.addEventListener('keydown', jump); 


window.onload = function() {
    function loop()
{
        LimparTela();
        if (over == false) {
             placar.atualizar();
        }
        placar.desenhar();
window.requestAnimationFrame(loop);		
}
startTimer();
loop();
}

const startTimer = () => {

    setInterval(() => {

    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

    }, 1000); 

}

function criaPlacar(){
    const placar = {
        pontuacao: 0,

        desenhar(){
            ctx.font = '30px serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'right';
            ctx.fillText(`Pontuação:  ${placar.pontuacao}`, 250, 100);
        },
        atualizar(){
            placar.pontuacao += 1;
        }
    }
    return placar;
}

function LimparTela() {
    ctx.fillStyle = "rgb(0,0,0)";    
    ctx.beginPath();
    ctx.rect(0, 0, witdh, height);
    ctx.closePath();
    ctx.fill();    

}
