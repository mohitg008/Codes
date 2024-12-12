
// positive or Negative
const checkNum = function (num)
{
    if(num === 0)
    return 'equals to zero';
    else if(num > 0)
    return 'positive';
    else if (num < 0)
    return 'negative';
    
};

checkNum(10);
console.log(checkNum);