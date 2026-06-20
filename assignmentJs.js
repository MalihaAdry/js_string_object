 //1
//  var area = 800; 
//  var asset = area / 2;
//  console.log(asset);

/** Problem -02 ( Cycle or Laptop ) */ 

// var money = 10000; 
// if (money>=25000){
//     console.log('Laptop');
// }
// else if(money>=10000){
//     console.log('cycle');
// }
// else{
//     console.log('chocolate');
// }

// var money = 10000;

// const gift = money>=25000 ? 'Laptop' : money>=10000 ?  'Cycle' : 'Chocolate';
// console.log(gift);

// Problem - 03 - Medicine Planner
  

// var lastDay = 11;
// for(i=1; i<=lastDay; i++){
//     if(i % 3 === 0){
//         console.log(i, '-' ,'medicine');
//     }
//     else{
//         console.log(i, '-' ,'rest');
//     }
// }

// Problem 04 - Delete Store
// var fileName = 'docx.xpdf ';
// if (fileName.includes('#' || '.pdf' || '.docx')){
//     console.log('store');
// }
// else{
//     console.log('delete');
// }
  
//Problem 05 - PH Email Generator

// var student= { name: "mewo" , roll: 99 ,department: "eee" }; 
// console.log(student.name+student.roll+'.'+student.department+'@ph.ac.bd');
 
//Problem 06: Current Salary (Challenge Problem)

var experience = 30; 
var startingSalary = 45000; 
var years = 30;
var growthrate = 0.05;
var currentSalary = startingSalary*(1+growthrate)**years;
console.log(currentSalary.toFixed(2));