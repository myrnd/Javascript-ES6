var obj = {a: 10, b: 20}; //no iterator fuction

obj['a'] = 10000;
console.log(obj);

obj['c'] = 2000;
console.log(obj);

obj[Symbol.iterator] = function() { //next(), {value: , done}, current

}


/*
for (let x of obj) {
    console.log(x);
}
*/