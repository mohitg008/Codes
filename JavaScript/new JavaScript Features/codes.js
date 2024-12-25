//Questions covered on following topics

/* default params
spread in function calls
spread with array literals
spread with objects
rest params
destructing arrays
destructing objects
destructing params */



/* 
1. Default Parameters
Write a function greet that takes two parameters: name and greeting. The greeting parameter should have a default value of "Hello".

Call the function with:
Only the name parameter ("Alice").
Both parameters ("Bob" and "Hi").
No parameters.
Ensure the output is a proper greeting, e.g., "Hello, Alice!". */


/* function greeting(name,greet='Hello'){
    return `${greet}!!, ${name}`
}

console.log(greeting("Alice")); */



/* 2. Spread in Function Calls
Given the following array:
const numbers = [5, 12, 8, 20];

Write a function findMax that takes four arguments and returns the maximum value.
Use the spread operator to call the function with the numbers array. */

/* 
const numbers = [5, 12, 8, 20];

var findMax = (arr) =>{
    var max = arr[0];
    arr.forEach(element => {
        if (element > max){
            max = element;
        }
    });

    return max;
}

console.log(findMax(numbers)); */



/* 3. Spread with Array Literals
You are given two arrays:

const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "broccoli"];
Combine these arrays into a single array food using the spread operator.
Add "mango" and "spinach" to the new array at the appropriate positions.

 */


/* const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "broccoli"];

const combined = [...fruits,'mango',...vegetables,'spinach'];
console.log(combined); */



/* 4. Spread with Objects
Given the following objects:


const person = { name: "John", age: 25 };
const job = { title: "Developer", company: "TechCorp" };
Combine these objects into a new object employee using the spread operator.
Add a new property salary with a value of 50000 to the employee object. */

/* const person = { name: "John", age: 25 };
const job = { title: "Developer", company: "TechCorp" };
const employee = {...person,...job,salary:50000};
console.log(employee); */




/*  Rest Parameters
Write a function sumAll that takes any number of arguments (using rest parameters) and returns their sum.

Call the function with the following numbers: 3, 5, 7, 2, 8.
What happens if no arguments are passed? Handle this case gracefully.
 */


/* function sumAll(...num){
     if(num.length === 0)
        return
     var sum =0;
    num.forEach(element => {
       sum = sum + element;     
    });
    console.log(sum);
}

sumAll(3,5,7,2,8);
sumAll(); */



/* 6. Destructuring Arrays
You are given the following array:


const colors = ["red", "green", "blue", "yellow"];
Use array destructuring to extract the first two colors into variables primary1 and primary2.
Store the remaining colors in a variable secondaryColors using the rest pattern. */


/* const colors = ["red", "green", "blue", "yellow"];

const [primary1,primary2,...secondaryColors] = colors;
console.log(primary1);
console.log(primary2);
console.log(secondaryColors); */



/* 7. Destructuring Objects
You are given the following object:

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction"
};
Use object destructuring to extract the title, author, and year properties into separate variables.
Rename year to publicationYear while destructuring.
Provide a default value of "Unknown" for a non-existent property publisher.

 */

/* const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
  };


  const {title,author,year: publicationYear,genre} = book;
  console.log(title);
  console.log(author);
  console.log(publicationYear);
  console.log(genre); */



/*   8. Destructuring Parameters
You are given the following function:


function displayPerson({ name, age, country = "Unknown" }) {
  console.log(`${name} is ${age} years old and lives in ${country}.`);
}
Call the function with the following object:

const person = { name: "Alice", age: 30, country: "USA" };
Call the function with the following object (missing the country property):

const person = { name: "Bob", age: 25 };
What happens if you call the function with an empty object? Handle this case by providing default values for name and age in the function parameter.
 */


/* function displayPerson({ name="unkown", age='unknown', country = "Unknown" }) {
    console.log(`${name} is ${age} years old and lives in ${country}.`);
  }


  const person1 = { name: "Alice", age: 30, country: "USA" };

  const person2 = { name: "Bob", age: 25 };

  const person3 = {};


  displayPerson(person1);
  displayPerson(person2);
  displayPerson(person3); */



  