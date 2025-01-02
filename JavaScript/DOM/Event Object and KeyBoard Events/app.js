document.querySelector('button').addEventListener('click', function (event){
    console.log(event)
})

const input = document.querySelector('input');

/* input.addEventListener('keydown',function (e){
    console.log(`key pressed : ${e.key}, it's code : ${e.code}`);
    
})
 */




/* input.addEventListener('keydown',function (){
    console.log("KEYDOWN");
})

input.addEventListener('keyup',function(){
    console.log("KEYUP");
}) */


    //arrow keys program


input.addEventListener('keydown',function(e){
    switch(e.key){
        case  'ArrowUp' : console.log('UP');
        break;
        case 'ArrowDown' : console.log('DOWN');
        break;
        case 'ArrowLeft' :console.log('LEFT');
        break;
        case 'ArrowRight' : console.log('RIGHT');
        break;

    }
})
