const button = document.querySelector('button');

button.addEventListener('click',function(e){
    e.stopPropagation();
})