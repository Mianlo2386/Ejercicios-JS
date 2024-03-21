/* Cree un programa que filtre una lista de cadenas y devuelva una lista que contenga solo el nombre de sus amigos.

Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro de que tiene que ser un amigo tuyo! De lo contrario, puedes estar seguro de que no... */

const friend = ["Ryan", "Kieran", "Mark"];
let onlyFriends = [];
for (let index = 0; index < friend.length; index++) {
    
    if(friend[index].length === 4){
        onlyFriends.push(friend[index])
    }
   
}
console.log(onlyFriends);

//OTRO MODO

function filtrarAmigos(lista) {
    return lista.filter(nombre => nombre.length === 4);
  }
  
  // Ejemplo de uso:
  const listaDeNombres = ["Juan", "Pedro", "Ana", "Luisa", "Paco", "María"];
  const amigos = filtrarAmigos(listaDeNombres);
  console.log("Amigos:", amigos);
  