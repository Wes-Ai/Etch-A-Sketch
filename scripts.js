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


//Event listeners for drawing colors.
let dots = document.querySelectorAll('.divDot');
dots.forEach(element => element.addEventListener('mousemove', () => drawOnHover(element)));

//Draws color of class onto grid
function drawOnHover(element) {
    element.classList.remove("rainbow");
    element.classList.add("hovered");
}


//Create drop down menu DOM values
const dotSizeDropDown = document.getElementById('dotSize');
for(let i = 8; i <= 128; i) {
    const option = document.createElement('option');
    dotSizeDropDown.appendChild(option);
    option.textContent = i;
    option.classList.add(`${i}`);
    i += 8;
}

const resetBtn = document.getElementById('reset');
const rainbowBtn = document.getElementById('rainbow');

const redBtn = document.getElementById('red');
redBtn.addEventListener('click', () => {
    dots.forEach(element => element.addEventListener('mousemove', () => drawOnHover(element)));
});


resetBtn.addEventListener('click', () => resetGrid());

//Rainbow drawing event listener
rainbowBtn.addEventListener('click', () => {
    dots.forEach(element => element.addEventListener('mousemove', () => rainbowMode(element)));
});

function rainbowMode(element) {
    element.classList.remove("hovered");
    element.classList.add("rainbow");
}


function resetGrid() {
    dots.forEach(element => {
        element.classList.remove("hovered");
        element.classList.remove("rainbow");
    });
}




