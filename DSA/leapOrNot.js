//Program to Check Whether a Year is a Leap Year or Not

var year = 2021;

if(year % 400 === 0 || ( year % 4 === 0 && year !== 100)){
    console.log(year+' is a leap year');
}
else
 console.log('year is not leap year')