//Basic Function Write a function named greet that takes a name as a parameter and returns "Hello, [name]!".

/* function greet(name){
 console.log(`Hello, ${name}`);
}

greet('Bruce'); */

//Sum of Two Numbers Create a function sum that takes two numbers and returns their sum.

/* function sum(a,b){
    console.log(a+b);
}
sum(2,3); */

//Even or Odd Write a function isEven that takes a number and returns true if the number is even, and false if it is odd.

/* function isEven(num){
    if(num % 2 === 0){
        console.log(true);
    }
    else 
    console.log(false);
}

isEven(2);
isEven(7);
 */

//Find the Largest Number Write a function findMax that takes three numbers as arguments and returns the largest number.

/* function findMax(a,b,c)
{
    if(a>b && a>c){
        console.log(a);
    }
    else if(b>a && b>c){
        console.log(b);
    }
    else 
    console.log(c);

}

findMax(11,200,30); */


//Factorial Write a function factorial that calculates the factorial of a given number.

/* function fact(num)
{
    let fact = 1;
    for(let i=1; i<=num;i++){
        fact = fact * i;
    }
    console.log(fact);
}
fact(5);
fact(10); */

//Reverse a String Create a function reverseString that takes a string and returns the string reversed.

/* function reverseString(str){
   let revStr = '';
   for(let i =str.length-1; i>=0;i--)
   {
      revStr += str[i];
   }
   console.log(revStr);
}

reverseString('hello'); */


//Palindrome Check Write a function isPalindrome that checks whether a given string is a palindrome.


/* function palindrome(str){
    const len = str.length;
  for(let i=0; i<len/2;i++){
    if(str[i] !== str[len-1-i]){
        return false;
    }
  }
return true;
}

console.log(palindrome('madam'));
console.log(palindrome('hello')); */


//Fibonacci Sequence Write a function fibonacci that takes a number n and returns the first n numbers of the Fibonacci sequence.

/* function fib(num)
{
    if(num <= 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0,1];
     var fibSeq = [0,1];
    for(let i=2; i<num;i++){
        fibSeq.push(fibSeq[i-2] + fibSeq[i-1]);
    }
    return fibSeq;
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8)); */


//Count Vowels Write a function countVowels that counts the number of vowels in a given string.

function countVowels(str){

   /* const vowels=['a','e','i','o','u','A','I','E','O','U'];
    var count = 0;
     for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length;j++){
            if(str[i] === vowels[j])
                count++;
        }
    }  */
    

        const vowels = 'aieouAIEOU';
        
        
    return count;

}

console.log(countVowels('hello'));
console.log(countVowels('javascript'));
