function ruidosa(f) {
    return (...args) => {
      console.log("llamando con", args);
      let resultado = f(...args);
      console.log("llamado con", args, ", devolvió", resultado);
      return resultado;
    };
  }
  ruidosa(Math.min)(3, 2, 1);
  // → llamando con [3, 2, 1]
  // → llamado con [3, 2, 1] , devolvió 1