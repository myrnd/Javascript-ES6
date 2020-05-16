const x = 20;
x = 30; //error const variable cannot be reassigned

const ary = [10, 20, 30];
ary.push(40); //no error

console.log(ary); //[10, 20, 30, 40]

const obj = {id: 1, name: "MyR&D"};
obj.location = "YouTube"; //no error

console.log(obj); //{id: 1, name: "MyR&D", location: "YouTube"}