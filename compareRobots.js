/* Es difícil comparar de manera objetiva los robots solo dejando que resuelvan algunos escenarios. Tal vez un robot simplemente tuvo tareas más fáciles o el tipo de tareas en las que es bueno, mientras que el otro no.

Escribe una función compareRobots que tome dos robots (y su memoria inicial). Debería generar 100 tareas y permitir que cada uno de los robots resuelva cada una de estas tareas. Cuando termine, debería mostrar el número promedio de pasos que cada robot dio por tarea.

Por el bien de la equidad, asegúrate de darle a cada tarea a ambos robots, en lugar de generar tareas diferentes por robot.

function compareRobots(robot1, memory1, robot2, memory2) {
  // Tu código aquí
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

Tendrás que escribir una variante de la función runRobot que, en lugar de registrar los eventos en la consola, devuelva el número de pasos que el robot tomó para completar la tarea.

Tu función de medición puede, entonces, en un bucle, generar nuevos estados y contar los pasos que toma cada uno de los robots. Cuando haya generado suficientes mediciones, puede usar console.log para mostrar el promedio de cada robot, que es el número total de pasos tomados dividido por el número de mediciones.
 */

const roads = [
    "Casa de Alice-Casa de Bob","Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos","Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie","Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete","Casa de Grete-Granja",
    "Casa de Grete-Tienda","Plaza de Mercado-Granja",
    "Plaza de Mercado-Oficina de Correos","Plaza de Mercado-Tienda",
    "Plaza de Mercado-Ayuntamiento","Tienda-Ayuntamiento"
  ];
  
  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (from in graph) {
        graph[from].push(to);
      } else {
        graph[from] = [to];
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);
  

function compareRobots(robot1, memory1, robot2, memory2) {
    let totalStepsRobot1 = 0;
    let totalStepsRobot2 = 0;
    const numTasks = 100;
  
    for (let i = 0; i < numTasks; i++) {
      let state = VillageState.random();
      
      // Ejecutar el primer robot y registrar el número de pasos
      let steps1 = runRobot(state, robot1, memory1);
      totalStepsRobot1 += steps1;
  
      // Ejecutar el segundo robot y registrar el número de pasos
      let steps2 = runRobot(state, robot2, memory2);
      totalStepsRobot2 += steps2;
    }
  
    // Calcular el promedio de pasos por tarea para cada robot
    const avgStepsRobot1 = totalStepsRobot1 / numTasks;
    const avgStepsRobot2 = totalStepsRobot2 / numTasks;
  
    // Mostrar los resultados
    console.log(`Robot 1: Promedio de pasos por tarea = ${avgStepsRobot1}`);
    console.log(`Robot 2: Promedio de pasos por tarea = ${avgStepsRobot2}`);
  }
  
  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  
    static random(parcelCount = 5) {
      let parcels = [];
      for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
          place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
      }
      return new VillageState("Oficina de Correos", parcels);
    }
  }
  
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }
  

  function runRobot(state, robot, memory) {
    let steps = 0;
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      steps++;
    }
    return steps;
  }
  
  function routeRobot(state, memory) {
    if (memory.length == 0) {
      let parcel = state.parcels[0];
      let destination;
      if (parcel.place != state.place) {
        destination = parcel.place;
      } else {
        destination = parcel.address;
      }
      let route = findRoute(roadGraph, state.place, destination);
      memory = route;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

  function goalOrientedRobot(state, memory) {
    if (memory.length == 0) {
      let parcel = state.parcels[0];
      let destination;
      if (parcel.place != state.place) {
        destination = parcel.place;
      } else {
        destination = parcel.address;
      }
      let route = findRoute(roadGraph, state.place, destination);
      memory = route;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

  /* ¿Puedes escribir un robot que termine la tarea de entrega más rápido que goalOrientedRobot? Si observas el comportamiento de ese robot, ¿qué cosas claramente absurdas hace? ¿Cómo podrían mejorarse?

  Si resolviste el ejercicio anterior, es posible que desees utilizar tu función compareRobots para verificar si mejoraste el robot. */

  function smartRobot({ place, parcels }, route) {
    if (route.length == 0) {
      // Si no hay una ruta establecida, calcular la mejor ruta
      let routes = [];
      for (let parcel of parcels) {
        if (parcel.place != place) {
          routes.push(findRoute(roadGraph, place, parcel.place));
        } else {
          routes.push(findRoute(roadGraph, place, parcel.address));
        }
      }
      // Ordenar las rutas por longitud y elegir la más corta
      route = routes.reduce((a, b) => (a.length < b.length ? a : b));
    }
    // Devolver el siguiente movimiento en la ruta
    return { direction: route[0], memory: route.slice(1) };
  }
  
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);
  