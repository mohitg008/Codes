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