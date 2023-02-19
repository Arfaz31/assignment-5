// Changing Random Color 
const divElem = document.getElementById("triangle-area");
const divElem1 = document.getElementById("rectangle-area");
const divElem2 = document.getElementById("parallelogram-area");
const divElem3 = document.getElementById("rhombus-area");
const divElem4 = document.getElementById("pentagon-area");
const divElem5 = document.getElementById("ellipse-area");

function randomcolor() {
    return Math.floor(Math.random() * 255);
}
divElem.addEventListener('mouseenter', () => {
    divElem.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
divElem1.addEventListener('mouseenter', () => {
    divElem1.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
divElem2.addEventListener('mouseenter', () => {
    divElem2.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
divElem3.addEventListener('mouseenter', () => {
    divElem3.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
divElem4.addEventListener('mouseenter', () => {
    divElem4.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
divElem5.addEventListener('mouseenter', () => {
    divElem5.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
