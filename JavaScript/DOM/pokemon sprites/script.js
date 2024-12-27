const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/';


 for(let i=1;i<=500;i++){
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('pokemon');
    let span = document.createElement('span');
    span.innerText = `#${i}`;
    let img = document.createElement('img');
    img.src = `${url}${i}.png`;
    div.appendChild(img);
    div.appendChild(span);
}
 
