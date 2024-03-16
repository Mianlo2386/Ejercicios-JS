/* Acá les dejo el desafío:
Complete la solución para que divida el string en pares de dos caracteres.
Si el string contiene un número impar de caracteres, entonces debe reemplazar el segundo carácter que falta del par final con un guion bajo .La función que cree deberá retornar el resultado en una array. El UNICO método que pueden usar es .push() para el array y .length() para el string.

Ejemplo:
function solucion("abc"){
    return ['ab', 'c_'];//al lado de la c va un guion bajo, no entiendo porque no lo muestra 🙂
}

o

function solucion("abcdef){
    return ['ab', 'cd', 'ef'];
}

Una pista?
el operador modulo(%), también le dicen resto, los puede ayudar.

Cualquier duda que tengan, pregunten sin drama. */

function solucion(str) {
    var result = [];
    for (var i = 0; i < str.length; i += 2) {
      if (i === str.length - 1) {
        result.push(str[i] + '_');
      } else {
        result.push(str[i] + str[i + 1]);
      }
    }
    return result;
  }
  
  // Ejemplos de uso
  console.log(solucion("abc")); // ['ab', 'c_']
  console.log(solucion("abcdef")); // ['ab', 'cd', 'ef']
  