import UseCase from "../UseCase";
import InitailizeInputModel from "../input/ InitializeInputModel";

interface IService  {
  initialize(input: InitailizeInputModel):void;
}
export default IService;
