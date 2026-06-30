const form = document.getElementById("form");
const error = document.getElementById("error");
const resultado = document.getElementById("resultado");
const camposTejado = document.querySelectorAll(".tejado");

function esTejado() {
  return document.querySelector('input[name="tipo"]:checked').value === "tejado";
}

function mostrarCampos() {
  camposTejado.forEach(function (c) {
    c.style.display = esTejado() ? "block" : "none";
  });
  error.textContent = "";
  resultado.style.display = "none";
}

function limpiar() {
  form.reset();
  document.getElementById("dias").value = 365;
  form.querySelectorAll("input").forEach(function (i) {
    i.parentElement.classList.remove("error");
  });
  error.textContent = "";
  resultado.style.display = "none";
  mostrarCampos();
}

function validar() {
  const ids = ["consumo", "compensacion", "factor", "horas", "dias"];
  if (esTejado()) {
    ids.push("potencia", "superficie");
  }

  const errores = [];
  form.querySelectorAll("input").forEach(function (i) {
    i.parentElement.classList.remove("error");
  });

  ids.forEach(function (id) {
    const input = document.getElementById(id);
    const val = Number(input.value);
    if (!input.value || isNaN(val) || val <= 0) {
      errores.push("Complete correctamente: " + input.parentElement.textContent.split("\n")[0]);
      input.parentElement.classList.add("error");
    }
  });

  if (errores.length) {
    error.textContent = errores.join(". ");
    return null;
  }

  return {
    consumo: Number(document.getElementById("consumo").value),
    compensacion: Number(document.getElementById("compensacion").value) / 100,
    factor: Number(document.getElementById("factor").value) / 100,
    horas: Number(document.getElementById("horas").value),
    dias: Number(document.getElementById("dias").value),
    potencia: Number(document.getElementById("potencia").value),
    superficie: Number(document.getElementById("superficie").value)
  };
}

document.querySelectorAll('input[name="tipo"]').forEach(function (r) {
  r.addEventListener("change", mostrarCampos);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const d = validar();
  if (!d) return;

  const num = d.consumo * d.compensacion * d.factor;

  if (esTejado()) {
    const total = (num / (d.horas * d.dias * d.potencia)) * d.superficie;
    resultado.textContent = "Superficie de tejado: " + total.toFixed(2) + " m²";
  } else {
    const total = num / (d.horas * d.dias);
    resultado.textContent = "Tamaño del campo solar: " + total.toFixed(3) + " kW";
  }

  resultado.style.display = "block";
});

document.getElementById("limpiar").addEventListener("click", limpiar);
mostrarCampos();
