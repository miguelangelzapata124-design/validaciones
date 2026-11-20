// BLOQUE 1. VALIDAR NOMBRE
function validarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    let errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres.";
        return false;
    } else {
        errorNombre.textContent = "";
        return true;
    }
}

document.getElementById("nombre").addEventListener("input", validarNombre);


// BLOQUE 2. VALIDAR APELLIDOS
function validarApellidos() {
    let apellidos = document.getElementById("apellidos").value.trim();
    let errorApellidos = document.getElementById("errorApellidos");

    if (apellidos.length < 3) {
        errorApellidos.textContent = "Los apellidos deben tener mínimo 3 caracteres.";
        return false;
    } else {
        errorApellidos.textContent = "";
        return true;
    }
}

document.getElementById("apellidos").addEventListener("input", validarApellidos);


// BLOQUE 3. VALIDAR DOCUMENTO
function validarDocumento() {
    let documento = document.getElementById("documento").value.trim();
    let errorDocumento = document.getElementById("errorDocumento");

    if (!/^\d{6,10}$/.test(documento)) {
        errorDocumento.textContent = "Ingrese un documento entre 6 y 10 números.";
        return false;
    } else {
        errorDocumento.textContent = "";
        return true;
    }
}

document.getElementById("documento").addEventListener("input", validarDocumento);


// BLOQUE 4. VALIDAR CORREO
function validarCorreo() {
    let correo = document.getElementById("correo").value.trim();
    let errorCorreo = document.getElementById("errorCorreo");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errorCorreo.textContent = "Ingrese un correo electrónico válido.";
        return false;
    } else {
        errorCorreo.textContent = "";
        return true;
    }
}

document.getElementById("correo").addEventListener("input", validarCorreo);


// BLOQUE 5. VALIDAR TELÉFONO
function validarTelefono() {
    let telefono = document.getElementById("telefono").value.trim();
    let errorTelefono = document.getElementById("errorTelefono");

    if (!/^\d{10}$/.test(telefono)) {
        errorTelefono.textContent = "El teléfono debe tener exactamente 10 números.";
        return false;
    } else {
        errorTelefono.textContent = "";
        return true;
    }
}

document.getElementById("telefono").addEventListener("input", validarTelefono);


// BLOQUE 6. VALIDAR EDAD
function validarEdad() {
    let edad = parseInt(document.getElementById("edad").value.trim());
    let errorEdad = document.getElementById("errorEdad");

    if (isNaN(edad) || edad < 18 || edad > 60) {
        errorEdad.textContent = "La edad debe estar entre 18 y 60 años.";
        return false;
    } else {
        errorEdad.textContent = "";
        return true;
    }
}

document.getElementById("edad").addEventListener("input", validarEdad);


// BLOQUE 7. VALIDAR CONTRASEÑA
function validarContrasena() {
    let contrasena = document.getElementById("contrasena").value;
    let errorContrasena = document.getElementById("errorContrasena");

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)) {
        errorContrasena.textContent = "Mínimo 8 caracteres, una mayúscula y un número.";
        return false;
    } else {
        errorContrasena.textContent = "";
        return true;
    }
}

document.getElementById("contrasena").addEventListener("input", validarContrasena);


// BLOQUE 8. CONFIRMAR CONTRASEÑA
function validarConfirmar() {
    let contrasena = document.getElementById("contrasena").value;
    let confirmar = document.getElementById("confirmar").value;
    let errorConfirmar = document.getElementById("errorConfirmar");

    if (confirmar === "" || confirmar !== contrasena) {
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        errorConfirmar.textContent = "";
        return true;
    }
}

document.getElementById("confirmar").addEventListener("input", validarConfirmar);
document.getElementById("contrasena").addEventListener("input", validarConfirmar);


// BLOQUE 9. VALIDAR PROGRAMA
function validarPrograma() {
    let programa = document.getElementById("programa").value;
    let errorPrograma = document.getElementById("errorPrograma");

    if (programa === "") {
        errorPrograma.textContent = "Seleccione un programa de formación.";
        return false;
    } else {
        errorPrograma.textContent = "";
        return true;
    }
}

document.getElementById("programa").addEventListener("change", validarPrograma);


// BLOQUE 10. VALIDAR TÉRMINOS Y CONDICIONES
function validarTerminos() {
    let terminos = document.getElementById("terminos").checked;
    let errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones.";
        return false;
    } else {
        errorTerminos.textContent = "";
        return true;
    }
}

document.getElementById("terminos").addEventListener("change", validarTerminos);


// BLOQUE 11. VALIDAR TODO EL FORMULARIO
let formulario = document.getElementById("formulario");
let btnRegistrar = document.getElementById("btnRegistrar");
let mensajeFinal = document.getElementById("mensajeFinal");

function validarFormulario() {
    let resultado = true;

    if (!validarNombre()) resultado = false;
    if (!validarApellidos()) resultado = false;
    if (!validarDocumento()) resultado = false;
    if (!validarCorreo()) resultado = false;
    if (!validarTelefono()) resultado = false;
    if (!validarEdad()) resultado = false;
    if (!validarContrasena()) resultado = false;
    if (!validarConfirmar()) resultado = false;
    if (!validarPrograma()) resultado = false;
    if (!validarTerminos()) resultado = false;

    btnRegistrar.disabled = !resultado;
    return resultado;
}


// BLOQUE 12. ENVIAR FORMULARIO
function enviarFormulario(event) {
    event.preventDefault();

    if (validarFormulario()) {
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color = "green";
        formulario.reset();

        let campos = document.querySelectorAll("input, select");
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("error", "exito");
        }

        let mensajes = document.querySelectorAll("small");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].textContent = "";
            mensajes[i].className = "";
        }

        btnRegistrar.disabled = true;
    }
}

formulario.addEventListener("submit", enviarFormulario);