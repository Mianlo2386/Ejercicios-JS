/* Aplanamiento

Utiliza el método reduce en combinación con el método concat para “aplanar” un array de arrays en un único array que contenga todos los elementos de los arrays originales. */

let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
  
  console.log(flattenedArray)

// → [1, 2, 3, 4, 5, 6]
/* 
La sintaxis básica de reduce() es la siguiente:

javascript

array.reduce(callback(accumulator, currentValue, index, array), initialValue)

    callback: La función de reducción que se aplicará a cada elemento del array. Toma cuatro argumentos:
        accumulator: El valor acumulado resultante de las llamadas anteriores a la función de reducción, o el valor inicial si se proporciona.
        currentValue: El valor actual del elemento siendo procesado en el array.
        index (opcional): El índice del elemento actual que se está procesando.
        array (opcional): El array sobre el cual se está iterando.

    initialValue (opcional): Un valor inicial para el acumulador. Si se proporciona, la función de reducción comenzará con este valor. Si no se proporciona, la función de reducción comenzará con el primer elemento del array. */