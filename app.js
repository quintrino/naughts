board = ['', '', '', '', '', '', '', '', '']
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
    // modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var moveBtn = document.getElementById("move")
var gameBoard = document.querySelector("#gameBoard")

var xColor = 'WHITE';
var oColor = 'BLACK';

var colorPicker = document.getElementById("myBtn");
var turnSection = document.getElementById('turn');
var message = document.getElementById('message');
var playerTurn = 'X';
var aiPlayer = true;
var alert = document.getElementById('alert')
var contentborder = document.getElementById('modalContent')

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

function ai() {
  moves = []
  for (i = 0; i < board.length; i++) {
    if (board[i] === '')
      moves.push(i)
  }
  return moves[Math.floor(Math.random() * moves.length)]

}

function checkWinner(array) {
    for (i = 0; i < winningCombo.length; i++) {
        // console.log(array[winningCombo[i][0]]);
        Line = [array[winningCombo[i][0]], array[winningCombo[i][1]], array[winningCombo[i][2]]].join('')
        if (Line === 'XXX') {
            document.getElementById('body').style.backgroundColor = xColor;
          resetBoard();
            alert.innerHTML ="The winner is " + xColor;
            modalContent.style.border = '50px solid '+ xColor;
            modal.style.display = "block"
        } else if (Line === 'OOO') {
          document.getElementById('body').style.backgroundColor = oColor;
            resetBoard();

            alert.innerHTML = "The winner is " + oColor;
            modalContent.style.border = '50px solid '+ oColor;
            modal.style.display = "block"

        }

    }
    if (board.join('').length === 9) {
        console.log("it's a tie");
        alert.innerHTML = "There are no winners in War";
        modal.style.display = "block";
        resetBoard()
    }
    turner = ' ' + colorDetermine(playerTurn);
    console.log(turner);
    turnSection.innerHTML =turner;
}

function resetBoard() {
    setTimeout(function(){
    for (var i = 0; i < 9; i++) {
    document.getElementById(i).style.backgroundColor = '#BDBDBD';
  }
    gameBoard.style.backgroundColor ='#BDBDBD';
    document.getElementById('body').style.backgroundColor = '#40C4FF'
      
    }, 1500)
    board = ['', '', '', '', '', '', '', '', ''];
        refreshBoard();
}

function refreshBoard() {
    // console.log('clicked');

    for (var i = 0; i < board.length; i++) {
        document.getElementById(i).innerHTML = board[i]
    }
}

moveBtn.addEventListener("click", function() {resetBoard()});

var playerColor = 'red'

gameBoard.addEventListener('click', function(event) {
    // if (playerTurn === 'O' && aiPlayer === true) {
    //   console.log(ai());
    //   document.getElementById(ai().toString()).innerHTML = 'X' 
    //   gameBoard.style.backgroundColor = colorDetermine(playerTurn);
    //   return true;
    
    if (event.target.innerHTML === '') {
        event.target.style.backgroundColor = colorDetermine(playerTurn);
        board[Number(event.target.id)] = playerTurn
        event.target.innerHTML = playerTurn;
        // console.log(playerTurn);
        if (playerTurn === 'X') {
            playerTurn = 'O'
        } else {
            playerTurn = 'X'
        }
    
        gameBoard.style.borderTop = "50px solid " + colorDetermine(playerTurn);
    checkWinner(board)
}})


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
  // console.log(goodColor(color1));
  // console.log(goodColor(color2));
  if (goodColor(color1) === true) {
    xColor = document.getElementById("color1").value.toUpperCase();
    gameBoard.style.borderLeft = "50px solid " + xColor;
  }
  if (goodColor(color2) === true) {
    oColor = document.getElementById("color2").value.toUpperCase();
    gameBoard.style.borderRight = "50px solid " + oColor;
  }
  gameBoard.style.borderTop = "50px solid " + colorDetermine(playerTurn);
  turnSection.innerHTML = colorDetermine(playerTurn);
}
)

// console.dir(document.getElementById("color2").style);


refreshBoard(board)

