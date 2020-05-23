//for: in
//for: of

//Object
//Array

//Array
//keys in
//value of

//Object
//keys in

var ary = [10, 20, 30];
for(let key in ary) {
    console.log(key);
}

for(let val of ary) {
    console.log(val);
}

var obj = {id: 1, name: "Abc"};
for (let key in obj) {
    console.log(key + ' ==> ' + obj[key]);
}


for(let val of Object.values(obj)) { //of cannot be used with Object
    console.log(val);
}

//ary.forEach
//for(;;)