const numberOfPixels = document.querySelector('#pixelSlider').value;
const pixelLabelText = document.querySelector('#pixelLabel').innerText;
const buttons = [...document.querySelectorAll('button')];
const colorMode = document.querySelector('#color');

function updateLabel(element, numberOfPixels) {
    element = `${numberOfPixels} x ${numberOfPixels}`;
}

function changeSettingsState(event) {
    buttons.forEach(button => button.classList.toggle('btn-onclick', button === event.target));
}


buttons.forEach(button => button.addEventListener('click', changeSettingsState));