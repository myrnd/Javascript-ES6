for(var i=1; i<=3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
//Output: 4 4 4


for(let i=1; i<=3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
//Output: 1 2 3

