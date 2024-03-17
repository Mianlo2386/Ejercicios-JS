/* Los arrays también tienen un método every análogo al método some. Este método devuelve true cuando la función dada devuelve true para cada elemento en el array. En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&.

Implementa every como una función que recibe un array y una función de predicado como parámetros. Escribe dos versiones, una usando un bucle y otra usando el método some. */

function every(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function every(array, predicate) {
    // La función every devuelve true si no hay algún elemento que no cumpla el predicado
    return !array.some(element => !predicate(element));
  }
  
  function some(array, predicate) {
    for (let element of array) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }

console.log(some([1, 3, 5], n => n < 10));
// → true
console.log(some([2, 4, 16], n => n < 10));
// → false
console.log(some([], n => n < 10));
// → true