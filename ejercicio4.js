function decode(message) {
    const stack = [];
    let result = "";

    for (const char of message) {
        if (char === "(") {
            stack.push(result);
            result = "";
        } else if (char === ")") {
            result = stack.pop() + result.split("").reverse().join("");
        } else {
            result += char;
        }
    }

    return result;
}

// Ejemplos de uso:
const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus