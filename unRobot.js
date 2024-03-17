/* Nuestro proyecto en este capítulo es construir un autómata, un pequeño programa que realiza una tarea en un mundo virtual. Nuestro autómata será un robot de entrega de correo que recoge y deja paquetes. */

// Función para construir el grafo a partir de las carreteras
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
  
  // Array de carreteras
  const roads = [
    "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Plaza de Mercado-Granja",
    "Plaza de Mercado-Oficina de Correos", "Plaza de Mercado-Tienda",
    "Plaza de Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
  ];
  
  // Crear el grafo de carreteras
  const roadGraph = buildGraph(roads);
  
  // Clase para representar el estado de la aldea
  class VillageState {
    constructor(place, parcels) {
      this.place = place; // Lugar actual del robot
      this.parcels = parcels; // Paquetes en la aldea
    }
  
    // Método para mover el robot a un nuevo lugar
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this; // No se puede mover a destino
      } else {
        // Actualizar la ubicación del robot y los paquetes
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
    static random(parcelCount = 5) {
        let parcels = [];
        // Lógica para generar paquetes aleatorios
        return new VillageState("Oficina de Correos", parcels);
      }
  }
  
  let initialState = VillageState.random();
  
  // Función para elegir aleatoriamente un elemento de un array
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  // Robot aleatorio que se mueve en una dirección aleatoria
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }
  
  // Función para encontrar una ruta desde un lugar de inicio a un destino
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
  
  // Robot orientado a objetivos que entrega los paquetes de manera eficiente
  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }
  
  // Función para ejecutar la simulación del robot
  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Terminado en ${turn} turnos`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Movido a ${action.direction}`);
    }
  }
  
  // Simulación del robot aleatorio
  runRobot(VillageState.random(), randomRobot);
  
  // Simulación del robot orientado a objetivos
  runRobot(VillageState.random(), goalOrientedRobot, []);
  