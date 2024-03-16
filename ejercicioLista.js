/* Como bloques genéricos de valores, los objetos se pueden utilizar para construir todo tipo de estructuras de datos. Una estructura de datos común es la lista (no confundir con arrays). Una lista es un conjunto anidado de objetos, donde el primer objeto contiene una referencia al segundo, el segundo al tercero, y así sucesivamente:

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}; */

/* Los objetos resultantes forman una cadena, como se muestra en el siguiente diagrama:
Un diagrama que muestra la estructura de memoria de una lista enlazada. Hay 3 celdas, cada una con un campo de valor que contiene un número y un campo 'rest' con una flecha que apunta al resto de la lista. La flecha de la primera celda apunta a la segunda celda, la flecha de la segunda celda apunta a la última celda y el campo 'rest' de la última celda contiene nulo.

Una ventaja de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos nuevos valores {value: 0, rest: list} y {value: -1, rest: list} (siendo list la referencia definida anteriormente), son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo válida como una lista de tres elementos.

Escribe una función arrayToList que construya una estructura de lista como la mostrada cuando se le da [1, 2, 3] como argumento. También escribe una función listToArray que produzca un array a partir de una lista. Agrega las funciones auxiliares prepend, que toma un elemento y una lista y crea una nueva lista que añade el elemento al principio de la lista de entrada, y nth, que toma una lista y un número y devuelve el elemento en la posición dada en la lista (siendo cero el primer elemento) o undefined cuando no hay tal elemento.

Si aún no lo has hecho, escribe también una versión recursiva de nth. */

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let nodo = list; nodo; nodo = nodo.rest) {
        array.push(list.value);
        list = list.rest;
    } 
   return array;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function nth(list, position) {
    if (!list) return undefined;
    let current = list;
    for (let i = 0; i < position; i++) {
        if (!current.rest) return undefined;
        current = current.rest;
    }
    return current.value;
}

//VERSION RECURSIVA

function nthRecursive(list, position) {
    if (!list) return undefined; // Si la lista es vacía, devuelve undefined
    if (position === 0) return list.value; // Si la posición es 0, devuelve el valor del elemento actual
    return nthRecursive(list.rest, position - 1); // Llamada recursiva con el resto de la lista y la posición decrementada
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20