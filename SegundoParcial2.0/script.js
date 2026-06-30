document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM en español
    const seleccionTipoCalculo = document.getElementById("tipoCalculo");
    const contenedorCamposDinamicos = document.getElementById("campos-dinamicos");
    const contenedorCamposTejado = document.getElementById("campos-tejado");
    const botonCalcular = document.getElementById("btn-calcular");
    const botonLimpiar = document.getElementById("btn-limpiar");
    const bloqueError = document.getElementById("bloque-error");
    const bloqueResultado = document.getElementById("bloque-resultado");
    const formularioSolar = document.getElementById("formulario-solar");

    // Evento de control para alternar visibilidad según el tipo de cálculo
    seleccionTipoCalculo.addEventListener("change", (evento) => {
        contenedorCamposDinamicos.classList.remove("oculto");
        limpiarMensajes();
        
        if (evento.target.value === "tejado") {
            contenedorCamposTejado.classList.remove("oculto");
        } else {
            contenedorCamposTejado.classList.add("oculto");
        }
    });

    // Evento para restablecer y limpiar los campos del formulario
    botonLimpiar.addEventListener("click", () => {
        formularioSolar.reset();
        contenedorCamposDinamicos.classList.add("oculto");
        contenedorCamposTejado.classList.add("oculto");
        limpiarMensajes();
        document.getElementById("diasAno").value = "365";
    });

    // Evento de ejecución para el análisis algorítmico y matemático
    botonCalcular.addEventListener("click", () => {
        limpiarMensajes();
        
        const tipoSeleccionado = seleccionTipoCalculo.value;
        if (!tipoSeleccionado) return;

        // Asignación de variables cuantitativas de entrada en español
        const consumoAnual = parseFloat(document.getElementById("consumoAnual").value);
        const porcentajeCompensacion = parseFloat(document.getElementById("porcentajeCompensacion").value);
        const factorMedioambiental = parseFloat(document.getElementById("factorMedioambiental").value);
        const horasSolares = parseFloat(document.getElementById("horasSolares").value);
        const diasAno = parseFloat(document.getElementById("diasAno").value);

        // Validación integral de variables numéricas obligatorias
        if (isNaN(consumoAnual) || isNaN(porcentajeCompensacion) || isNaN(factorMedioambiental) || isNaN(horasSolares) || isNaN(diasAno)) {
            mostrarMensajeError("Error de integridad: Todos los parámetros requeridos deben ser completados con valores numéricos válidos.");
            return;
        }

        // Validación de consistencia física y lógica de los datos de entrada
        if (consumoAnual <= 0 || porcentajeCompensacion <= 0 || factorMedioambiental <= 0 || horasSolares <= 0 || diasAno <= 0) {
            mostrarMensajeError("Error paramétrico: Los datos ingresados deben ser magnitudes estrictamente superiores a cero.");
            return;
        }

        if (porcentajeCompensacion > 100 || factorMedioambiental > 100) {
            mostrarMensajeError("Error operacional: Los factores proporcionales o de porcentaje no pueden exceder el límite del 100%.");
            return;
        }

        // Conversión matemática de proporciones porcentuales a formato fraccional decimal
        const fraccionCompensacion = porcentajeCompensacion / 100;
        const fraccionFactor = factorMedioambiental / 100;

        // Ecuación analítica para determinar la potencia del campo solar (kW)
        // Potencia del Campo = (Consumo Anual * Fracción de Compensación * Fracción de Factor Rendimiento) / (HSP * Período Anual)
        const potenciaCampoSolar = (consumoAnual * fraccionCompensacion * fraccionFactor) / (horasSolares * diasAno);

        if (tipoSeleccionado === "campo") {
            mostrarMensajeResultado(`Análisis técnico concluido. Potencia estimada para el campo solar: <strong>${potenciaCampoSolar.toFixed(3)} kW</strong>.`);
        } 
        else if (tipoSeleccionado === "tejado") {
            // Asignación de variables específicas para el análisis de área física
            const potenciaPanel = parseFloat(document.getElementById("potenciaPanel").value);
            const superficiePanel = parseFloat(document.getElementById("superficiePanel").value);

            // Validación de variables críticas del módulo fotovoltaico
            if (isNaN(potenciaPanel) || isNaN(superficiePanel)) {
                mostrarMensajeError("Error de integridad: Ingrese la capacidad nominal del módulo y su área física correspondiente.");
                return;
            }

            if (potenciaPanel <= 0 || superficiePanel <= 0) {
                mostrarMensajeError("Error paramétrico: Las especificaciones unitarias del panel deben ser mayores a cero.");
                return;
            }

            // Ecuación analítica para determinar la superficie de implantación necesaria
            // Área Total = (Potencia del Campo / Potencia Unitaria del Panel) * Área Unitaria del Panel
            const superficieTotalNecesaria = (potenciaCampoSolar / potenciaPanel) * superficiePanel;
            
            mostrarMensajeResultado(`Análisis técnico concluido. Área de ocupación en tejado necesaria: <strong>${superficieTotalNecesaria.toFixed(2)} m²</strong>.`);
        }
    });

    // Funciones utilitarias para la administración dinámica de la interfaz
    function mostrarMensajeError(mensaje) {
        bloqueError.innerHTML = mensaje;
        bloqueError.classList.remove("oculto");
        bloqueResultado.classList.add("oculto");
    }

    function mostrarMensajeResultado(mensaje) {
        bloqueResultado.innerHTML = mensaje;
        bloqueResultado.classList.remove("oculto");
        bloqueError.classList.add("oculto");
    }

    function limpiarMensajes() {
        bloqueError.classList.add("oculto");
        bloqueResultado.classList.add("oculto");
    }
});
