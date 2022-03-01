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
//Draws color of class onto grid
function drawOnHover(dot) {
    return dot.classList.add("hovered");
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
resetBtn.addEventListener('click', () => resetGrid());

rainbowBtn.addEventListener('click', () => rainbowMode());



createSketchDivs(16);
let dots = document.querySelectorAll('.divDot');

dots.forEach(element => {
    element.addEventListener('mousemove', () => drawOnHover(element))
});


//Thank you Ben Thomas! https://stackoverflow.com/questions/27946703
//Assigning event listeners to each dot
// for (let i = 0; i < dots.length; i++) {
//     let self = dots[i];
//     self.addEventListener('mousemove', function (event) {  
//         event.preventDefault(); // prevent browser's default action
//         drawOnHover(this); // 'this' refers to the current button on for loop

//     }, false);
// }


//TODO: Step 4!!
function resetGrid() {
    dots.forEach(element => {
        element.classList.remove("hovered");
    });
}

function rainbowMode() {
    dots.forEach(element => {
        element.classList.toggle("rainbow");
    });
}


