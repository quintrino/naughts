board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ]

var moveBtn = document.getElementById("move")
var gameBoard = document.querySelector("#gameBoard")


function checkWin() {
    if (checkWin[0] === checkWin[1] && checkWin[2] === checkWin[1]) {
        if (checkWin[0] !== '') {
            console.log("t" + checkWin[0])
        }
    }
}

winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner(array) {
    for (i = 0; i < winningCombo.length; i++) {

    }
}


function refreshBoard() {
    // console.log('clicked');
    gameBoard.innerHTML = ''
    for (var i = 0; i < board.length; i++) {
        // console.log(board[i])
        var box = document.createElement('div');
        box.innerHTML = board[i];


        // console.log(document.querySelector("#gameBoard"))
        gameBoard.appendChild(box);



    }
}

moveBtn.addEventListener("click", refreshBoard);



gameBoard.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(event);
    //   if (event.target.tagName === "DIV"){

    //   if (event.target.className === 'done'){
    //     event.target.className = '';
    //   }
    //   else if (event.target.className === ''){
    //   event.target.className = 'done';
    // }
})