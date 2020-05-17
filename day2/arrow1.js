// Named Function
// Anonymous
function test() {
}
var test1 = function() { //function expression
}

//normal named function
function getSquare(num) {
    return num*num;
}

//arrow named function
//method-1: shorter: no function keyword
const getSquare1 = (num) => {
    return num*num;
}

//method-2: more shorter: function keyword and no parenthesis
const getSquare2 = num => {
    return num * num;
}

//method-3: shortest: no function keyword, no parenthesis, and no return type
const getSquare3 = num => num * num;

console.log(getSquare(2));
console.log(getSquare1(2));
console.log(getSquare2(2));
console.log(getSquare3(2));