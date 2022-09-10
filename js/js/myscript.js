console.log("hello")
// var ,let ,const
// var with in function scope
var a = 9;
{
let a = 20;
console.log(a);
var b = 50;
}

//let a = 7; // error already declared
console.error(a);
console.log(b);


var a = 5;
{
    let a;
    a = 9;
    console.log(a);
    
}
console.log(a);

// const variable

// const g = 20;
// console.log(g);
// g = 56;
// console.log(g)


var ab = "20";
var fc = 30;
var dc = ab + fc;
console.log(typeof dc);


var h = 10;
h = h-2; // h*=2

// 20230 20225*2 
var hj = "20"+2+"30"-"5"*2;


var sd = 2 ** 3;

console.log(sd);

var g = 2;
var j = -3;
var k = g ** j; 
console.log(k);
// +,-,*,/,%,**,+=,-=,*=,/=,**=,%=

var g = 10;
var k = 12;
console.log(g % k);


var h = 2;
var b = h;
h-=b**-2;
console.log(h)
//h= ?








