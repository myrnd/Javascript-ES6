//How to convert an array into object

var ary = ["Hello", "World", "Hindustan"];

//Case-1: use index as key
//Case-2: use value as key

var obj = {};
for (let i in ary) { //in operator gives index/key
    //console.log(key);
    obj[i] = ary[i];
}
//console.log(obj);

var obj1 = {};
for (let val of ary) { //of operator gives value
    //console.log(val);
    obj1[val] = val; //obj1.Hello
}
console.log(obj1);