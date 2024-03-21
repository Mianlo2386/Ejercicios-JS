/* Code golf es un término utilizado para el juego de intentar expresar un programa en particular con la menor cantidad de caracteres posible. De manera similar, regexp golf es la práctica de escribir una expresión regular lo más pequeña posible para que coincida con un patrón dado, y solo ese patrón.

Para cada uno de los siguientes elementos, escribe una expresión regular para comprobar si el patrón dado ocurre en una cadena. La expresión regular debe coincidir solo con cadenas que contengan el patrón. Cuando tu expresión funcione, verifica si puedes hacerla más pequeña.

    car y cat

    pop y prop

    ferret, ferry y ferrari

    Cualquier palabra que termine en ious

    Un carácter de espacio en blanco seguido de un punto, coma, dos puntos o punto y coma

    Una palabra con más de seis letras

    Una palabra sin la letra e (o E)
 */


verify(/ca[r|t]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\b\w{7,}\b/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/\b[^\WeE]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
/* Estilo de comillas

Imagina que has escrito una historia y usaste comillas simples single-quote character para marcar piezas de diálogo. Ahora quieres reemplazar todas las comillas de diálogo con comillas dobles, manteniendo las comillas simples utilizadas en contracciones como aren’t.

Piensa en un patrón que distinga estos dos tipos de uso de comillas y crea una llamada al método replace que realice el reemplazo adecuado. */

let text = "'I'm the cook,' he said, 'it's my job.'";
text = text.replace(/(^|\s)'|'(\s|$)/g, '$1"$2'); // Reemplaza comillas simples al principio, al final o seguidas por espacios.
console.log(text.replace(/\b'\B|\B'\b/g, '"')); // Reemplaza comillas simples que no están precedidas por "n" o "t" y seguidas por una palabra.
// → "I'm the cook," he said, "it's my job."

/* Números nuevamente

Escribe una expresión que coincida solo con los números al estilo de JavaScript. Debe admitir un signo menos o más opcional delante del número, el punto decimal y la notación de exponente—5e-3 o 1E10—de nuevo con un signo opcional delante del exponente. También ten en cuenta que no es necesario que haya dígitos delante o después del punto, pero el número no puede ser solo un punto. Es decir, .5 y 5. son números de JavaScript válidos, pero un punto solitario no lo es. */

let number = /^[+\-]?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+\-]?\d+)?$/;

// Pruebas:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}





