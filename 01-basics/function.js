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
const sum = assinfNos(10,34);
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