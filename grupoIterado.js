/* Haz que la clase Group del ejercicio anterior sea iterable. Refiérete a la sección sobre la interfaz del iterador anteriormente en el capítulo si no tienes claro la forma exacta de la interfaz.

Si utilizaste un array para representar los miembros del grupo, no devuelvas simplemente el iterador creado al llamar al método Symbol.iterator en el array. Eso funcionaría, pero va en contra del propósito de este ejercicio.

Está bien si tu iterador se comporta de manera extraña cuando el grupo se modifica durante la iteración.
Probablemente valga la pena definir una nueva clase GroupIterator. Las instancias del iterador deberían tener una propiedad que rastree la posición actual en el grupo. Cada vez que se llama a next, verifica si ha terminado y, si no, avanza más allá del valor actual y lo devuelve.

La clase Group en sí misma obtiene un método nombrado Symbol.iterator que, al ser llamado, devuelve una nueva instancia de la clase iteradora para ese grupo. */

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    // Método para obtener el iterador del grupo
    [Symbol.iterator]() {
      return new GroupIterator(this); // Devuelve una nueva instancia de GroupIterator
    }
  
    // Método estático para crear un grupo a partir de un objeto iterable
    static from(iterable) {
      const group = new Group(); // Crea un nuevo grupo
      for (let value of iterable) {
        group.add(value); // Agrega cada valor del iterable al grupo
      }
      return group; // Devuelve el grupo creado
    }
  }
  
  // Clase para el iterador de Group
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    // Método para avanzar al siguiente valor del grupo
    next() {
      if (this.position >= this.group.members.length) {
        return { value: undefined, done: true }; // Indica que se ha terminado la iteración
      }
  
      const result = {
        value: this.group.members[this.position], // Obtiene el siguiente valor del grupo
        done: false // Indica que la iteración no ha terminado
      };
  
      this.position++; // Avanza la posición para el próximo valor
      return result;
    }
  }
  
  // Ejemplo de uso
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // Output:
  // a
  // b
  // c
  