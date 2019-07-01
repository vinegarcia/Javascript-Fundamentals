const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,3);
val = Math.min(8,3,23,4235,54,7,123);
val = Math.max(8,3,23,4235,54,7,123);
val = Math.random();

val = Math.floor(Math.random(val) * 10 + 1); //random no decimal

// val = Math.random(val) * 10 + 1; random decimal

console.log(val);