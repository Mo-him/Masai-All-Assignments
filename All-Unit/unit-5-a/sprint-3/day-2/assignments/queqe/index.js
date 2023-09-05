

class queue{
    constructor(){
        this.length = 0;
        this.queue = [];
    }

    add(...rest){
        rest.forEach(el => {
            let index = this.length;
            this.queue[index] = el;
            this.length++;
            this.queue.length++;
        })
    }

    poll(){
        const topindex = 0;
        const storeelement = this.queue[topindex];
        delete this.queue[topindex];
        this.length--;
        this.queue.length--;
        return storeelement;
    }

    peek(){
        let topindex = 0;
        return this.queue[topindex];
    }
}

const que = new queue();
que.add(1,2,3)

console.log(que.length)
console.log(que.queue)

que.poll();
console.log(que.queue)

que.add(1,2,3)
console.log(que.queue)

que.poll();
que.poll();
que.poll();
console.log(que.queue)
que.poll();
que.poll();
console.log(que.queue)