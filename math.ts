
function add(x: number, y: number) {
    x = x+y;
    return x;
}

function sub(x: number, y: number) {
    x = x-y;
    return x;
}

function div(x: number, y: number) {
    x = x/y;
    return x;
}

function mul(x: number, y: number) {
    x = x*y;
    return x;
}

console.log("Resultado do add: "+add(1,2));
console.log("Resultado da sub: "+sub(1,2));
console.log("Resultado da div: "+div(1,2));
console.log("Resultado da mul: "+mul(1,2));
