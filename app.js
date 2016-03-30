board = ['','','','','','','','','',]



function checkWin() {
 if (checkWin[0] === checkWin[1] && checkWin[2] === checkWin[1]) {
  if (checkWin[0] !== '') {
    return checkWin[0]
  }
 }
}


for (var i=0; i<board.length; i++) {
var box = document.createElement('div')
box.innerHTML = board[i];


document.querySelector('board').appendChild(box);

}