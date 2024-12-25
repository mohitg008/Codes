//Write a function to check if a number is NaN.

/* function checkNan(num){
    console.log(isNaN(num));
}

checkNan(0/0);
checkNan(5+NaN);
checkNan('abc' * 5);
 */


//Demonstrate the difference between ++i and i++ with examples.

/* var i =5;
console.log(i++); //5
console.log(++i); //7
 */


//Write a program to swap two variables without using a third variable.

/* function swap(a,b){
a = a+b;
b = a - b;
a = a - b;
console.log(a,b);

}

swap(5,6) */


//Write a function to count the number of vowels in a string.

/* function countVowels(str){
    const vowels = 'aieouAIEOU';
    var count = 0;
    for(let char of str){
        if(vowels.includes(char))
        {
            count ++;
        }
    }
    console.log(count);
}

countVowels("JavaScript is Awesome"); */


//Implement a program to reverse a string without using built-in methods.

/* function revString(str){
    let reversedStr='';
    for(let i=str.length-1;i >= 0;i--){
        reversedStr += str[i];
    }
    console.log(reversedStr);
}

revString("JavaScript"); */


//Create a function to capitalize the first letter of every word in a string.

/* function capital(str){
     return str.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");
}

console.log(capital("JavascrIpt is awesome"));
 */

//Write a program that checks if a given year is a leap year.

/* function isLeap(year){
    year = parseInt(year)
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is a Leap Year`);
    }
    else
    console.log('not leap year');
}

isLeap('1900');
isLeap('2000');
isLeap('2014');
isLeap('2016'); */


//Implement a grading system based on user input marks using if-else.

/* function grades(marks){
    if(marks <= 100){
    if(marks >= 80){
        console.log("you got grade A");
    }
    else if(marks <= 79 && marks >=60){
        console.log('you got grade B')
    }
    else if(marks <= 59 && marks >=45){
        console.log('you got grade C');
    }
    else if(marks <= 44 && marks >= 35){
        console.log('you got grade D');
    }
    else
    console.log('you got grade F');}
else
 console.log("enter less than 100 marks");
}

grades(85);
grades(70);
grades(101);
grades(34);
grades(55); */


//Write a program that uses a switch statement to convert a number (1-7) to the corresponding day of the week.

/* function day(number) {
    switch (number) {
        case 1: console.log('Sunday');
            break;
        case 2: console.log('Monday');
            break;
        case 3: console.log('Tuesday');
            break;
        case 4: console.log('Wednesday');
            break;
        case 5: console.log('Thursday');
            break;
        case 6: console.log('Friday');
            break;
        case 7: console.log('Saturday');
            break;
    }
}
day(1);
day(2);
day(3);
day(4);
day(5);
day(6);
day(7); */


/**** ARRAY ****/

//Write a function to find the maximum and minimum values in an array.

/* function minAndMax(arr){
    var maxValue = arr[0];
    var minValue = arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        if(maxValue < arr[i]){
            maxValue = arr[i];
        }
        if(minValue > arr[i]){
            minValue = arr[i];
        }
    }
    console.log(`Maximum value is ${maxValue} and Minimum value is ${minValue}`);

}

minAndMax([2,5,6,4]); */


//Implement a program to rotate an array by n positions.

/* function leftShift(arr,n){
     if(arr.length === 0)
        return;

     n = n % arr.length;

     for(let i=0;i<n;i++){
        var ele = arr.shift();
        arr.push(ele);
     }
     return arr;
}

console.log(leftShift([1,2,3,4,5],2));*/

/* function rightShift(arr,n){
    if(arr.length === 0)
        return ;

    n = n%arr.length;
    for(let i=0;i<n;i++){
       var ele = arr.pop();
       arr.unshift(ele);
    }
    return arr;
}

console.log(rightShift([1,2,3,4,5],2)); */


//Write a function to find the union and intersection of two arrays.

/**method 1**/

/* function unionAndIntersection(arr1,arr2){
    if(arr1.length === 0 && arr2.length === 0)
        return;

    var union = [];
    var intersection = [];

    for(let i=0; i<arr1.length;i++){
        if(!union.includes(arr1[i]))
            union.push(arr1[i]);
    }

    for(let i=0;i<arr2.length;i++){
        if( !union.includes(arr2[1])){
            union.push(arr2[i]);
        }
    }


    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j] && !intersection.includes(arr1[i])){
                intersection.push(arr1[i]);
            }
        }
    }

    return {union,intersection};

} */


/**Method 2**/

/* function unionAndIntersection(arr1,arr2){
    var union = [...new Set([...arr1,...arr2])];

    var intersection = arr1.filter(ele =>arr2.includes(ele));

    return {union,intersection}
}


var result = unionAndIntersection([1,2,3,4,5],[3,4,5,6]);

console.log(result.union,result.intersection); */


//Create a function to flatten a nested array.

/**Method 1**/

/* function flatten(arr){
    const result=[];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flatten(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten([1,[2,[3,[4]]],5]));  */


//Write a function to remove duplicates from an array.

/* function removeDuplicates(arr){
    var newArr = [];
      newArr.push(arr[0]);
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i]))
            newArr.push(arr[i]);
    }
    return newArr;

}

console.log(removeDuplicates([1,1,2,3,3,4]));
console.log(removeDuplicates([5,2,5,1,3,4,6,2,1])); //5 2 1 3 4 6 */


//Write a function that takes an array of numbers and returns a new array where each number is squared.

/* function square(arr){
    return arr.map(ele => ele ** 2);
}

console.log(square([1,2,3,4,5])); */

//Write a function that filters out numbers greater than a given threshold from an array.

/* function threshold(arr,threshold)
{
    return arr.filter(ele => ele <= threshold);
}

console.log(threshold([5,6,20,3,6,4],5)); */


//Write a function that calculates the product of all numbers in an array.

/* function productOfAll(Arr){
    return Arr.reduce((acc,ele) => acc * ele);
}

console.log(productOfAll([1,2,3,4,5])); */



/**Object Literals**/

//Create an object representing a student with properties for name, age, and marks. Write a function to calculate the average marks.

/* let student = {
    name: "John Doe",
    age: 18,
    marks: [85, 90, 78, 92, 88]
};


function averageMarks(student){
    var len = student.marks.length;
    var acc = 0
        for(let i=0;i<len;i++){
            acc = acc+student.marks[i];
        }
    return acc / len;

}

console.log(averageMarks(student)); */


//Write a program to check if a given property exists in an object.

/* const student = { name: "John", age: 21, grade: "A" };
const user = { profile: { name: "Alice", age: 30 } };

function hasProperty(object,key){
    if( key in object){
        return true;
    }

    for(const prop in object){
        if(typeof object[prop] === 'object' && object[prop] !== null){
            if(hasProperty(object[prop],key)){
                return true;
            }
        }
    }
    return false;
}


console.log(hasProperty(student,'name'));
console.log(hasProperty(user,'age'));
console.log(hasProperty(user,'dog'));
 */





/**Loops**/

//Write a program to print the Fibonacci sequence up to n terms.

/* function fib(n) {
    var fibbo = [0,1]

    for (let i = 1; i < n; i++)
    {
       fibbo.push(fibbo[i] + fibbo[i-1]);
    }
    return fibbo;
}

console.log(fib(10));
 */


//Implement a guessing game where the user has to guess a number between 1 and 10.


/* function guessTheNum(num) {
    switch (num) {
        case 1: return 1;
            break;
        case 2: return 1;
            break;
        case 3: return 1;
            break;
        case 4: return 1;
            break;
        case 5: return 1;
            break;
        case 6: return 1;
            break;
        case 7: return 1;
            break;
        case 8: return 1;
            break;
        case 9: return 1;
            break;
        case 10: return 1;
            break;
         return 0;
        }


}

var num =  11; //prompt('Enter number between 1-10');
var gameOver = 3;
var flag = 0;
while (gameOver !== 0) {
    console.log(`You have ${gameOver} live remaining`);
    flag = guessTheNum(num);
    if(flag === 1){
        break;
    }
    gameOver--;
}

console.log("YOU WON THE GAME!!!"); */


//Implement a nested loop to print a multiplication table for numbers 1 through 10.
/*
function table(val1 , val2){

    for(let i=val1;i<=val2;i++){
        var row ="";
        for(let j=val1;j<=val2;j++){
          row += (i*j).toString().padStart(5," ");
        }
        console.log(row.trim());
    }

} */


/* function table(val1,val2){
    var tables ={};
    for(let i=1;i<=val2;i++){
        tables[i]=[];
        for(let j=1;j<=val2;j++){
        tables[i].push(i*j);
        }
    }
    console.log(tables);
}
table(1,10); */


//Write a function to check if a given number is a palindrome.

/* function isPalindrome(num) {
    var flag = 0
    for (let i = 0, j = num.length - 1; i < (num.length / 2); i++, j--) {
        if (num[i] !== num[j]) {
            flag++;
            break;

        }

    }
    if (flag === 1) {
        console.log('number is not palindrome');
    }
    else
        console.log('number is palindrome');
}

isPalindrome('12345');
isPalindrome('12321');
isPalindrome('32123'); */


//Create a function to calculate the sum of an array of numbers using the reduce method.

/* function sumArr(arr){
    return arr.reduce((acc,ele)=> acc+ele);
}

console.log(sumArr([1,2,3,4,5])); */


//Write a higher-order function that takes two numbers and a callback function to perform basic arithmetic operations.

/*
function multiply(a,b){
    return a*b;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function division(a,b){
    return a/b;
}


function operations(num1,num2,callback){
    return callback(num1,num2);
}

console.log(operations(2,5,multiply));
console.log(operations(2,5,division));
console.log(operations(2,5,add));
console.log(operations(2,5,subtract));
 */




//setTimeout and setIntervals examples

/* example 1 */

/* console.log('wait for it Lengen');

setTimeout(()=>{
    console.log('Dary!!');
    console.log('LengenDary!!!!!');
},3000);
 */



/* example 2 */


/* let count =5;

const timer = setInterval(()=>{
      console.log('suits are awesome!!!');
        count --;
      if(count === 0){
        clearInterval(timer);
      }
},2000); */


//Write a function that returns another function to multiply any number by a fixed number (currying).

/* function multiplyBy20(fixecNum){
    return  function(value){
          return fixecNum * value ;
    }
}

let multiply = multiplyBy20(20);
console.log(multiply(5));
console.log(multiply(3));
console.log(multiply(2)); */


//Write a function greet(name = "Guest") that greets the user with a default name if no name is provided.

/* function greet(name="Joe"){
    return `greeting to ${name}!!`;
}

console.log(greet('Bruce'));
console.log(greet()); */


//Create a function calculatePrice(price, tax = 0.18) that calculates the total price with a default tax rate.

/* function calculatePrice(price, tax = 0.18){
    return price + (price * tax);
}

console.log(calculatePrice(30));
console.log(calculatePrice(50));
console.log(calculatePrice(10)); */


//Write a function createUser(username, role = "User") to create a user with a default role.

/* function createUser(username, role='user')
{
    var profile = {
        name:username,
        typeOfProfile:role
    }
  console.log(profile);
}
createUser('ultraMan36');
createUser('boss','admin'); */




/*Modify the following function to use default parameters:
function sum(a, b) {
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}

*/

/* function sum(a=0, b=0) {
    if (b === undefined) {
      b = 0;
    }
    return a + b;
  }

  console.log(sum()); */



//Write a function add(a, b, c) and call it using the spread operator on the array [1, 2, 3].

/*   var array = [1,2,3];

  function add(a,b,c){
    return a+b+c;
  }

  console.log(add(...array)); */



//Combine two arrays [1, 2, 3] and [4, 5, 6] using the spread operator and pass them as arguments to a function that finds the maximum number.


/*   function maxVal(arr){
    var max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
  }

  console.log(maxVal([...[1,2,3],...[4,5,6]])); */


//Write a function concatStrings(a, b, c) and use the spread operator to pass arguments from an array ["Hello", " ", "World"].

/*   function concatStrings(a,b,c){
    return a+b+c;
  }

  console.log(concatStrings(...['Hello',' ','World'])); */




//Merge two arrays [1, 2, 3] and [4, 5, 6] using the spread operator.

/* var arr1 = [1,2,3];
var arr2 = [4,5,6];

var mergedArr = [...arr1,...arr2];
console.log(mergedArr); */




//Add an element 0 to the beginning of an array [1, 2, 3] using the spread operator.

/* var originalArr = [1,2,3];

var newArr = [100,...originalArr];

console.log(newArr)
 */




//Flatten a nested array [1, [2, 3], 4] using the spread operator.

/* var flattend = [1,...[2,3],4];
console.log(flattend); */ 


//Write a function that takes two arrays and returns their intersection using the spread operator.

//var arr1 = [1,2,3,4];
//var arr2 = [4,5,6,7];

/* function intersection(arr){
    var length = (arr.length-1)/2;

    for(let i=0,j=arr.length-1;i<length;i++,j--){
        if(arr[i] === arr[j])
            return arr[i];
        
    }
}


console.log(`intersection of both array is ${intersection([...arr1,...arr2])}`); */

//