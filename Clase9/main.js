document.addEventListener('DOMContentLoaded', () => {
            
    const inputNombre = document.getElementById('nombre');
    const greetingTitle = document.getElementById('greetingTitle');

    inputNombre.addEventListener('keyup', (e) => {
        const nombreIngresado = e.target.value.trim().toUpperCase();
        greetingTitle.textContent = nombreIngresado ? `HOLA ${nombreIngresado}` : 'HOLA';
    });

    const validaciones = {
        nombre: (val) => val.length > 6 && val.trim().indexOf(' ') > 0 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val),
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        password: (val) => val.length >= 8 && /[a-zA-Z]/.test(val) && /\d/.test(val),
        repeatPassword: (val) => val.length > 0 && val === document.getElementById('password').value,
        edad: (val) => Number.isInteger(Number(val)) && Number(val) >= 18,
        telefono: (val) => /^\d{7,}$/.test(val),
        direccion: (val) => val.length >= 5 && /[a-zA-Z]/.test(val) && /\d/.test(val) && val.trim().indexOf(' ') > 0,
        ciudad: (val) => val.trim().length >= 3,
        cp: (val) => val.trim().length >= 3,
        dni: (val) => /^\d{7,8}$/.test(val)
    };

    const form = document.getElementById('subscriptionForm');
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const errorSpan = document.getElementById(`error-${input.id}`);
            if(errorSpan) errorSpan.style.display = 'none';
        });

        input.addEventListener('blur', (e) => {
            const id = e.target.id;
            const value = e.target.value;
            const errorSpan = document.getElementById(`error-${id}`);
            
            if (validaciones[id]) {
                const isValid = validaciones[id](value);
                if (!isValid) {
                    errorSpan.style.display = 'block';
                }
            }
        });
    });

    const modal = document.getElementById('resultModal');
    const closeModalBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    closeModalBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let errores = [];
        let formDataHTML = '<ul>';

        inputs.forEach(input => {
            const id = input.id;
            const value = input.value;
            const errorSpan = document.getElementById(`error-${id}`);
            const labelText = document.querySelector(`label[for="${id}"]`).innerText;

            const isValid = validaciones[id](value);

            if (!isValid) {
                errores.push(`${labelText}: ${errorSpan.innerText}`);
                errorSpan.style.display = 'block';
            } else {
                const displayValue = (input.type === 'password') ? '********' : value;
                formDataHTML += `<li class="success-item"><strong>${labelText}:</strong> ${displayValue}</li>`;
            }
        });
        formDataHTML += '</ul>';

        if (errores.length > 0) {
            modalTitle.textContent = "Errores en el Formulario";
            modalTitle.style.color = "#cc0000";
            modalBody.style.overflowY = 'auto'; 
            modalBody.style.maxHeight = '60vh';
            
            let errorList = '<ul>';
            errores.forEach(err => {
                errorList += `<li> ${err}</li>`;
            });
            errorList += '</ul>';
            modalBody.innerHTML = errorList;
        } else {
            modalTitle.textContent = "¡Suscripción Exitosa!";
            modalTitle.style.color = "#4CAF50";
            modalBody.innerHTML = `<p style="margin-bottom:15px;">La siguiente información ha sido enviada:</p> ${formDataHTML}`;
        }

        modal.style.display = 'block';
    });
});