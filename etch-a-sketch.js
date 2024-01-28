const container = document.querySelector('#container');
const gridSize = document.querySelector('.newGridBtn');

createGrid(16)

//create grid
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
    //Adds event listener to every cell to change color
    const colorCells = document.querySelectorAll('.cell');
        colorCells.forEach(function(colorCells) {
        colorCells.addEventListener('mouseover', () => {
        colorCells.style.backgroundColor = randomColor();
    });
 })
    //creates random color values
    function randomColor() {
        const redValue = Math.floor(Math.random() * 256);
        const greenValue = Math.floor(Math.random() * 256);
        const blueValue = Math.floor(Math.random() * 256);
        const rgbValues = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        return rgbValues;
    }
}
createGrid(gridSize)

const resizeButton = document.querySelector('.newGridBtn');
resizeButton.addEventListener('click', () => {
    let gridSize = Number(prompt('Enter a number between 4 and 100'));
    if(gridSize < 1 || gridSize > 100) {
        alert("Invalid grid size");
    }else{
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
})






    