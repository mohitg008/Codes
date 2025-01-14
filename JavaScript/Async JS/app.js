/* console.log('Sending request to server!');

setTimeout(()=> {
   console.log('Here is your data from the server...')
},3000)
console.log('I am at the end of the file!'); */

/* async function hello(){
   
} */


const sing = async () => {
   return 'LA LA LA';
}

sing().then((data)=>{
   console.log('promise resolved with:', data);
})