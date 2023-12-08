/* Array : In js array is a special variable where we can store more than one value.*/
    const arrayName = ['name1','name2','name3'];
    console.log(arrayName);

    /*const myArray = new Array('bbsr','cuttack');
    console.log(myArray);*/

    const car = [];
    car[0]="tata";
    car[1]="bmw";
    car[2]="hundai";
    console.log(car);

    const myArray =[0,1,2,3,4];
    //Array index start from Zero(0)
    console.log(myArray[4]);

    //Array methods
    //console.log(array.__proto__);

    //Array.prototypr.push()
    //it add a new element in the last of existing array
    console.log(myArray.push(9));
    console.log(myArray);

    //Array.prototype.pop()
    //it remove a new element in the last of existing array
    console.log(myArray.pop());
    console.log(myArray);

     //Array.prototype.unshift()
     //It will add a new element in the beginning of the existing array
     console.log(myArray.unshift(12));
     console.log(myArray);

     //Array.prototype.shift()
     //It will remove a new element in the beginning of the existing array
     console.log(myArray.shift());
     console.log(myArray);

     //Array.prototype.includes()
     //It check whether the element if present or not in the array.
     //if the element is present it returns ture otherwise false
     console.log(myArray.includes(4));
     console.log(myArray.includes(6));
     console.log(myArray);

     //Array.prototype.indexOf()
     console.log(myArray.indexOf(3));
     console.log(myArray.indexOf(8));
    //The indexOf() method returns the position of the first occurrence of a value in a string.
    //The indexOf() method returns -1 if the value is not found.

     //Array.join()
     //Basically it converts the arraay into string
     const demoArray = myArray.join();
     console.log(myArray);
     console.log(typeof(myArray));
     console.log(typeof(demoArray));

    // slice and splice method 
    //slice last index work on (lastindex-1);
    //means it print the value on given range but ending rang works 
    console.log("slice",myArray);
    const newArray = myArray.slice(1,4);
    console.log(newArray);
    console.log(myArray);

    console.log("splice",myArray);
    const  mynewArray = myArray.splice(1,2);
    console.log(mynewArray);
    console.log(myArray);

    //Array.prototype.concat()
    const marvel_hero = ['THOR','IRONMAN','CAPTAINAMERICA','SPIDERMAN'];
    const dc_hero = ['BATMAN','SUPERMAN','FLASH'];
    const allheros = marvel_hero.concat(dc_hero);
    console.log(allheros);

    //(ES6) spread operator
    //cocatenation, copy , applied method
     //you can also add string 
    const newhero = [...marvel_hero,...dc_hero,'Subham'];
    console.log(newhero);

    //Array.prototype.flat()
    const anotherarray = [1,2,3,[4,5,6,[7,8],],9,23,45,[3,4],7];
    const simplifiedarrray = anotherarray.flat(Infinity);
    console.log(myArray);
    
    //Array.prototype.isArray()
    //if the array is present then return true else false
    console.log(Array.isArray(simplifiedarrray));

    //Array.prototype,from()
    //In this from method uded to create a new array by given input value,
    console.log(Array.from("Bhubaneswar"));


    //1. Write a JavaScript function to check whether an input is an array or not.
    const array1 = [1,2,3,"subham"]
    function checkarray(){
        const array = Array.isArray(array1);
        if(array===true){
            return 'array1 is a Array';
        }
        else{
            return 'array1 is not a Array'; 
        }
    }
   const print = checkarray();
   console.log(print);

   //2. Write a simple JavaScript program to join all elements of the following array into a string.
   const string = array1.toString();
   console.log(string);

   //3. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
   //For example if you accept 025468 the output should be 0-254-6-8.
   function insertDashes(inputNumber) {
    const numberString = inputNumber.toString();
    let result = numberString[0];
  
    for (let i = 1; i < numberString.length; i++) {
      if (numberString[i] % 2 === 0 && numberString[i - 1] % 2 === 0) {
        result += '-' + numberString[i];
      } else {
        result += numberString[i];
      }
    }
  
    console.log(result);
  }
  
  // Take user input
  const userInput = prompt('Enter a number: ');
  const userNumber = parseInt(userInput);
  insertDashes(userNumber);
  
  

  // 4. Write a JavaScript program to sort the items of an array.
  //Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  //Sample Output : -4,-3,1,2,3,5,6,7,8
  var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  var arr1 = arr1.sort();
  console.log(arr1);

//  5. Write a JavaScript program to compute the sum and product of an array of integers.
const a1 = [1,2,3,4];
var sum = a1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);
  console.log(sum);
  var product = a1.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  },1);
console.log(product);

