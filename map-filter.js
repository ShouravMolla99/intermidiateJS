// const number = [4, 5, 3, 7, 8];

// const output = [];

// for( let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

const number = [3, 5, 7, 2, 9];
 
// const result = number.map(function(element){
//     return element * element;
// })

// console.log(result);

// const result = number.map(x => x * x);
// console.log(result);

const result = number.filter(x => x > 6);
console.log(result);