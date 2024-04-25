import IService from "../../usecases/interfaces/gateways/IService";

interface IHandler<T>{
    handle(input:T):void;
}

class Initalize implements IHandler<number> {
    constructor(private service:IService){}
    handle(count:number){
        this.service.initialize(count);
    }
}
export default Initalize;