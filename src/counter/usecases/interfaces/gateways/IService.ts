import InitailizeInputModel from "../input/ InitializeInputModel";

interface IService  {
  initialize(input: InitailizeInputModel):void;
  increment():void;
}
export default IService;
