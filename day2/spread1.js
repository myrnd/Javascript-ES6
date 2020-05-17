const obj = {
    id: 1, 
    name: 'MyR&D'
};
console.log(obj);

const obj1 = {...obj};
console.log(obj1);

const obj2 = {location: 'BLR', ...obj, pin: 560016};
console.log(obj2);

const ary = [10, 20 ,30];

const ary1 = [5, ...ary, 40];
console.log(ary1);

const ary2 = [5, ary, 40];
console.log(ary2);

console.log(ary2.length);