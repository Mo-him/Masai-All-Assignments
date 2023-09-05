

class stack{
    constructor(){
        this.length = 0;
        this.stack = [];
    }

    push(...rest){
        rest.forEach(el => {
            let index = this.length;
            this.stack[index] = el;
            this.length++;
        })
    }

    pop(){
        const topindex = this.length - 1;
        const storeelement = this.stack[topindex];
        delete this.stack[topindex];
        this.length--;
        this.stack.length--;
        return storeelement;
    }

    peek(){
        let topindex = this.length - 1;
        return this.stack[topindex];
    }

    reverse(){
        var i =0;
        while(i != this.length){
            stack.push(i);
            i++;
        }
    }
}

const stk = new stack();
stk.push(1,2,3,4,5,6);

stk.pop();
console.log(stk.pop())

console.log(stk.peek())
console.log(stk.stack)

console.log(stk.stack.reverse())

console.log(stk.length)



