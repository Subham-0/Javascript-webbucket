//for in 
// It return index of the array
const array3 = [1,2,3,4,5];  //0 1 2 3 4
for(let keys in array3){
    console.log(keys);
}

// For of 
// it return the element of the array 
for(let values of array3){  //1 2 3 4 5
    console.log(values);
}

//For each
//no return values 
//normally for checking perpose 
const language =['C','JAVA','PYTHON','JAVASCRIPT'];
const value = language.forEach(  (item)=>{
    //return item;
    console.log(item);
})
//console.log(value); //out of scope


//Filter method 
const numberArray = [1,3,2,4,6,4,8,4,2,8,3,5,9,6,4,3,2];
const updateArray = numberArray.filter((data)=>{
    // return data;
    return data>2;
})
console.log(updateArray);

const updateArray2 = [];
numberArray.forEach((data)=>{
    if(data>4){
        updateArray2.push(data);
    }
})
console.log(updateArray2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const myBooks = books.filter( (bg) => bg.edition === 1989)
  console.log(myBooks)

  const filterBook = books.filter( (fb) => {return fb.genre === 'Non-Fiction' && fb.publish >= 1987})
  console.log(filterBook);


//Map method 
const mapArray = [2,3,4,5,6,23,45,444];
const newArray = mapArray.map( (num)=>{
    return num+1;
})
console.log(mapArray);
console.log(newArray);

//chaining

const chainingArray = mapArray
                            .map((data) => data+2)
                            .map((data) => data*10)
                            .filter((data) => data > 40)
console.log(chainingArray);


//reduce method 
const arrayNums = [2,4,6,8,10]
const reducemethod =  arrayNums.reduce(function(accumulator,cuuenrtvalue){
    console.log(`accumulator ${accumulator} and ${cuuenrtvalue}`)
    return accumulator +cuuenrtvalue
},0 )
console.log(reducemethod);

// reduce method using arrow function 

const reduceMetod = arrayNums.reduce( (acc,cur_value) => acc+cur_value,3)
console.log(reduceMetod);

//set metod

const myset = new Set();
console.log(myset);
myset.add(2);
myset.add(21);
myset.add(25);
myset.add(2);
myset.add(42);
myset.add(52);
myset.add(2);
console.log(myset);

//check the size of the set
const size = myset.size;
console.log(size);

//check the value exist or not
console.log(myset.has(43));
console.log(myset.has(42));

//remove a value from the set
const deletedItem = myset.delete(42);
console.log(deletedItem);
console.log(myset);


//iterate over the values from the set
for (let values of myset)
console.log(values);