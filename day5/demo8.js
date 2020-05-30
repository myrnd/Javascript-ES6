var ary = [10, 20, 30];

var iterator = ary[Symbol.iterator]();
//console.log(iterator);

/*
var a = iterator.next();
console.log(a);

var b = iterator.next();
console.log(b);

var c = iterator.next();
console.log(c);

var d = iterator.next();
console.log(d);
*/

while(1==1) {
    let obj = iterator.next();
    if (!obj.done) {
        console.log(obj.value);
    } else {
        break;
    }
}


/*
var obj = {a: 10, b: 20}; //no iterator fuction
for (let x of obj) {
    console.log(x);
}
*/

