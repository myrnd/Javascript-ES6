//Arrow Function
//no local this


var obj = {
    val: 20,
    getVal: function() {
        console.log(this.val);
    },
    arrowGetVal: () => this
};

var x = {
    val: 30
};
var y = {
    val: 40
};
var z = {
    val: 50
};

//obj.getVal(); //20

//call
//apply
//bind

//obj.getVal.call(obj);
//obj.getVal.apply(x);
//obj.getVal.call(y);
//obj.getVal.apply(z);

console.log( obj.arrowGetVal() );