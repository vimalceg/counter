import ICounter from "./interfaces/ICounter";

class Counter implements ICounter{
    constructor(private count:number){}
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    getCount() {
        return this.count;
    }
}
export default Counter;