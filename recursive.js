function fact(n) {
    if (n <= 1) return 1

    n * fact(n - 1)
}

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n-1) + fib(n-2)
}

console.log("Factrial: " + fact(120))
console.log("Fibonacci: " + fib(120))
