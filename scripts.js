//This function creates a grid of divs
function createSketchDivs (amount) {
    const sketchContainer = document.querySelector(".sketchContainer");
    for(let i = 0; i < amount; i++) {
        const dotDivider = document.createElement('div');//Divides into lines
        dotDivider.classList.add('dotDivider');
        for(let k = 0; k < amount; k++) {
            const divDot = document.createElement('div');//Filling in dots
            divDot.classList.add('divDot');
            dotDivider.appendChild(divDot);
        }
        sketchContainer.appendChild(dotDivider);
    }
};

function onHover(oi) {
    return oi.classList.add("hovered");
}
createSketchDivs(32);

let dots = document.querySelectorAll('.divDot');

//Thank you Ben Thomas! https://stackoverflow.com/questions/27946703
for (let i = 0; i < dots.length; i++) {
    let self = dots[i];

    self.addEventListener('mousemove', function (event) {  
        event.preventDefault(); // prevent browser's default action
        onHover(this); // 'this' refers to the current button on for loop
    }, false);
}

//TODO: Step 4!!