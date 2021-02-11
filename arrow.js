/**
function doublIt(num){
    return num* 2;
}
const result = doublIt(4);
console.log(result);
*/


//function Expresion

/** 
const doublIt = function(num){
    return num * 2;
}
const result = doublIt(3);
console.log(result);
*/
//arrow function>>ES6
const doublIt = num => num * 2;
const result = doublIt(4);
console.log(result);
//multiple parameters for arrow function
const add = (x , y) => x + y;
const total = add(8, 5);
console.log(total);
//many task in arrow  function
const bigFnctn = (i, j) =>{
    const sum = i + j;
    const difference = i - j;
    const total = sum + difference ;
    return total;
}
const result2 = bigFnctn(8, 5);
console.log(result2);