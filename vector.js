/* Escribe una clase Vec en JS que represente un vector en el espacio bidimensional. Toma los parámetros x e y (números), que debería guardar en propiedades del mismo nombre.

Dale a la clase Vec dos métodos en su prototipo, plus y minus, que tomen otro vector como parámetro y devuelvan un nuevo vector que tenga la suma o la diferencia de los valores x e y de los dos vectores (this y el parámetro).

Agrega una propiedad getter length al prototipo que calcule la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0). */

  class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Método para sumar otro vector
    plus(otherVec) {
      return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }
  
    // Método para restar otro vector
    minus(otherVec) {
      return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
  
    // Getter para calcular la longitud del vector
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  
  // Ejemplo de uso
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5
  