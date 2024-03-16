/* Hay dos formas obvias de implementar reverseArray. La primera es simplemente recorrer el array de entrada de principio a fin y usar el método unshift en el nuevo array para insertar cada elemento en su inicio. La segunda es recorrer el array de entrada hacia atrás y utilizar el método push. Iterar sobre un array hacia atrás requiere una especificación de bucle (algo incómoda), como (let i = array.length - 1; i >= 0; i--).

Invertir el array en su lugar es más difícil. Debes tener cuidado de no sobrescribir elementos que necesitarás más adelante. Utilizar reverseArray o copiar todo el array de otra manera (usar array.slice() es una buena forma de copiar un array) funciona pero es hacer trampa.

El truco consiste en intercambiar el primer y último elementos, luego el segundo y el penúltimo, y así sucesivamente. Puedes hacer esto recorriendo la mitad de la longitud del array (utiliza Math.floor para redondear hacia abajo, no necesitas tocar el elemento central en un array con un número impar de elementos) e intercambiando el elemento en la posición i con el que está en la posición array.length - 1 - i. Puedes utilizar una asignación local para retener brevemente uno de los elementos, sobrescribirlo con su imagen reflejada, y luego colocar el valor de la asignación local en el lugar donde solía estar la imagen reflejada. */

function reverseArray(arr){
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        
        newArray.unshift(arr[i]);
    }
    return newArray
}
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/* En cuanto a qué variante sería más útil en más situaciones, depende del contexto y de los requisitos del programa:

    La función reverseArray es más adecuada cuando necesitas mantener el array original intacto y quieres crear un nuevo array con los elementos invertidos. Es una función pura ya que no modifica el array original.

    La función reverseArrayInPlace es útil cuando se necesita invertir el orden de los elementos en el mismo array dado. Esta función modifica el array original y es más eficiente en términos de rendimiento, especialmente para grandes conjuntos de datos. Sin embargo, tiene el efecto secundario de alterar el array original.

En cuanto a la velocidad de ejecución, reverseArrayInPlace suele ser más rápido ya que no necesita crear un nuevo array, pero nuevamente, la diferencia puede ser insignificante en la práctica, especialmente con arrays pequeños. La prioridad debe ser la claridad del código y la adecuación a los requisitos del programa. */