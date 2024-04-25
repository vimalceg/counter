import IService from "../../usecases/interfaces/gateways/IService";

interface IHandler<T>{
    handle(input:T):void;
}

class Increment implements IHandler<number> {
    constructor(private service:IService){}
    handle(){
        this.service.increment();
    }
}
export default Increment;