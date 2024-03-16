const roundTo = function(n, step) {
    let resto = n % step;
    return n - resto + (resto < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(23, 10));
  // → 20

  //CON FUNCION FLECHA SERIA ASI:

  const roundTo2 = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  console.log(roundTo2(28, 10));
  // → 30

  /* La flecha viene después de la lista de parámetros y es seguida por el cuerpo de la función. Expresa algo así como “esta entrada (los parámetros) produce este resultado (el cuerpo)”. */

  function roundTo3(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo3(4.5));
  // → 5
  console.log(roundTo3(4.5, 2));
  // → 4