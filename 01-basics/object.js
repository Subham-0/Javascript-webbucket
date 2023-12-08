//What is object?
//object are the real world entities which have some attributes and characterties
//it is also like a variable where we can store various type of datatype
//in general variable can store an value ex: const car = "mustang";
//but in object we can store more than one value
//ex: const car = {brand : "Tata",model :"punch",color ="black"};
//So here we define a object inside the curly braces with pair of key and value seperated by colon and need to add comma to add multiple keys.
//object leteral
const person = {
    fname: "Subham",
    lname: "dash",
    "fullname": "subham Dash",  //key as string 
    age: 23,
    hight: 5.9,
    isLogin: true,
    LoginDay: ["monday", "friday"], //vaule as array

};
console.log(person);
console.log(person.lname);
console.log(person["fullname"]);

person.location = "Cuttack";
console.log(person);
person.email = 'dashsubham2002@gmail.com',

    // console.log(Object.freeze(person));

    person.age = 34;
console.log(person);
console.log(person.hasOwnProperty("Subham"));

person.greeeting = function () {
    console.log('hello world');
}

person.greeetingTwo = function () {
    console.log('good evening', `${person.fname}`);
}
person.greeeting();
person.greeetingTwo();

//object constructuror
const user = {};
user.userID = 12332;
user.userName = 'subham';
user.userStatus = 'Arived';
user.isLoggedin  = true;

console.log(user);
console.log(Object.entries(user));  // entries method change the  object into Array
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("isLogin"));
console.log(person.hasOwnProperty("Subham"));

const userName ={
uderDetails : {
    "userFuname":{
        fname:"Subham",
        lname:"Dsah",
        LoginDay: ["monday", "friday"]

    }
}
}
console.log(userName.uderDetails["userFuname"].fname);
console.log(userName);
 

const obj1 = {a:1,b:4};
const obj2 = {c:1,e:4};
const obj3 = {d:1,s:4};

const obj4 = {obj1,obj2,obj3};
console.log(obj4);

const obj = Object.assign({},obj1,obj2,obj3);
console.log(obj);

const spread = {...obj1,...obj2,...obj3};
console.log(spread);

const arrayobj = [
    {
    id:23,
    location:"bbsr"
},
{
    id:53,
    location:"kdp"
},
{
    id:345,
    location:"khorda"
},
{
    id:523,
    location:"puri"
}
];
console.log(arrayobj);
console.log(arrayobj[2]);
console.log(arrayobj[2].location);

const courseDetails ={
    courseName : "Javascript",
    coursefee : 6000,
    providedby : 'webBuckect'
}
console.log(courseDetails);

const {providedby : pb } = courseDetails;
console.log(pb);