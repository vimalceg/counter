import IService from "../../usecases/interfaces/gateways/IService";
import Initalize from "./Initialize";
import IController,{Event} from '../interfaces/IController'
import Increment from "./Increment";


class Controller implements IController {
    initializeHandler: Initalize;
    incrementHandler:Increment;
    constructor(service:IService){
        this.initializeHandler=new Initalize(service);
        this.incrementHandler=new Increment(service);
        
        this.initialize=this.initialize.bind(this);
        this.handleIncrement=this.handleIncrement.bind(this);
    }
  
   initialize(event:Event){
    this.initializeHandler.handle(event.count);
   }
   handleIncrement(){
    this.incrementHandler.handle();
   }
}
export default Controller;