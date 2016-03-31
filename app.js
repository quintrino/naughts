board = ['', '', '', '', '', '', '', '', '']

var moveBtn = document.getElementById("move")
var gameBoard = document.querySelector("#gameBoard")

var xColor = 'White';
var oColor = 'Black';

var colorPicker = document.getElementById("myBtn")

var playerTurn = 'X';

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

function colorDetermine(playerTurn){
return (playerTurn === 'X') ? xColor : oColor
}

// document.getElementById('turn').innerHTML = 'White'
function checkWinner(array) {
 // console.log([array[0], array[1], array[2]].join(''));
    for (i = 0; i < winningCombo.length; i++) {
        // console.log(array[winningCombo[i][0]]);
        Line = [array[winningCombo[i][0]], array[winningCombo[i][1]], array[winningCombo[i][2]]].join('')
        if (Line === 'XXX') {
            alert("The winner is " + xColor);
          resetBoard();
        } else if (Line === 'OOO') {
            alert("The winner is " + oColor);
            resetBoard();
        }

    }
    if (board.join('').length === 9) {
        alert("it's a tie!")
        resetBoard()
    }
    document.getElementById('turn').innerHTML = colorDetermine(playerTurn);
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < 9; i++) {
    document.getElementById(i).style = "background-color : 'grey'";
}

    refreshBoard();
}

function refreshBoard() {
    // console.log('clicked');

    for (var i = 0; i < board.length; i++) {
        document.getElementById(i).innerHTML = board[i]
    }
}

moveBtn.addEventListener("click", refreshBoard);

var playerColor = 'red'

gameBoard.addEventListener('click', function(event) {
    if (event.target.innerHTML === '') {
        event.target.style = "background-color :" + colorDetermine(playerTurn);
        board[Number(event.target.id)] = playerTurn
        event.target.innerHTML = playerTurn;
        console.log(playerTurn);
        if (playerTurn === 'X') {
            playerTurn = 'O'
        } else {
            playerTurn = 'X'
        }
    }
    checkWinner(board)
})


function goodColor(colour)
{
   var colour2="";
   var result=true;
   var e=document.getElementById('mydiv');
   e.style.borderColor="";
   e.style.borderColor=colour;
   colour2=e.style.borderColor;
   if (colour2.length==0){result=false;}
   e.style.borderColor="";
   return result;
}


colorPicker.addEventListener('click', function() {
  if (board.join('').length > 0){
    alert('you cannot change color mid game.')
    return false
  }
  color1 = document.getElementById("color1").value.toUpperCase();
  color2 = document.getElementById("color2").value.toUpperCase();
  if (color1 === color2) {
    return false;
  }
  
  if (goodColor(color1) === true) {
    console.log('good color 1 attempt')
    xColor = document.getElementById("color1").value.toUpperCase();
  }
  if (goodColor(color2) === true) {
    oColor = document.getElementById("color2").value.toUpperCase();
  }
}
)



refreshBoard(board)