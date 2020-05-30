class Circle {
    getPI() {
        console.log('PI = ' + 3.14);
    }
}

const circle = new Circle();
//circle.getPI(); //PI = 3.14

class NewCircle extends Circle {
    getNewPi() {
        console.log('PI = 2.14');
    }  
    
    getPI() {
        console.log('PI from child: 4.14');
    }
}

const x = new NewCircle();
//x.getNewPi();
x.getPI();