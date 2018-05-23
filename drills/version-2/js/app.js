var buttons = document.querySelectorAll('span')
var operators = document.querySelectorAll('operator')
var clear = document.getElementById('clear')
var equals = document.getElementById('equals')
var zero = document.getElementById('zero')
var screen = document.getElementById('screen')

var numberButtons = []
var operatorButtons = []

buttons.forEach(button => {
    if (button.className === '')
    numberButtons.push(button)
})

buttons.forEach(functionButton => {
    if (functionButton.className === 'operator')
    operatorButtons.push(functionButton)  
})

numberButtons.forEach(number => {
    number.addEventListener('click', appendNumber)
})

operatorButtons.forEach(actionButton => {
    actionButton.addEventListener('click', appendOperator)
})

clear.addEventListener('click', clearScreen)


function appendNumber(event) {
    var number = event.target.textContent
    var currentText = screen.textContent
    screen.textContent += number 
}

function appendOperator(event) {
    var actionButton = event.target.textContent
    if (event.target.textContent === '=') {
        screen.textContent = eval(screen.textContent)    
    }
    else {
        screen.textContent += actionButton   
    }
    if (screen.textContent === 'Infinity') {
        screen.textContent = 'Error'
    }
}

function clearScreen(event) {
    screen.textContent = ''
}


















