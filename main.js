document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('energyForm');
    const resultadoContainer = document.getElementById('resultadoContainer');
    const detalleCalculo = document.getElementById('detalleCalculo');
    const digitoResaltado = document.getElementById('digitoResaltado');
    const categoriaResultado = document.getElementById('categoriaResultado');
    const btnReiniciar = document.getElementById('btnReiniciar');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;
        const diaInput = document.getElementById('diaInput');
        const valorDia = parseInt(diaInput.value);
        const errorDia = document.getElementById('errorDia');
        if (isNaN(valorDia) || valorDia < 1 || valorDia > 31) {
            diaInput.classList.add('is-invalid');
            errorDia.textContent = "El día debe ser un número entre 1 y 31.";
            esValido = false;
        } else {
            diaInput.classList.remove('is-invalid');
            diaInput.classList.add('is-valid');
        }
        const mesSelect = document.getElementById('mesSelect');
        const valorMes = parseInt(mesSelect.value);
        const errorMes = document.getElementById('errorMes');
        if (isNaN(valorMes) || valorMes < 1 || valorMes > 12) {
            mesSelect.classList.add('is-invalid');
            errorMes.textContent = "Por favor, selecciona un mes del listado.";
            esValido = false;
        } else {
            mesSelect.classList.remove('is-invalid');
            mesSelect.classList.add('is-valid');
        }
        const nombreInput = document.getElementById('nombreInput');
        const nombreLimpio = nombreInput.value.trim().replace(/\s+/g, ' ');
        const regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const errorNombre = document.getElementById('errorNombre');

        if (nombreLimpio.length < 2 || !regexLetras.test(nombreLimpio)) {
            nombreInput.classList.add('is-invalid');
            errorNombre.textContent = "El nombre debe tener al menos 2 letras y contener solo caracteres alfabéticos.";
            esValido = false;
        } else {
            nombreInput.classList.remove('is-invalid');
            nombreInput.classList.add('is-valid');
        }

        if (esValido) {
            const nombreNormalizado = nombreLimpio.toLowerCase();
            const cantidadLetras = nombreNormalizado.replace(/\s/g, '').length;

            const producto = valorMes * valorDia;
            const sumaTotal = producto + cantidadLetras;
            
            const ultimoDigito = sumaTotal % 10;

            let categoria = "";
            if (ultimoDigito === 0 || ultimoDigito === 1) {
                categoria = "Energía Positiva ☀️";
            } else if (ultimoDigito === 2 || ultimoDigito === 3) {
                categoria = "Creatividad 🎨";
            } else if (ultimoDigito === 4 || ultimoDigito === 5) {
                categoria = "Serenidad 🍃";
            } else if (ultimoDigito === 6 || ultimoDigito === 7) {
                categoria = "Oportunidades ✨";
            } else if (ultimoDigito === 8 || ultimoDigito === 9) {
                categoria = "Misterio 🔮";
            }

            detalleCalculo.innerHTML = `Mes (${valorMes}) × Día (${valorDia}) = <strong>${producto}</strong><br>` +
                `+ Longitud del nombre ("${nombreLimpio}" = ${cantidadLetras} letras) = <strong>${sumaTotal}</strong>`;
            
            digitoResaltado.textContent = ultimoDigito;
            categoriaResultado.textContent = categoria;

            form.classList.add('d-none');
            resultadoContainer.classList.remove('d-none');
        }
    });

    btnReiniciar.addEventListener('click', () => {
        form.reset();
        form.classList.remove('d-none');
        resultadoContainer.classList.add('d-none');
        
        const inputs = form.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });
    });
});