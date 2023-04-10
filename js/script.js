let X_class = 'x';
let Circle_class = 'circle';
let cells = document.querySelectorAll('[data-cell]');
let game = document.querySelector('.game');
let circleTurn = true ;
let winningMessage = document.querySelector('.end_game div p');

startGame();

function startGame() {
    circleTurn = false;
    cells.forEach(cell => {
        cell.addEventListener('click' , handelClick , {once : true});
    })
}

function handelClick(e) {
    let cell = e.target;
    let currentClass = circleTurn ? Circle_class : X_class;
    placeMark(cell , currentClass);  
    if(checkWinning(currentClass)) {
        endgame(false);
    }else if(isDraw()){
        endgame(true)
    }else {
        swapTurn(currentClass);
        hoverEffect(currentClass);
    }
}
///////////////////////////////
function endgame(draw) { 
    if (draw) {
        winningMessage.innerText = `Draw`;
        document.querySelector('.end_game').classList.add('show');
    }else {
        winningMessage.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
        document.querySelector('.end_game').classList.add('show');
    }
}

function isDraw() {
    let cells_array = [];
    cells.forEach(cell => {
        cells_array.push(cell);
    });
    return cells_array.every((cell) => {
        return cell.classList.contains(X_class) || 
        cell.classList.contains(Circle_class)
    })
}
//////////////////////////////
function placeMark(cell,currentClass) {
    cell.classList.add(currentClass);
}

function swapTurn () {
    circleTurn = !circleTurn;
}

function hoverEffect(currentClass) {
    if(currentClass ==  X_class){
        game.classList.remove('game-x');
        game.classList.add('game-circle')
    }else{
        game.classList.remove('game-circle')
        game.classList.add('game-x');
    }
}

function checkWinning(currentClass) {
    return winningCombinations.some( comb => {
       return comb.every(index => {
            return cells[index].classList.contains(currentClass);
        })
    })
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

function reload() {
    location.reload();
}