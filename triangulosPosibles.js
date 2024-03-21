/* Implemente una función que acepte 3 valores enteros a, b, c. La función debería devolver verdadero si se puede construir un triángulo con los lados de una longitud determinada y falso en cualquier otro caso.

(En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser aceptados). */

function posibleTriangle(a, b, c) {
    // Verificar si todos los lados son mayores que cero
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    // Verificar la desigualdad triangular
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

console.log(posibleTriangle(1,2,3));
console.log(posibleTriangle(4,2,3));
console.log(posibleTriangle(-5,1,3));
console.log(posibleTriangle(0,2,3));
console.log(posibleTriangle(1,2,9));
console.log(posibleTriangle(2,2,2));
