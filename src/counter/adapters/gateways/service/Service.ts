import IService from "../../../usecases/interfaces/gateways/IService";
import InitializeUseCase from '../../../usecases/interactors/InitializeUseCase';
import CounterDependencies from "../../../usecases/interfaces/CounterDependencies";
import InitializeInputModel from '../../../usecases/interfaces/input/ InitializeInputModel';
import IncrementUseCase from "../../../usecases/interactors/IncrementUseCase";

class Service implements IService{
    initializeUseCase: InitializeUseCase;
    incrementUseCase:IncrementUseCase;
    constructor(dependencies:CounterDependencies){
        this.initializeUseCase =new InitializeUseCase(dependencies);
        this.incrementUseCase = new IncrementUseCase(dependencies);
    }
    initialize(input:InitializeInputModel){
        this.initializeUseCase.execute(input);
    }
    increment(): void {
        this.incrementUseCase.execute();
    }
}
export default Service;