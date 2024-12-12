/* var b = typeof b;
console.log(b);
 */

/* const var1 = [1,2,3,4,5,6];
console.log(...var1); */

//object 1
const feline={legs:4, family:'Felidae'};

//object 2
const canline={isFurry:true, family:'Caninae'};

const catDog={...feline, ...canline}; 
console.log(catDog[0]);