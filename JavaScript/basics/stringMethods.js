
//Q1: Write a function that takes a string and returns its length.

/* function strLength(str){
    return str.length;
}

console.log(strLength('JavaScript is Fun!!'));
 */

//Q2: Check if the length of the string "JavaScript" is greater than 5.

/* function checkLength(str){
    if(str.length > 5)
        console.log('string length is greater than 5');
    else if(str.length === 5)
        console.log('string length is equal to 5');
    else
    console.log('string length is less than 5');
}

checkLength('learning');
checkLength('JS'); */

//Q3: Convert the string "react is awesome" to uppercase.

/* var str = 'react is awesome'.toUpperCase();
console.log(str);
 */

//Q4: Write a function that accepts a string and returns it in lowercase.

/* function lowerCase(str){
    return str.toLowerCase();
}

console.log(lowerCase('REACT IS AWESOME')); */

//Q5: Remove extra spaces from the string " Learn React ".

/* var str = " Learn React ".trim();

console.log(str); */

//Q6: Write a function that trims whitespace from both ends of a string and logs the result.


/* function removeSpace(str){
    console.log(str.trim());
}

removeSpace('   REMOVING SPACE   '); */


//Q7: Extract the word "React" from "Hello, React World!" using slice()

/* const str =  "Hello, React World!";

let newStr = str.slice(7,12);

console.log(newStr); */

//Q8: Use slice() to get the last 5 characters of the string "JavaScript is fun!".

/* const str = "JavaScript is fun!";

var newStr = str.slice(-5);
console.log(newStr); */

//Q9: Extract the word "Java" from "JavaScript" using substring().

/* const str = "JavaScript";

var newStr = str.substring(0,4);
console.log(newStr); */

//Q10: Write a function that uses substring() to get the first 3 characters of a string.

/* function subString(str){
    return str.substring(0,3);
}
console.log(subString('substring'));
 */


//Q11: Replace the word "React" with "Vue" in the string "React is awesome".

/* var str = "React is awesome";
var newStr = str.replace('React','Vue');
console.log(newStr); */

//Q12: Write a function that takes a sentence and replaces all occurrences of "bad" with "good".

/* function repSentence(str){
    return str.replaceAll('bad','good');
}

console.log(repSentence('good is bad but bad is good')); */

//Q13: Write a function to replace all spaces in a string with dashes (-).

/* function replaceSpace(str){
    return str.replaceAll(' ','-');
}
console.log(replaceSpace('javascript is fun language')); */


//Q14: Replace all occurrences of "JS" with "JavaScript" in the string "I love JS because JS is great!".

/* const str = "I love JS because JS is great!";
var newStr = str.replaceAll('JS','JavaScript');
console.log(newStr);
 */

//Q15: Check if the string "React" is present in "Learn React with JavaScript".

/* function check(str){
    if(str.includes('React'))
        return true;
    else
        return false;
}

console.log(check("Learn React with JavaScript")); */

//Q16: Check if the string "React is fun!" starts with "React" and ends with "fun!".

/* function check(str){
    if(str.startsWith('React') && str.endsWith('fun!'))
        return true;
    else
        return false;
}

console.log(check('React is fun!')); */


//Q17: Write a function that verifies if a filename ends with .js.

/* function checkName(str){
    if(str.endsWith('.js'))
        return true;
    else
        return false;
}

console.log(checkName("stringMethods.js")); */

//Q18: Split the string "HTML,CSS,JavaScript,React" into an array.

/* var str = "HTML,CSS,JavaScript,React".split(',');
console.log(str); */


//Q19: Write a function that splits a sentence into an array of words.

/* function toArray(str){
    return str.split(' ');
}
console.log(toArray("Learn React with JavaScript")); */


//Q20: Concatenate "Hello" and "World" with a space in between.
 
/*  var str = 'Hello'.concat(' World');
 console.log(str);  */


//Q21: Write a function that takes two strings and returns them joined with " & ".

/* function twoString(str1,str2){
    return str1.concat(' & ',str2);
}

console.log(twoString("Hello","World"));
 */

//Q22: Get the character at index 4 in the string "ReactJS".

//console.log('ReactJS'.charAt(4));

//Q23: Write a function that returns the first character of a string.

/* function char(str)
{
    return str.charAt(0);
}
console.log(char('ReactJS')); */


//Q24: Find the index of the first occurrence of "React" in "React is fun. React is powerful.".

/* console.log('React is fun. React is Powerful'.indexOf('React')); */

//Q25: Use lastIndexOf() to find the last occurrence of "is" in "This is a test. This is only a test.".


/* console.log("This is a test. This is only a test.".lastIndexOf('is'));
 */


//Q26: Repeat the string "React " 3 times.

/* console.log('React '.repeat(3)); */

//Q27: Write a function that creates a dashed line ("-----") of a specified length.

/* function dashLength(count){
    if(count <= 0)
        return ;
    else
    console.log('-'.repeat(count));
}

dashLength(0);
dashLength(5); */

//Q28: Pad the string "5" with leading zeros to make it "00005"

/* console.log('5'.padStart(5,'0')); */

//Q29: Write a function that pads a string to 10 characters with * on both ends.


/* function padding(str){
    const padLength = 10;
    var newStr = str.padStart((padLength + str.length)/2,'*').padEnd(padLength,'*');
    return newStr;
}

console.log(padding('5'));
console.log(padding("Hello"));
console.log(padding('JS'));
console.log(padding('JavaScript')); */

//Q30: Take the string " Learn JavaScript " and return it trimmed, converted to uppercase, and split into words.

/* console.log(" Learn JavaScript ".trim().toUpperCase().split(" "));
 */

/* Q31: Write a function that takes a sentence and:

Trims any extra spaces.
Replaces all spaces with dashes.
Converts the result to uppercase. */

/* function strFunc(str){
    return str.trim().replaceAll(" ",'-').toUpperCase();
}

console.log(strFunc("     JavaScript is Awesome   "));
 */



/* 
List of String Methods

    length
        Returns the number of characters in a string.

    toUpperCase()
        Converts a string to uppercase letters.

    toLowerCase()
        Converts a string to lowercase letters.

    trim()
        Removes whitespace from both ends of a string.

    slice(start, end)
        Extracts a section of a string and returns it as a new string.

    substring(start, end)
        Similar to slice(), but does not accept negative indices.

    replace(searchValue, newValue)
        Replaces the first occurrence of a specified value with another value.

    replaceAll(searchValue, newValue)
        Replaces all occurrences of a specified value with another value.

    includes(substring)
        Checks if a string contains a specified substring and returns true or false.

    startsWith(substring)
        Checks if a string starts with a specified substring.

    endsWith(substring)
        Checks if a string ends with a specified substring.

    split(separator)
        Splits a string into an array of substrings using a specified separator.

    concat(...strings)
        Concatenates two or more strings into a single string.

    charAt(index)
        Returns the character at a specified index in a string.

    indexOf(substring)
        Returns the position of the first occurrence of a specified substring.

    lastIndexOf(substring)
        Returns the position of the last occurrence of a specified substring.

    repeat(count)
        Repeats a string a specified number of times.

    padStart(targetLength, padString)
        Pads the beginning of a string with another string until it reaches the target length.

    padEnd(targetLength, padString)
        Pads the end of a string with another string until it reaches the target length. */