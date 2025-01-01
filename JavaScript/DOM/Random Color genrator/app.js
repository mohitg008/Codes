const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const div = document.createElement('div');
document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(btn);
div.classList.add('centre');


btn.addEventListener('click', function () {

    var newColor = randColor();
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;

});


function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = 'white';
    }
    else if(r > 100 && g > 100 && b > 100){
        h1.style.color = 'black';

    }
    return `rgb(${r},${g},${b})`;
}