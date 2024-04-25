import IPresenter from '../../usecases/interfaces/output/IPresenter';

class Presenter implements IPresenter{
    constructor(private setState:Function){

    }
    showCounter(count: number): void {
        this.setState({count})
    }
    showError(error: String): void {
        throw new Error('Method not implemented.');
    }
    
}
export default Presenter;