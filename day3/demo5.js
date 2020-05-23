var ary = ["Hello", "World"]; //0, 1
var str = "HelloWorld"; //0,9

console.log(ary.indexOf("World"));
console.log(str.indexOf("World"));


console.log(ary.includes("1World")); //true
console.log(str.includes("World")); //true

console.log(str.startsWith("World")); //true
console.log(str.startsWith("World", 5)); //true