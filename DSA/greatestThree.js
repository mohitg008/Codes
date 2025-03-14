//Program to find the Greatest of Three Numbers

let first = 200, second = 50, third = 80;

if (first != second && first != third && second != third) {

    var greatest = first > second ? (first > third ? first : third) : (second > third ? second : third)
}

console.log(greatest);