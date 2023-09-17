function calcular() {
    const tipoInmueble = document.querySelector('input[name="tipo"]').value.toLowerCase();
    const sueldoInteresado = parseFloat(document.querySelector('input[name="sueldo"]').value);
    const permiteMascotas = document.querySelector('input[name="mascota"]').checked;

    let costoInicial = 0;
    switch (tipoInmueble) {
        case 'casa':
            costoInicial = 100000;
            break;
        case 'departamento':
            costoInicial = 90000;
            break;
        case 'duplex':
            costoInicial = 85000;
            break;
        default:
            alert('Tipo de inmueble no válido');
            return;
    }

    if (sueldoInteresado > 20000) {
        costoInicial *= 1.1;
    } else {
        costoInicial *= 1.15;
    }

    if (permiteMascotas) {
        costoInicial *= 1.1;
    }

    if (tipoInmueble === 'departamento') {
        costoInicial *= 1.08;
    }

    const costoFinal = costoInicial.toFixed(2);
    const renovacion = sueldoInteresado > 20000 ? 'cada 3 años' : 'cada 2 años';

    alert(`Costo Final: $${costoFinal}\nRenovación: ${renovacion}`);
}
