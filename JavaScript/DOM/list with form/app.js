//extracting value from input and adding it to the list as new element 
//input box should be cleared when submit is hit

const form1 = document.querySelector('#form1');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form1.addEventListener('submit',function(e){
   e.preventDefault();
   const newLi = document.createElement('li');
   newLi.innerHTML = input.value;
   list.appendChild(newLi);
   input.value = '';
});