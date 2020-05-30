//enumerables
//iterables

var str = "Hello";
var ary = [10, 20, 30];
var obj = {a: 5, b: 10, c: 15};

//for...in ==> enumerables
//for...of ==> iterators

ary[3] = 40;

console.log(ary); //[10, 20, 30, 40]
Object.defineProperty(ary, 4, {
    value: 50,
    //writable: false
    //configurable: false
    enumerable: true
});
console.log(ary); //[10, 20, 30, 40, 50]


for (let x in ary) { //key or property
    console.log(x);
}
