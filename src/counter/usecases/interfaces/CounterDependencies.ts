import Repository from './gateways/IRepository';
import Presenter from './output/IPresenter';

type CounterDependencies ={
    presenter:Presenter;
    repository:Repository;
}
export default CounterDependencies;