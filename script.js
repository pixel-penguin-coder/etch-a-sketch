const container = document.querySelector('#drawingSpace');
const gridSlider = document.getElementById('pixelSlider');
const gridSliderText = document.getElementById('sliderText');
const colorPicker = document.querySelector('#color');
const buttons = document.querySelectorAll('button');
let currentModeId = 'color-mode';
const DEFAULT_GRID_SIZE = 1;

function clearGrid() {
    if (container.hasChildNodes()) {
        container.innerHTML = '';
    }
}
 
function updateSliderText(event) {
    sliderText.textContent = `${event.target.value} x ${event.target.value}`;
}

function changeColor(event) {
    if (currentModeId === 'color-mode') {
        const newColor = colorPicker.value;
        event.target.style.backgroundColor = newColor;
    } else if (currentModeId === 'rainbow-mode') {
        const randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
    } else if (currentModeId === 'eraser-mode') {
        event.target.style.backgroundColor = 'white';
    } else {
        return;
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
}

function createGrid(event) {
    clearGrid();
    let gridSize = event.target.value;
    updateSliderText(event);
    document.documentElement.style.setProperty('--grid-number', gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-cell', '');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell);
    }
}

function changeMode(event) {
    const mode = event.target.id;
    currentModeId = mode;
}

function clearMode(event){
    const cells = document.querySelectorAll('[data-cell]');
    if (event.target.id === 'clear-mode') {
        cells.forEach(cell => cell.style.backgroundColor = 'white');
    }
}

function changeButtonStyle(event) {
    buttons.forEach(button => button.classList.toggle('btn-onclick', button === event.target));
}

buttons.forEach(button => button.addEventListener('click', (event) => {
    changeMode(event);
    changeButtonStyle(event)
    clearMode(event);
}));

//initial grid
createGrid({ target: { value: DEFAULT_GRID_SIZE } });
gridSlider.addEventListener('change', createGrid);


