const person = {
    name: 'sadar uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'cox-s b', 'rangamati'] // ai type unique nam hole dot notation diye access neyna. bracket notation a ney.

}
// console.log(person);
// dot notation
//dot symbol diye object ar property er value access kora
// console.log(person.profession);
const income = person.salary;
// console.log(income)

// bracket notation
//third bracket diye access kora
console.log(person['age'])
const boyosh = person['age'];
console.log(boyosh);

//error
// console.log(person.'fav places')

console.log(person['fav places'])

const keyName = 'profession';
console.log(person[keyName]);
