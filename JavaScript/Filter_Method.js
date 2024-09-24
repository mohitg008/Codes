//filter method :-

//example 1
/* const fruits = ["apple", "banana", "cherry", "mango", "kiwi", "pear"];

const filteringFruits = fruits.filter(x => x.length <= 4)

console.log(filteringFruits); */


//example 2
/* const numbers = [2, 7, 13, 26, 18, 9, 4, 30, 15];

const filterNum = numbers.filter(number => number < 10).map(number => number * number);
console.log(filterNum);
 */


//example 3
/* const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 }
  ];

  const filteringUsers = users.filter(user => user.name.length > 3 ).map(user=> user.name)

  console.log(filteringUsers); */



  //example 4
/*    const mixedArray = [1, "hello", 3, true, "world", 42, false, "javascript"];

  var onlyStrings = mixedArray.filter(ele => typeof ele === "string");
  var onlyBool = mixedArray.filter(ele => typeof ele === "boolean");
  var onlyNum = mixedArray.filter(ele => typeof ele === "number");

  console.log(onlyStrings); 
  console.log(onlyBool); 
  console.log(onlyNum); 
   */



  //example 5

  /* const bools = [true, false, true, false, true];

   var onlyTrue = bools.filter(ele => ele === true)
   var onlyFalse = bools.filter(ele => ele === false)

   console.log(onlyTrue)
   console.log(` there are ${onlyTrue.length} true elements`)
   console.log(onlyFalse)
   console.log(` there are ${onlyFalse.length} false elements`)
 */

   