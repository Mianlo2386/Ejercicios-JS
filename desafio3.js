/* La función rgb está incompleta. Complételo de modo que al pasar valores decimales RGB se devuelva una representación hexadecimal. Los valores decimales válidos para RGB son 0 - 255. Cualquier valor que quede fuera de ese rango debe redondearse al valor válido más cercano.

Ejemplos (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

En criollo...
function rgb(255, 255, 255){
     //sus hermosos codigos aqui
     return "FFFFFF";
}

Nota de color🤭 : si un numero ingresado por parámetro es negativo, es igual a 0 y si es mayor a 255 es igual a FF. */

function rgb(r, g, b) {
    // Función para redondear un número al rango válido (0-255)
    function clamp(value) {
      return Math.max(0, Math.min(255, Math.round(value)));
    }
  
    // Redondear los valores de r, g, b al rango válido (0-255)
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);
  
    // Convertir los valores a hexadecimal y concatenarlos
    var hexR = r.toString(16).padStart(2, '0').toUpperCase();
    var hexG = g.toString(16).padStart(2, '0').toUpperCase();
    var hexB = b.toString(16).padStart(2, '0').toUpperCase();
  
    // Devolver la representación hexadecimal concatenada
    return hexR + hexG + hexB;
  }
  
  // Ejemplos de uso
  console.log(rgb(255, 255, 255)); // "FFFFFF"
  console.log(rgb(255, 255, 300)); // "FFFFFF"
  console.log(rgb(0, 0, 0));       // "000000"
  console.log(rgb(148, 0, 211));   // "9400D3"
  