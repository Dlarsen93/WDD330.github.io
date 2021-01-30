const gameBoard = document.querySelector(".board");
const resetButton = document.querySelector(".reset");

const player1 = 'X';
const player2 = 'O';
let player = player1;

function play(x) {
    if(x.target.innerHTML == '') {
        x.target.innerHTML = player;
        if (player === player1) player = player2;
        else player = player1;
    }
  }
  

function resetGame () {
    console.dir(gameBoard);
    for(let i=0; i < gameBoard.rows.length; i++) {
      let currRow = gameBoard.rows[i];
      for(let j=0; j < gameBoard.rows.length; j++) {
        currRow.cells[j].innerHTML = '';
      }
    }
  }

  gameBoard.addEventListener('click', play);
  resetButton.addEventListener('click', resetGame);

  