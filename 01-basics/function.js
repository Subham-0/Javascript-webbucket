// what is function?
//Function is a piece of code. if we want to use it in the same file or another file we dont need to write again and again. It gives the reusability feature so it decreases redundancy and space.

// Function definition : where we define the function by using function keyword.
// Function  body starts and ends with {}(curly braces) .
// Without function call we cannot execute the function. so for executing the function we must call the function.


function reuse(){
    console.log('a');
    console.log('b');
    console.log('c');
    console.log('d');

}
reuse();
//reuse();
//reuse();
//reuse();

function addTwonumber(){  //function defination
    let a = 10;
    let b  = 34;
    console.log(a+b);
}
addTwonumber();            //function call




function addNos(num1,num2){     // here num1 and num2 are parameter of the function
    console.log(`Addition of two number is ${num1+num2}`)
}
addNos(3,5);                    //here 3 and 5 are argument of the function


// function addingNos (num1,num2) {     //this code will give an error 
//     sum = num1 + num2;
//     console.log(sum);
// }
// const sum = addingNos(10,20);
// console.log(sum); 



function assinfNos (num1,num2){
    return num1+num2;
    //console.log("hello");         // can not accessible because return is the exit point of function

}
let sum = assinfNos(10,34);
console.log(sum);
console.log( assinfNos(10,34));

function user(username){
    if(username=== undefined){
        console.log(`${username},please enter a valid username`);
        return
    }
    console.log(`${username}:,hello guys good evening`)
}
user();

function addInYourCart(...rest_values){
    //spread operator or rest operator
    //console.log(value1);
    //console.log(value2);
    console.log(rest_values);
}
addInYourCart(100,200,300,400);


const user1 = {                 //function inside a object
    username :'subham',
    location : 'KDP',
    userMessage: function(){
        let name = user1.username;
        console.log(`Hello Everyone, from ${name}`)
        return `Hello Everyone, from ${name}`
    } ,
    city : 'bhubaneswar'
}

console.log(user1);
user1.userMessage();
console.log(user1.userMessage());


if(true){
    let a = 10;
    const b = 20;
    var c = 30 ;
    console.log(a);
    console.log(b);

}
c = 300;
console.log(c);

function parameterFunction(username){
    function childFunction(location,num1,num2){
        console.log(`curently I'm at the office loccation is ${location}` );
        return num1+num2;

    }
   sum = (childFunction("cuttack",12,34));
   console.log(sum);
   //this is cannot be accessable if we don't call the parameterFunction
//    parentFunction("Ajay");
//    this not accessible because of we can declare a function in side it's block(scope of the function)

}
parameterFunction("Subham");

//Arrow function (fat arrow function)

const sumTwoNos = (num1,num2)=>{
    //body
    return num1+num2;
    //console.log("hello");
}
console.log(sumTwoNos(3,5));


const message = (msg = "good evening")=>{
    console.log(msg);
}
message();

// const message = (hhh)=>{
//     console.log(hhh);
// }
// message(msg = "good evening");  // it can be show bug in a mass of code 
//  so never use assignment operator in actual parameter


const message1 = (msg = "good evening")=>{
    console.log(msg);
}
message("string");

const summation = (number1=10,number2=20)=>{
    return number1+number2
}
const result = summation();
console.log(result);


const additon = (num1,num2)=> num1+num2;
console.log(additon(4,5));

const object2 = {
    name : "abd",
    id : 234,
    location : "bbsr",
    functionNAme : function(){
         console.log(`hello username is ${this.name}`);
        console.log(this);  // give total object with detailed
    }

}
object2.functionNAme();
console.log(this);// give blanck object 
// console.log(`hello username is ${this.name}`);  // give undefined (outside of the object the name is not accessable by this 
console.log(`hello username is ${object2.name}`); 

oneCount(5);
function oneCount(count){
    console.log(count+1);
}

//  twoCount(10);    //in arrow function never call afunction before function defintion. Otherwise it will behave like hoisting.
//  const twoCount = (count) =>{
//     console.log(count + 2) }

let a;
//a =10;
 console.log(a); // undefined 
a =10;

//IIFE(Immidiate involved function exctuion)

(function fetchingData(){
console.log("Data fetched fron database");
})();
 //if we are defining more than one IIFE function then we need to properly closed the first function by using semi colon ";".

 ((name)=>{
    console.log(`database fetch from this table ${name}`);
 })('Subham');
