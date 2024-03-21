/* Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos.

Si a la función se le pasa una cadena de PIN válida, devuelve verdadero; de lo contrario, devuelve falso. */

function validatePin(pin) {
    // Verificar si el PIN tiene 4 o 6 caracteres y si todos son dígitos
    return /^\d{4}$|^\d{6}$/.test(pin);
}

console.log(validatePin("1234"));   // Devuelve true
console.log(validatePin("12345"));  // Devuelve false
console.log(validatePin("a1234b")); // Devuelve false
