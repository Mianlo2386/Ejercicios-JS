/* Esta vez no hay historia ni teoría. Los siguientes ejemplos le muestran cómo escribir la función accum: El parámetro de accum es una cadena que incluye sólo letras de a..z y A..Z.*/

function accum(s) {
    // Convierte la cadena a minúsculas para asegurar consistencia
    s = s.toLowerCase();
    
    // Inicializa una variable para almacenar el resultado
    let result = "";

    // Itera sobre cada letra en la cadena
    for (let i = 0; i < s.length; i++) {
        // Agrega la letra en mayúsculas al resultado
        result += s[i].toUpperCase();
        
        // Agrega la letra en minúsculas repetida i veces al resultado
        result += s[i].repeat(i);
        
        // Si no es la última letra, agrega un guión al resultado
        if (i !== s.length - 1) {
            result += "-";
        }
    }
    
    return result;
}

// Ejemplos
console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
