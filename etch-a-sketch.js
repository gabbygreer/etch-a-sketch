const container = document.querySelector('.container');


// creates rows and columns
const createGrid = (sizeOfGrid) => {
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < sizeOfGrid; j++) {
            const widthAndHeight = 500 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            //mouseenter listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'aqua'
                gridBox.style.borderColor = 'transparent'
            });
            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}
createGrid(10);





