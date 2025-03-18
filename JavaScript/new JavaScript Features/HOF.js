//high order function

function salary(num){
    return num + 1;

}

function tax(num){
     if(num >= 5)
        return num * 0.8;

     return NaN
}

const nums = [1,2,3,4,5,6,7,8,9,10];

const newNum = nums.map(salary).map(tax);


console.log(newNum);