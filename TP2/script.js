function calcular() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const asiento = document.querySelector('input[name="asiento"]:checked');
    const equipaje = document.getElementById('equipaje').checked;

    let precioVuelo = 0;

    if (origen === 'bue' && (destino === 'cor' || destino === 'igu')) {
        precioVuelo = 60000;
    } else if (origen === 'bue' && destino === 'ush') {
        precioVuelo = 80000;
    } else if (origen !== 'bue' && (destino === 'igu' || destino === 'ush')) {
        precioVuelo = 70000;
    } else { // agregue este else por que en los ejercicios no decia el precio en caso de que las condiciones no se cumplieran
        precioVuelo= 50000;
    }

    if (origen === destino && origen !== '') {
        alert('Error: El origen y el destino no pueden ser iguales.');
        return;
    }

    if (asiento && asiento.value === 'premier') {
        precioVuelo *= 1.15;
    } else if (asiento && asiento.value === 'plus') {
        precioVuelo *= 1.1;
    }

    if (equipaje) {
        precioVuelo += 5000;
    }


    if (!equipaje && !asiento) {
        precioVuelo *= 0.95;
    } else if (!equipaje && asiento && asiento.value === 'premier') {
        precioVuelo *= 0.98;
    }

    alert(`Precio del vuelo desde ${obtenerCiudad(origen)} a ${obtenerCiudad(destino)}: $${precioVuelo.toFixed(2)}`);
}

function obtenerCiudad(codigo) {
    switch (codigo) {
        case 'cor':
            return 'Cordoba';
        case 'mdz':
            return 'Mendoza';
        case 'bue':
            return 'Buenos Aires';
        case 'ush':
            return 'Ushuaia';
        case 'igu':
            return 'Iguazu';
        default:
            return '';
    }
}