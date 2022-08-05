class Math_point {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const numbers = new Math_point(13, 56);


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

console.log("Resultado do add: "+add(numbers.x,numbers.y));
console.log("Resultado da sub: "+sub(1,2));
console.log("Resultado da div: "+div(1,2));
console.log("Resultado da mul: "+mul(1,2));


