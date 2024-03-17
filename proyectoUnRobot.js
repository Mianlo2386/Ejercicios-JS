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
  }

  let first = new VillageState(
    "Oficina de Correos",
    [{place: "Oficina de Correos", address: "Casa de Alice"}]
  );
  let next = first.move("Casa de Alice");
  
  console.log(next.place);
  // → Casa de Alice
  console.log(next.parcels);
  // → []
  console.log(first.place);
  // → Oficina de Correos

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);
// → 

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

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }

  VillageState.random = function(parcelCount = 5) {
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
  };
  runRobot(VillageState.random(), randomRobot);
// → Movido a Mercado
// → Movido a Ayuntamiento
// → …
// → Terminado en 63 turnos
const mailRoute = [
    "Casa de Alice", "Cabaña", "Casa de Alice", "Casa de Bob",
    "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
    "Casa de Grete", "Tienda", "Casa de Grete", "Granja",
    "Plaza del Mercado", "Oficina de Correos"
  ];

  function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
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