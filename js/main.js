function validarNombre(nombre) {
    const contieneSoloLetras = /^[a-z]+$/i.test(nombre);
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    else if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    else if (!contieneSoloLetras) {
        return 'Este campo solo debe contener letras';
    }
    else {
        return '';
    }
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'El campo ciudad no puede estar vacío';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    const contieneSoloLetrasYNumeros = /^[a-z0-9\s]+$/i.test(descripcionRegalo);
    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    }
    else if (descripcionRegalo.length === 0) {
        return 'Este campo no debe estar vacío';
    } 
    else if (!contieneSoloLetrasYNumeros) {
        return 'Este campo solo debe contener letras y números';
    }
    else {
        return '';
    }
}

function validarFormulario(event) {
    const $form = document.formulario;
    
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        $form.className = "oculto";
        document.querySelector('#exito').className = "";
    }


    event.preventDefault();   
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key) {
        const error = errores[key];

        if (error) {
            $form[key].className = "error";
            cantidadErrores++;

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }else {
            $form[key].className = "";
        }
    })

    return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
