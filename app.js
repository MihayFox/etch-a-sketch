let container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 1; j <= 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
        row.appendChild(cell);
    }

    container.appendChild(row);
}

function clear() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', clear);



