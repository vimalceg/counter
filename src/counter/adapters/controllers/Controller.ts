import IService from "../../usecases/interfaces/gateways/IService";
import Initalize from "./Initialize";
import IController,{Event} from '../interfaces/IController'


class Controller implements IController {
    initializeHandler: Initalize;
    constructor(private service:IService){
        this.initializeHandler=new Initalize(service);
    }
   initialize(event:Event){
    this.initializeHandler.handle(event.count);
   }
}
export default Controller;