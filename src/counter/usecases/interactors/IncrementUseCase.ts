import AbstractUseCase from "./AbstractUsecase";

class IncrementUseCase extends AbstractUseCase<void> {
    execute(){
        let counter=this.dependencies.repository.getCounter();
        counter.increment();
        this.dependencies.presenter.showCounter(counter.getCount())
    }
}
export default IncrementUseCase;