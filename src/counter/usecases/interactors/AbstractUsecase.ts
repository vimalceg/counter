import CounterDependencies from "../interfaces/CounterDependencies";
import UseCase from "../interfaces/UseCase";

abstract class AbstractUseCase<InputModel> implements UseCase<InputModel> {
  constructor(protected dependencies: CounterDependencies) {}
  abstract execute(inputModel: InputModel): void;
}
export default AbstractUseCase;
