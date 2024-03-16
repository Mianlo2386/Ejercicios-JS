/* El operador == compara objetos por identidad, pero a veces preferirías comparar los valores de sus propiedades reales.

Escribe una función deepEqual que tome dos valores y devuelva true solo si son el mismo valor o son objetos con las mismas propiedades, donde los valores de las propiedades son iguales cuando se comparan con una llamada recursiva a deepEqual.

Para saber si los valores deben compararse directamente (usando el operador === para eso) o si sus propiedades deben compararse, puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero debes tener en cuenta una excepción tonta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil cuando necesites recorrer las propiedades de los objetos para compararlas. */

function deepEqual(value1, value2) {
    // Si los valores son estrictamente iguales, retornamos true
    if (value1 === value2) {
        return true;
    }
    
    // Si alguno de los valores no es un objeto o es null, retornamos false
    if (!(typeof value1 == "object" && value1 != null) ||
        !(typeof value2 == "object" && value2 != null)) {
        return false;
    }

    // Obtenemos las claves de los objetos
    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);

    // Si la cantidad de claves es diferente, los objetos no son iguales
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Iteramos sobre las claves y comparamos recursivamente los valores
    for (let key of keys1) {
        // Verificamos si el otro objeto también tiene la misma propiedad
        if (!keys2.includes(key)) {
            return false;
        }
        // Comparamos recursivamente los valores de las propiedades
        if (!deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    // Si todas las comparaciones anteriores pasaron, los objetos son iguales
    return true;
}

// Ejemplos de uso
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true

