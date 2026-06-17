const school = 'RAJ UK Uttara Model School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
//string is case sensitivity === ABCD, abcd
const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book aibar porikkhay fatay felmu')   
}
else{
    console.log('hudai hudai prishta ultai r vaat khawr jonno opekkha');
}

const drink = ' water';
const liquid = '     water     ';
if(drink.trim() === liquid.trim()){
    console.log('pani er opor name Life');
}
else{
    console.log('Somudre Pani ase khaite parina');
}