const getValues = (...args) => { //rest operator
    return args;
};


const getValues1 = (a, ...args) => {
    console.log(a);
    console.log(args);
};

//console.log( getValues(10, 20, 30) );

getValues1(10, 20, 30);