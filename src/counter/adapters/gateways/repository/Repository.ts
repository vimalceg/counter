import ICounter from '../../../entities/interfaces/ICounter';
import IRepository from '../../../usecases/interfaces/gateways/IRepository'
class Repository implements IRepository{
    counter:ICounter;

    saveCounter(counter: ICounter): void {
        this.counter=counter;
    }
    getCounter(): ICounter {
        return this.counter;
    }
    
}
export default Repository;