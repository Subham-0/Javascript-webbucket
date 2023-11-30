/*There are two datatype in js
1 primitive dataatype
2 reference datatype */



/*Number
String
Boolean
BigInt
undefined
null 
Symbol
Object*/

let num = 50;
console.log(num);
console.log(typeof (num));

let name = "sita";
let name1 = 'Ram';
console.log(name);
console.log(name1);
console.log(typeof (name));

let fact = true;
let non_fact = false;
console.log(fact);
console.log(non_fact);
console.log(5 != 4);

let num3 = 58n;
console.log(typeof (num3));
let num2 = 10000000000000000n;
console.log(typeof (num2));

/*const a;
console.log(a);
 Missing initializer in const declaration*/

let a = null;
console.log(typeof (a));

let b ;
console.log(b);
b = 23;
/* this is hoisting define then print then initialised*/
