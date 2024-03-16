/* Hemos visto que podemos usar % (el operador de resto) para verificar si un número es par o impar al usar % 2 para ver si es divisible por dos. Aquí hay otra forma de definir si un número entero positivo es par o impar:

    El cero es par.

    El uno es impar.

    Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva isEven que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes pensar en una forma de solucionarlo? */
function isEven(n){
    if (n<0){
        return isEven(-n)
    }else{
        if(n==0){
            return true
            }else if(n==1){
             return false
            }else{
             return isEven(n-2)
            }
          }
    }
    
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??