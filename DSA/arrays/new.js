const items = [1,2,3,4,5];

function shift(){
    
    var newItems = [];
    for(let i=1;i<items.length;i++){
        newItems[i-1] = items[i];
    }
    return newItems
}


console.log(shift());