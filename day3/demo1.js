//How to convert an object into an array

var obj = {a: 10, c: 20, b: 30};

//Case-1: used on keys ==> ["a", "c", "b"]

//Case-2: USed on vaules ==> [10, 20, 30]

//Case-3-A: used both keys and values ==> [["a", 10], ["c", 20], ["b", 30]]
//Case-3-B: Used both keys and values ==> [{"a": 10}, {"b", 20}, {"b", 30}]

var keysAry = Object.keys(obj);
console.log(keysAry); //["a", "c", "b"]


var valAry = Object.values(obj);
console.log(valAry); //[10, 20, 30]

var objAry = Object.entries(obj);
console.log(objAry);