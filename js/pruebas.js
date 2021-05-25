function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no sea vacío.',
    );
    
    console.assert(
        validarNombre('11111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre tenga menos de 50 caracteres',
    );

    console.assert(
        validarNombre('asd124# ') === 'Este campo solo debe contener letras',
        'Validar nombre no validó que tenga solo letras',
    );

    console.assert(
        validarNombre('facundo') === '',
        'Validar nombre falló con un nombre válido'
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacío',
        'Validar ciudad no validó que el campo ciudad no este vacío',
    );

    console.assert(
        validarCiudad('Mendoza') === '',
        'Validar ciudad no funcionó con un nombre de ciudad válido',
    );

}

function probarvalidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo no debe estar vacío',
        'Validar descripcion de regalo no sea vacío',
    );

    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
        'Este campo debe tener menos de 100 caracteres',
        'Validar descripcion de regalo no validó que tenga menos de 100 caracteres',
    );
    
    console.assert(
        validarDescripcionRegalo('asd$#%}+') === 'Este campo solo debe contener letras y números',
        'Validar descripcion regalo no validó que contenga solo letras y números',
    );

    console.assert(
        validarDescripcionRegalo('regalo valido') === '',
        'Validar descripción regalo no funcionó con una descripción válida',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarvalidarDescripcionRegalo();
