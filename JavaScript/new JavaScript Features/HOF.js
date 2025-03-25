//high order function
/* 
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


console.log(newNum); */



/* const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredNums = customfilter(numbers, num => num % 2 === 0);

function customfilter(arr,callbackFun){
    
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(callbackFun(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    
}

console.log(filteredNums); */





const callback = () => { console.log("executed after delay of 5 seconds");  return 5000};

const callback1 = () => {   return 5000};


setTimeout( callback,callback1
    );