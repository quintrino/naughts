board = ['3','','','','','','','','',]

var moveBtn = document.getElementById("move")

function checkWin() {
 if (checkWin[0] === checkWin[1] && checkWin[2] === checkWin[1]) {
  if (checkWin[0] !== '') {
    return checkWin[0]
  }
 }
}


function refreshBoard() {
console.log('clicked');
for (var i=0; i<board.length; i++) {
console.log(board[i])
var box = document.createElement('div');
box.innerHTML = board[i];

console.log(document.querySelector(".gameBoard"))
// document.querySelector(".gameBoard").appendChild(box);

}
}

moveBtn.addEventListener("click", refreshBoard);

