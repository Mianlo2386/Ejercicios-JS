/* Grupo persistente

La mayoría de las estructuras de datos proporcionadas en un entorno estándar de JavaScript no son muy adecuadas para un uso persistente. Los Arrays tienen métodos slice y concat, que nos permiten crear fácilmente nuevos arrays sin dañar el antiguo. Pero Set, por ejemplo, no tiene métodos para crear un nuevo conjunto con un elemento añadido o eliminado.

Escribe una nueva clase PGroup, similar a la clase Grupo del Capítulo 6, que almacena un conjunto de valores. Al igual que Grupo, tiene métodos add, delete, y has.

Sin embargo, su método add debería devolver una nueva instancia de PGroup con el miembro dado añadido y dejar la anterior sin cambios. De manera similar, delete crea una nueva instancia sin un miembro dado.

La clase debería funcionar para valores de cualquier tipo, no solo para strings. No tiene que ser eficiente cuando se utiliza con grandes cantidades de valores.

El constructor no debería ser parte de la interfaz de la clase (aunque definitivamente querrás usarlo internamente). En su lugar, hay una instancia vacía, PGroup.empty, que se puede usar como valor inicial.

¿Por qué necesitas solo un valor PGroup.empty, en lugar de tener una función que cree un nuevo mapa vacío cada vez?

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
La forma más conveniente de representar el conjunto de valores miembro sigue siendo como un array, ya que los arrays son fáciles de copiar.

Cuando se añade un valor al grupo, puedes crear un nuevo grupo con una copia del array original que tenga el valor añadido (por ejemplo, usando concat). Cuando se elimina un valor, puedes filtrarlo del array.

El constructor de la clase puede tomar dicho array como argumento y almacenarlo como propiedad única de la instancia. Este array nunca se actualiza.

Para añadir la propiedad empty al constructor, puedes declararla como una propiedad estática.

Solo necesitas una instancia empty porque todos los grupos vacíos son iguales y las instancias de la clase no cambian. Puedes crear muchos grupos diferentes a

partir de ese único grupo vacío sin afectarlo. */

class PGroup {
    constructor(members) {
      this.members = members;
    }
  
    add(value) {
      if (this.has(value)) return this;
      return new PGroup(this.members.concat(value));
    }
  
    delete(value) {
      if (!this.has(value)) return this;
      return new PGroup(this.members.filter(m => m !== value));
    }
  
    has(value) {
      return this.members.includes(value);
    }
  }
  
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b")); // true
  console.log(a.has("b")); // false
  console.log(b.has("a")); // false
  
/* 
  En esta implementación, la clase PGroup tiene un constructor que acepta un array members como argumento y lo almacena como propiedad de la instancia. Los métodos add, delete y has manipulan esta propiedad members sin modificar el array original.

El método add devuelve un nuevo objeto PGroup con el valor añadido si no estaba presente en el conjunto original. Si el valor ya está presente, simplemente devuelve el grupo original sin cambios.

El método delete devuelve un nuevo objeto PGroup con el valor eliminado si estaba presente en el conjunto original. Si el valor no está presente, devuelve el grupo original sin cambios.

El método has simplemente comprueba si el valor dado está presente en el conjunto.

La propiedad estática empty se inicializa como un nuevo PGroup con un array vacío como miembros, lo que representa un conjunto vacío. */