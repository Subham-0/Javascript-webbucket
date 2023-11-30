/*
1- variable is a container to store some data.
2- These are 3-types of variable in our Javascript 

  a- let
  b- const
  c- var

*/
/*
 *  variables are container for storing data.
 * javascript varible can be declares in 4 way.
 * 1.autometically
 * 2.using var
 * 3.using let
 * 4.using const 
 * the var keyword was used in all javascript code from 1995 to 2015 
 * the let and const keyword were added to javascript in 2015
 * the var keyword should only be used in code written for older brower\
 * let is blocked scope  where as var is functional scope
 * 
 * Example -->*/
const accountID = 1443;
let accountEmail = "gift@gmail.com"
var accountPassword = "bhubaneswar"
accountcity = "bhubaneswar"
let accountState;
console.log(accountID);
console.log(accountEmail);
console.table([accountEmail, accountID, accountPassword]);

/*accountID = 5678;*/
/*can't reassign const variables*/
console.log(accountID);
/* 

different between between funtional scope and 
Example -->
 
*/
function  root(){
if(true){
  var heroOne = "iron man";
  const heroTwo = "Superman";
  let heroThree = "Batman";
 
}
console.log(heroOne);
 /*console.log(heroTwo);
 console.log(heroThree);*/
 /* const and let are block scope where var is functional scope*/
}
root();
 


