const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
} 

// console.log(college.unique.color)
// console.log(college)
// console.log(college.unique.result)
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
college.events[1] = '16 December'
console.log(college.events[1])
delete college.class;// delete a property from an object
console.log(college)
