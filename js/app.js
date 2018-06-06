var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];
var gameBoard = document.getElementById('gameboard')
var messageElement = document.getElementsByClassName('message')[0]

function createGame() {
    for (let i = 0; i < 9; i++) {
        var cell = document.createElement('div')
        cell.setAttribute('id', i)
        cell.classList.add('square')

        if (i === 0 || i === 1 || i === 3 || i === 4) {
            cell.classList.add('b-border', 'r-border')
        }
        else if (i === 2 || i === 5) {
            cell.classList.add('b-border')
        }
        else if (i === 6 || i === 7) {
            cell.classList.add('r-border')
        }

        gameBoard.appendChild(cell)
        addClickListener(cell)
    }
}
createGame()

function displayMessage(mess) {
    if (mess) {
        messageElement.innerHTML = mess
    }
    else {
        messageElement.innerHTML = 'Current player: ' + currentPlayer
    }
}

function changeMessage() {
    messageElement.setAttribute('class', 'end-message message')
}

function makeMove(square, index) {
    board[index] = currentPlayer
    square.innerHTML = currentPlayer
}