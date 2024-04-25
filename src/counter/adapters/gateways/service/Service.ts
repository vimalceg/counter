import UseCase from "../../../usecases/interfaces/UseCase";
import IService from "../../../usecases/interfaces/gateways/IService";
import InitializeUseCase from '../../../usecases/interactors/InitializeUseCase';
import CounterDependencies from "../../../usecases/interfaces/CounterDependencies";

class Service implements IService{
    initializeUseCase: InitializeUseCase;
    constructor(dependencies:CounterDependencies){
        this.initializeUseCase =new InitializeUseCase(dependencies);
    }
    initialize(input:In){
        this.initializeUseCase.execute(input);
    }
    
}
export default Service;