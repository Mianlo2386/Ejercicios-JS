/* Dirección de escritura dominante

Escribe una función que calcule la dirección de escritura dominante en una cadena de texto. Recuerda que cada objeto script tiene una propiedad direction que puede ser "ltr" (de izquierda a derecha), "rtl" (de derecha a izquierda) o "ttb" (de arriba a abajo). */

const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[0x0000, 0x007F], [0x0080, 0x00FF], [0x0100, 0x017F]],
      direction: "ltr"
    },
    {
      name: "Arabic",
      ranges: [[0x0600, 0x06FF], [0x0750, 0x077F], [0xFB50, 0xFCFF], [0xFE70, 0xFEFF]],
      direction: "rtl"
    },
]

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  // Ejemplos de uso:
  console.log(dominantDirection("Hello!")); // → ltr
  console.log(dominantDirection("Hey, مساء الخير")); // → rtl
  