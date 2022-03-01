//This function creates a grid of divs
function createSketchDivs (amount) {
    const sketchContainer = document.querySelector(".sketchContainer");
    for(let i = 0; i < amount; i++) {
        const dotDivider = document.createElement('div');//Divides into lines
        dotDivider.classList.add('dotDivider');
        for(let k = 0; k < amount; k++) {
            const divDot = document.createElement('div');//Filling in dots
            divDot.classList.add('divDot');
            divDot.setAttribute('id', 'divDot');
            dotDivider.appendChild(divDot);
        }
        sketchContainer.appendChild(dotDivider);
    }
};

createSketchDivs(16);

//Create drop down menu DOM values
const dotSizeDropDown = document.getElementById('dotSize');
for(let i = 8; i <= 128; i) {
    const option = document.createElement('option');
    dotSizeDropDown.appendChild(option);
    option.textContent = i;
    option.classList.add(`${i}`);
    i += 8;
}


//Button event listeners

let dots = document.querySelectorAll('.divDot');

dots.forEach(element => element.addEventListener('mousemove', () => drawOnHover(element)));

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => resetGrid());

const redBtn = document.getElementById('red');
redBtn.addEventListener('click', () => {
    dots.forEach(element => element.addEventListener('mousemove', () => drawOnHover(element)));
});

const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
    dots.forEach(element => element.addEventListener('mousemove', () => rainbowMode(element)));
});

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
    dots.forEach(element => element.addEventListener('mousemove', () => eraseDots(element)));
});


//Drawing functions
function rainbowMode(element) { 
    element.classList.remove("hovered");
    element.classList.add("rainbow");
}
function eraseDots(element) {
    element.classList.remove("hovered");
    element.classList.remove("rainbow");
}
function drawOnHover(element) {
    element.classList.remove("rainbow");
    element.classList.add("hovered");
}
function resetGrid() {
    dots.forEach(element => {
        element.classList.remove("hovered");
        element.classList.remove("rainbow");
    });
}




