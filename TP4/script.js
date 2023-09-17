const tabla = document.getElementById('tabla');
const celdas = document.querySelectorAll('.celda');
const resultado = document.getElementById('resultado');

let jugador1 = 'X';
let movimiento = 0;
const victoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(celdaIndex) {
    const celda = celdas[celdaIndex];
    
    if (celda.textContent === '' && !isGameOver()) {
        celda.textContent = jugador1;
        celda.style.pointerEvents = 'none';
        movimiento++;

        if (isWinner()) {
            resultado.textContent = `¡Jugador ${jugador1} gana!`;
        } else if (movimiento === 9) {
            resultado.textContent = '¡Empate!';
        } else {
            jugador1 = jugador1 === 'X' ? 'O' : 'X';
        }
    }
}

function isWinner() {
    for (const combo of victoria) {
        const [a, b, c] = combo;
        if (celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent) {
            return true;
        }
    }
    return false;
}

function isGameOver() {
    return resultado.textContent !== '';
}
