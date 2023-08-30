const container = document.querySelector('.container');


// creates rows and columns
const createGrid = (sizeOfGrid) => {
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < sizeOfGrid; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}

createGrid(16)

