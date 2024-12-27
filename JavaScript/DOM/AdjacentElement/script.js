var h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'heading 1';


var h2 = document.createElement('h2');
h2.append ('heading 2');
h1.insertAdjacentElement('afterend', h2);

var p1 = document.createElement('p');
p1.append('heading 1 paragraph');
h1.insertAdjacentElement('afterend',p1);

var p2 = document.createElement('p');
p2.append('child after heading 2');
h2.insertAdjacentElement('beforeend',p2);

p2.prepend('prepended ');


var p3 = document.createElement('p');
p3.append('h1s child ');
h1.insertAdjacentElement('afterbegin', p3);
//p3.innerHTML = '<p>h1s child</p>';

var p4 = document.createElement('p');
p4.append('para before h1');
h1.insertAdjacentElement('beforebegin',p4);

var p5 = document.createElement('p');
p5.append('child to append');
h1.appendChild(p5);

var p6 = document.createElement('p');
p6.append('child before h2');
h2.insertAdjacentElement('afterbegin',p6);

var p7 = document.createElement('p');
p7.append('after all ends');
h2.insertAdjacentElement('afterend',p7);

var newEle = document.createElement('p');
newEle.append('new element');
h2.after(newEle);