export const PI = 3.14;
export const getArea = (radius) => PI * radius * radius;
export class Circle {
    constructor() {

    }

    getArea(r) {
        return PI*r*r;
    }
}