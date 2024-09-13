//functions

function mysteryFunc() {
    const random = Math.random();

    if(random > 0.5)
    {
        return function () {
            console.log("Congrats! You WIN");
        }
    }
    else {
        return function () {
            alert("Your computer got VIRUS!!!");
            alert("Your computer got VIRUS!!!");
            alert("Your computer got VIRUS!!!");
        }
    }
}



//factory function

function makeBetweenfunc(min, max){
    return function(num){
        return num >= min && num <= max ;
    }
}

 /* make a varible which capture the returning function and
   then use that varible and pass argument num in it.
   steps:-
    store function in variable
    const isAdult = function(18,59);
    
    now we have stored returned funtion in variable
    now pass argument to the varible

    isAdult(18)  // true
    isAdult(17)  //false
   */