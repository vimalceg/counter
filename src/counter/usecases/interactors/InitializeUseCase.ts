import Counter from "../../entities/Counter";
import CounterDependencies from "../interfaces/CounterDependencies";
import UseCase from "../interfaces/UseCase";
import InitializeInputModel from "../interfaces/input/ InitializeInputModel";
import AbstractUseCase from "./AbstractUsecase";

class InitializeUseCase extends AbstractUseCase<InitializeInputModel>  {
    execute(count:InitializeInputModel){
        let counter=new Counter(count);
        this.dependencies.repository.saveCounter(counter);
        this.dependencies.presenter.showCounter(counter.getCount())
    }
}
export default InitializeUseCase;