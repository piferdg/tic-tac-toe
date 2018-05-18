const canvas = document.querySelector('#canvas')
let currnetColor

for (let i = 0; i < 800; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    cell.addEventListener('click', (event) => {
        event.target.style.backgroundColor = currentColor
})

canvas.appendChild(cell) 
}

const colorPalette = document.querySelector('.color-palette')
const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'lightblue', 'purple', 'black']
const eraser = ['white']

colors.forEach(color => {
    const brush = document.createElement('div')
    brush.classList.add('brush')
    brush.style.backgroundColor = color
    brush.dataset.color = color

    brush.addEventListener('click', (event) => {
        currentColor = event.target.dataset.color
    })
    
    colorPalette.appendChild(brush)
})


eraser.forEach(removeColor => {
    const eraserTool = document.createElement('div')
    eraserTool.classList.add('eraserTool')
    eraserTool.style.backgroundColor = eraser
    eraserTool.dataset.color = eraser

    eraserTool.addEventListener('click', (event) => {
        currentColor = event.target.dataset.color
    })        

    colorPalette.appendChild(eraserTool)
})

