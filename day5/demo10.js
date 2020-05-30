class Range {
    constructor(start=1, end=5) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;

        return {
            next: function() {
                if (current <= last) {
                    return {done: false, value: current++};
                }
                return {done: true};
            }
        }
    }
}

let x = new Range();
for(let a of x) {
    console.log(a);
}

let y = new Range(5, 15);
for(let b of y) {
    console.log(b);
}