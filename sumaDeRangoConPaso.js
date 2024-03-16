/* Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que contenga todos los números desde inicio hasta fin, incluyendo fin.

Luego, escribe una función sum que tome un array de números y devuelva la suma de estos números. Ejecuta el programa de ejemplo y verifica si realmente devuelve 55.

Como asignación adicional, modifica tu función range para que tome un tercer argumento opcional que indique el valor de “paso” utilizado al construir el array. Si no se proporciona un paso, los elementos deberían aumentar en incrementos de uno, correspondiendo al comportamiento anterior. La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. Asegúrate de que esto también funcione con valores de paso negativos, de modo que range(5, 2, -1) produzca [5, 4, 3, 2]. */

function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];
    
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum(range(1, 10))); // Debería imprimir 55
console.log(range(1, 10, 2)); // Debería imprimir [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // Debería imprimir [5, 4, 3, 2]
