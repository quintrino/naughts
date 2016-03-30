board = ['x','o','x','x','x','o','o','o','x',]

var moveBtn = document.getElementById("move")
var gameBoard = document.querySelector("#gameBoard")
function checkWin() {
 if (checkWin[0] === checkWin[1] && checkWin[2] === checkWin[1]) {
  if (checkWin[0] !== '') {
    return checkWin[0]
  }
 }
}


function refreshBoard() {
// console.log('clicked');
gameBoard.innerHTML = ''
for (var i=0; i<board.length; i++) {
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