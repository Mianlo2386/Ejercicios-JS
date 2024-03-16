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