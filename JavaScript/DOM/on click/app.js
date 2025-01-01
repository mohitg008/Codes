var btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("YOU CLICKED ME!!");
    console.log('IT WORKED!!');
}

function scream(){
    console.log('AAAAHHHHH!!!');
    console.log('REMOVE IT!!!!!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clciked the h1!');
 }

 var btn3 = document.querySelector('#v3');

 btn3.addEventListener('dblclick',() =>{
    alert('YOU CLICKED ME!!!');
 })


function twist(){
    console.log('TWIST');
}

function shout(){
    console.log('SHOUT');
}

var btn4 = document.querySelector('#v4');

btn4.addEventListener('click',twist,{once:true});
btn4.addEventListener('click',shout);

/* btn4.onclick = twist;
btn4.onclick = shout; */

