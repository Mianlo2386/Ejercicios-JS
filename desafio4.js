/* Escriba una función que, cuando se le proporcione una URL como un string, analice solo el nombre de dominio y lo devuelva como un string. Por ejemplo:

    url = "http://github.com/"      -> domain name = "github"
    url = "www.zombie-bites.com"         -> domain name = "zombie-bites"
    url = "www.cnet.com"                -> domain name = cnet"


Por si no se entendio:

function url("www.zombie-bites.com"){
         //aca va la magia
         return "zombie-bites";
}
 */
function obtenerNombreDominio(url) {
    // Remover el protocolo (http://, https://, etc.) si está presente
    var dominioSinProtocolo = url.replace(/(^\w+:|^)\/\//, '');
  
    // Remover www. si está presente
    dominioSinProtocolo = dominioSinProtocolo.replace(/^www\./, '');
  
    // Extraer solo el nombre de dominio (sin el subdominio ni el sufijo)
    var nombreDominio = dominioSinProtocolo.split('.')[0];
  
    return nombreDominio;
  }
  
  // Ejemplos de uso
  console.log(obtenerNombreDominio("http://github.com/"));       // "github"
  console.log(obtenerNombreDominio("www.zombie-bites.com"));     // "zombie-bites"
  console.log(obtenerNombreDominio("www.cnet.com"));             // "cnet"
  