function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // → 8

  /* La función power toma dos parámetros, base y exponent.

  Chequeo de caso base: Dentro de la función, se verifica si exponent es igual a 0. Si es así, la función devuelve 1, ya que cualquier número elevado a la potencia 0 es 1.

  Caso recursivo: Si exponent no es 0, la función devuelve base multiplicado por power(base, exponent - 1). Esto significa que la función se llama a sí misma con la base y el exponente reducidos en 1 en cada iteración, hasta que el exponente sea 0 y se alcance el caso base.

Vamos a analizar el caso con power(2, 3):

  En la primera llamada a la función, exponent no es 0, por lo que se ejecuta la parte del else. Devuelve base (que es 2) multiplicado por power(base, exponent - 1), es decir, power(2, 2).
  En la segunda llamada, nuevamente exponent no es 0, por lo que se ejecuta la parte del else y devuelve base (2) multiplicado por power(base, exponent - 1) que es power(2, 1).
  En la tercera llamada, exponent aún no es 0, entonces nuevamente se llama a power(2, 0).
  En la cuarta llamada, exponent es 0, por lo que se ejecuta el caso base y devuelve 1.
  Ahora, vamos deshaciendo las llamadas recursivas: power(2, 0) devuelve 1, por lo que power(2, 1) devuelve 2 * 1 = 2, luego power(2, 2) devuelve 2 * 2 = 4, y finalmente power(2, 3) devuelve 2 * 4 = 8.

Por lo tanto, console.log(power(2, 3)); imprime 8. */