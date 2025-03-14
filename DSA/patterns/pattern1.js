/* 
    1
   1  1
  1    1
 1      1
1 2 3 4 5 6 7 8 9 */


let n = 5;
for(let i=0 ; i<n; i++){
   let str = ' '.repeat(n-i-1) + '*'
   console.log(str); 
}