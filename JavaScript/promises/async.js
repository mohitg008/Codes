/* 
var login = async(username,password) =>{
    if(!username || !password) throw 'somthing is missing';
    if(password === 'crypto') return 'WELCOME';
    throw 'Invalid password';
}

login('Bruce','crypto0')
.then((msg)=>{
   console.log(`${msg} USER`);
})
.catch((err)=>{
    console.log(err);
}) */


var randomColorGenrate = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay)
    })
}

/* randomColorGenrate('red', 1000)
    .then(() => {
        console.log('sucess')
        randomColorGenrate('green', 1000);
    })
    .then(() => {
        console.log('sucess')
        randomColorGenrate('blue', 2000);
    })
 */
 async function random(){

await randomColorGenrate('voilet',1000);
await randomColorGenrate('red',1000);
await randomColorGenrate('green',1000);
await randomColorGenrate('blue',1000);
await randomColorGenrate('brown',1000);
await randomColorGenrate('yellow',1000);
await randomColorGenrate('black',1000);
 return 'DONE' 
}

console.log(random());