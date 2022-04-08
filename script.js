const mario = document.querySelector('.mario');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
if (event.keyCode === 32) {
    if (!isJumping){
    jump();
        }   
    }
}

function jump () {
    
    isJumping = true;

    let upInterval = setInterval (() => {
        if(position >= 150) {
            clearInterval(upInterval);

                //descendo
                let downInterval = setInterval (() => {
                    if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                    } else{
                    position -= 20;
                    mario.style.bottom = position + 'px';
                    }
                }, 20);
        } else {
                //subindo
                position += 20;
                mario.style.bottom = position + 'px';
            }
    },20);
}

function createBala() {
    const bala = document.createElement('div');
    let balaPosition = 1100;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);
    

    bala.classList.add('bala');
    bala.style.left = 1300 + 'px';
    background.appendChild(bala);

    let leftInterval = setInterval(() => {
        
        if(balaPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(bala);
        } else if (balaPosition > 0 && balaPosition < 60 && position < 60) {
            // Game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            balaPosition -= 10;
            bala.style.left = balaPosition + 'px';

        }
    }, 20);

    setTimeout(createBala, randomTime);
}


createBala();
document.addEventListener('keyup', handleKeyUp);