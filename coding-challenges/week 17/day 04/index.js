class Stack {
    constructor () {
        this.array = [];
    }

    push (value){
        this.array.unshift(value);
    }

    pop() {
        this.array.shift();
    }

    print() {
        console.log(this.array)
    }
}

let s = new Stack();

s.push(13);
s.print();
s.push(74);
s.print();
s.push(56);
s.print();

s.pop();

s.print();