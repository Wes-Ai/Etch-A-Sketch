//This function creates a grid of divs
function createSketchDivs (amount) {
    const sketchContainer = document.querySelector(".sketchContainer");
    removeAllChildNodes(sketchContainer);
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

        let dots = document.querySelectorAll('.divDot');
        attachEventsDots(dots);
    }
};

let dots = document.querySelectorAll('.divDot');
const resetBtn = document.getElementById('reset');
const redBtn = document.getElementById('red');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const gridBtn = document.getElementById('gridLines');
const circleBtn = document.getElementById('circle');
const fillBtn = document.getElementById('fill');

const dropDownValuesMax = 96;



createSketchDivs(16);



//Create drop down menu DOM values
const dotSizeDropDown = document.getElementById('dotSize');
for(let i = 16; i <= dropDownValuesMax; i) {
    const option = document.createElement('option');
    dotSizeDropDown.appendChild(option);
    option.classList.add('option');
    option.setAttribute('id', 'option');
    option.textContent = i;
    i += 16;
}
dotSizeDropDown.addEventListener('change', () => createSketchDivs(dotSizeDropDown.value));



//Button event listeners
function attachEventsDots(dots) {
    dots.forEach(element => element.addEventListener('mouseover', () => drawOnHover(element)));
    resetBtn.addEventListener('click', () => resetGrid(dots));
    gridBtn.addEventListener('click', () => activateGridLines(dots));
    circleBtn.addEventListener('click', () => convertToCircle(dots));
    fillBtn.addEventListener('click', () => fillGridRGB(dots));
    redBtn.addEventListener('click', () => {
        dots.forEach(element => element.addEventListener('mouseover', () => drawOnHover(element)));
    });
    rainbowBtn.addEventListener('click', () => {
        dots.forEach(element => element.addEventListener('mouseover', () => rainbowMode(element)));
    });
    eraserBtn.addEventListener('click', () => {
        dots.forEach(element => element.addEventListener('mouseover', () => eraseDots(element)));
    });
}


//Drawing functions
function rainbowMode(element) { 
    element.classList.remove("hovered");
    element.style.backgroundColor = getRGB();
}
function eraseDots(element) {
    element.classList.remove("hovered");
    element.classList.remove("rainbow");
    element.style.removeProperty('background-color');
}
function drawOnHover(element) {
    element.classList.remove("rainbow");
    element.style.removeProperty('background-color');
    element.classList.add("hovered");
    element.classList.add
}
function resetGrid(dots) {
    dots.forEach(element => {
        element.classList.remove("hovered");
        element.classList.remove("rainbow");
        element.style.removeProperty('background-color');
        element.style.removeProperty('border');
        element.style.removeProperty('border-radius');
    });
}
function activateGridLines(dots) {
    dots.forEach(element => {
        element.style.border = '1px solid black';
    });
}
function convertToCircle(dots) {
    dots.forEach(element => {
        element.style.borderRadius = '100%';
    });
}

async function fillGridRGB(dots) {
    for (let i = 0; i < dots.length; i++) {
        rainbowMode(dots[i]);
        await sleep(5);
    }
    console.log('Done');
}


//Helper Functions
function getRGB() {
    let arr = [];
    while (arr.length < 3) {
        let r = Math.floor(Math.random() * 256) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);

    }
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//Sleep or timeout function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

