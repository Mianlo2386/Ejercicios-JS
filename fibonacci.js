/*Un número Fibonacci, usualmente con notación f(n), es la suma de los dos números fibonacci que le preceden. Esta sucesión empieza con f(0) = 0, f(1) = 1, f(2) = f(1) + f(0) hasta f(x) = f(x-1) + f(x-2). 
Veremos tres manera, la última con una optimización */

//RECURSION

var fib = function(n) {
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}
console.log(fib(5));
// 5

//Top-down

var fib2 = function(n) {
    const map = new Map(); // creamos un mapa para guardar los valores

    const dp = (x) => {
        if (x <= 1) return x;

        if (!map.has(x)) { // si NO hemos calculado el resultado
            map.set(x, dp(x-1) + dp(x-2)) // lo calculamos y guardamos el valor
        }

        return map.get(x);
    }

    return dp(n);
};

console.log(fib2(5));
//5

//Bottom-Up

var fib3 = function(n) {
    const sol = [0, 1];

    for (let i = 2; i<= n; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
    }

    return sol[n];
};
console.log(fib3(5));
//5 

//Optimización Bottom-Up

var fib4 = function(n) {

    if (n <= 1) return n;

    let prev2 = 0;
    let prev1 = 1;
    let c = 0;

    for (let i = 2; i<= n; i++) {
        c = prev1 + prev2;
        prev2 = prev1;
        prev1 = c;
    }

    return c;
};

console.log(fib4(5));       
//5