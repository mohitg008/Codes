const btns = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');


function randColor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return `rgb(${r},${g},${b})`;
}

for(let btn of btns){
    btn.addEventListener('click', colorize)

}

for(let h1 of h1s){
    h1.addEventListener("click", colorize)
}


function colorize  () {
    this.style.backgroundColor = randColor();
    this.style.color = randColor();
}