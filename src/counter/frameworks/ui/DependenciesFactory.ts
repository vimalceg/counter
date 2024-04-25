import Repository from "../../adapters/gateways/repository/Repository";
import Service from "../../adapters/gateways/service/Service";
import Presenter from "../../adapters/presenters/Presenter";
import Controller from '../../adapters/controllers/Controller';

function DependenciesFactory({setState}){
    let presenter=new Presenter(setState);
    let repository = new Repository();
    let service= new Service({presenter:presenter,repository:repository});
    let controller = new Controller(service);
    return {controller}
}
export default DependenciesFactory;