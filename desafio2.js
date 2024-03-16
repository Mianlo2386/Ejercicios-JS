/* Vamos por el segundo:
Complete la solución para que la función separe, dentro de un string, las palabras que terminen con minúsculas y empiecen con mayúsculas con un espacio.

Ejemplo:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */
function separarPalabras(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      // Si el carácter actual es mayúscula y el siguiente es minúscula, agregar un espacio
      if (str[i] === str[i].toUpperCase() && str[i + 1] === str[i + 1].toLowerCase()) {
        result += ' ';
      }
      result += str[i];
    }
    return result;
  }
  
  // Ejemplos de uso
  console.log(separarPalabras("camelCasing")); // "camel Casing"
  console.log(separarPalabras("identifier"));  // "identifier"
  console.log(separarPalabras(""));            // ""
  