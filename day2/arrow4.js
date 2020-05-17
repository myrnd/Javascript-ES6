function getValues() {
    return arguments;
}

var args = getValues(10, 20, 30, 40);
//console.log(args);


// Arrow Function has no local arguments
const getValues1 = () => {
    return arguments;
};
//console.log( getValues1(5, 10, 15) );


function Person() {
    this.name = '';
    this.setName = function(name) {
        this.name = name;
    }
}

const Person1 = function() {
    this.name = '';
    this.setName = function(name) {
        this.name = name;
    }
}
const obj = new Person1();

// Arrow function has no constructor
const Person2 = (x, y) => {

};

new Person2();

Person2(20, 30);
