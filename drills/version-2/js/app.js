//Query Selectors
var buttons = document.querySelectorAll('span')
//Returns an array
var operators = document.querySelectorAll('operator')

// var buttons = document.querySelector('span')
// //Returns the first element that matches the query


//ID Selector
var clear = document.getElementById('clear')
var equals = document.getElementById('equals')
var zero = document.getElementById('zero')
var screen = document.getElementById('screen')
//returns a single DOM element


//Class Selector
// var operators = document.getElementsByClassName('operator')
//Returns an array

// var buttons = document.getElementsByClassName('buttons')[0]
// //Returns an array, an at the end you're telling it which one

// //Tagname Selector
// var buttons = document.getElementsByTagName('span')


var numberButtons = []

//Write a conditional for any spans that dont have a class or id
buttons.forEach(button => {
    if (button.className === '')
    numberButtons.push(button)
})

var operatorButtons = []

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
    var currnetText = screen.textContent

    if (currnetText === 'Error') {
    } else {
        screen.textContent += number
    }  
}

function appendOperator(event) {
    var actionButton = event.target.textContent
    screen.textContent += actionButton
    
}

function clearScreen(event) {
    screen.textContent = ''
}








