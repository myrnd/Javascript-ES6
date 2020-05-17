const obj = {id: 1, name: "Xyz", location: 'NOIDA'};

const {id, name, location = 'BLR'} = obj; //1. destructing 2. default parameter

console.log(id);
console.log(name);
console.log(location);

function getValue(x = 20) {
    return x;
}

console.log(getValue(10)); //10
console.log(getValue()); //20

const ary = [10, 20, 30, 40, 50];
const [a, b, ...c] = ary;

console.log(a);
console.log(b);
console.log(c);


const sum = (x = 20, y = 30) => x + y;
console.log( sum() );
console.log( sum(10, 15) );