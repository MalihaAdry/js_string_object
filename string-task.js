/* Task-1:
Count how many times a string has the letter a */

// const sentence = 'Havna nana banana'
// const count = sentence.split('a').length-1;
// console.log(count);
/* Count how many times a string has the letter a or A */
// const sentence = 'Ajke Amra khelte jabo'
// const count = sentence.toLowerCase().split('a').length-1;
// console.log(count);

/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u */
// const sentence = 'allien ke voy pau..'

// if(
//     sentence.includes('a') &&
//     sentence.includes ('e') && 
//     sentence.includes ('i') &&
//     sentence.includes ('o') &&
//     sentence.includes ('u') 
// ){
//     console.log('Contains all vowels');
// }
// else{
//     console.log('Does not contains')
// }
/* If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */
let sentence = 'oxidized jewellery sundor XO XO'
// if(sentence.includes('x') ||
//    sentence.includes('X')
// ){  
//     const result = sentence.replaceAll('x', 'y').replaceAll('X', 'Y')
//     console.log(result);

// }
// else{
//     console.log('kissu nai')
// }
const result = sentence.replaceAll('x', 'y').replaceAll('X', 'Y');
console.log(result);