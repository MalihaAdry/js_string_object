const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
//for of : array
// for in : object
//for... in iterates over the keys(properties of an object, while for.... of iterates over the values of an data)
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':' ,mobile[key]);
}