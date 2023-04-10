let game = document.querySelector('.game');
let cells = document.querySelectorAll('[data-cell]');

function startGame () {
    checkWinning() 
    switchTurn();
}

function switchTurn() {
    let turnx = true;
    cells.forEach((ele) => {
        
        ele.addEventListener('click' , (e) => {
            console.log(ele.dataset.cell)
            if(turnx == true) {
                ele.classList.add('x');
                game.classList.remove('game-x');
                game.classList.add('game-circle')
            }else {
                ele.classList.add('circle')
                game.classList.remove('game-circle')
                game.classList.add('game-x');
            }
            turnx = !turnx;
        } , {once : true})
    })
}

function checkWinning() {
    console.log(cells);
}

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame()