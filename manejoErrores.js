/* Imagina que tienes una función primitiveMultiply que en el 20 por ciento de los casos multiplica dos números y en el otro 80 por ciento arroja una excepción del tipo MultiplicatorUnitFailure. Escribe una función que envuelva esta función problemática y siga intentando hasta que una llamada tenga éxito, momento en el que devuelva el resultado.

Asegúrate de manejar solo las excepciones que estás intentando manejar.
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Tu código aquí.
}

console.log(reliableMultiply(8, 8));
// → 64
La llamada a primitiveMultiply definitivamente debería ocurrir en un bloque try. El bloque catch correspondiente debería relanzar la excepción cuando no sea una instancia de MultiplicatorUnitFailure y asegurarse de que la llamada se reintente cuando lo sea.

Para hacer el reintentamiento, puedes usar un bucle que se detenga solo cuando una llamada tiene éxito, como en el ejemplo de look anterior en este capítulo, o usar la recursión y esperar que no tengas una cadena tan larga de fallos que colapse la pila (lo cual es bastante improbable). */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error; // Relanza la excepción si no es del tipo esperado
      }
      // Si la excepción es de tipo MultiplicatorUnitFailure, reintenta
      console.log("Multiplicación fallida, reintentando...");
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64

/* Considera el siguiente objeto (bastante artificial):

const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("¡Cerrado con llave!");
    return this.#content;
  }
};

Es una caja con una cerradura. Hay un array en la caja, pero solo puedes acceder a él cuando la caja está desbloqueada.

Escribe una función llamada withBoxUnlocked que reciba como argumento un valor de función, desbloquee la caja, ejecute la función y luego asegure que la caja esté cerrada de nuevo antes de devolverla, independientemente de si la función de argumento devolvió normalmente o lanzó una excepción. */

/* const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

Para puntos adicionales, asegúrate de que si llamas a withBoxUnlocked cuando la caja ya está desbloqueada, la caja permanezca desbloqueada. */

const box = new class {
    locked = true;
    #content = [];
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("¡Cerrado con llave!");
      return this.#content;
    }
  };
  
  function withBoxUnlocked(body) {
    const wasLocked = box.locked; // Almacena si la caja estaba bloqueada originalmente
    
    try {
      if (wasLocked) {
        box.unlock(); // Desbloquea la caja si estaba bloqueada originalmente
      }
      body(); // Ejecuta la función pasada como argumento
    } finally {
      if (wasLocked) {
        box.lock(); // Bloquea la caja nuevamente si estaba bloqueada originalmente
      }
    }
  }
  
  // Ejemplo de uso
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(() => {
      throw new Error("¡Piratas en el horizonte! ¡Abortar!");
    });
  } catch (e) {
    console.log("Error lanzado: " + e);
  }
  console.log(box.locked); // → true
  