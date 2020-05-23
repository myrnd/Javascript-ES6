//Sort an object
var obj = {"a": 10, "b": 232, "c": 30}; //key: value

//console.log(obj.c); //20
//console.log(obj.b); //30

var objAry = Object.entries(obj); //[["a", 10], ["c", 20], ["b", 30]] //0=>key, 1=>value
console.log(objAry);

objAry.sort((x, y) => {
    if (x[1] > y[1])
        return 1;
    else if (x[1] < y[1]) 
        return -1;
    else
        return 0;
});

console.log(objAry);

var newObj = {};
for(let item of objAry ) {
    console.log(item);
    newObj[item[0]] = item[1];
}
console.log(newObj);