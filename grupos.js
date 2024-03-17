/* El entorno estándar de JavaScript proporciona otra estructura de datos llamada Set. Al igual que una instancia de Map, un conjunto contiene una colección de valores. A diferencia de Map, no asocia otros valores con esos, solo realiza un seguimiento de qué valores forman parte del conjunto. Un valor puede formar parte de un conjunto solo una vez: agregarlo nuevamente no tiene ningún efecto.

Escribe una clase llamada Group (ya que Set está siendo utilizado). Al igual que Set, tiene los métodos add, delete y has. Su constructor crea un grupo vacío, add agrega un valor al grupo (pero solo si aún no es miembro), delete elimina su argumento del grupo (si era miembro), y has devuelve un valor booleano que indica si su argumento es miembro del grupo.

Usa el operador ===, o algo equivalente como indexOf, para determinar si dos valores son iguales.

Dale a la clase un método estático from que tome un objeto iterable como argumento y cree un grupo que contenga todos los valores producidos al iterar sobre él. */

class Group {
    constructor() {
      this.members = []; // Almacena los miembros del grupo en un array
    }
  
    // Método para agregar un valor al grupo si aún no es miembro
    add(value) {
      if (!this.has(value)) {
        this.members.push(value); // Agrega el valor al array si no está presente
      }
    }
  
    // Método para eliminar un valor del grupo
    delete(value) {
      this.members = this.members.filter(v => v !== value); // Filtra el array para eliminar el valor
    }
  
    // Método para verificar si un valor es miembro del grupo
    has(value) {
      return this.members.includes(value); // Verifica si el array incluye el valor
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
  
  // Ejemplo de uso
  let group = Group.from([10, 20]);
  console.log(group.has(10)); // Output: true
  console.log(group.has(30)); // Output: false
  group.add(10);
  group.delete(10);
  console.log(group.has(10)); // Output: false
  