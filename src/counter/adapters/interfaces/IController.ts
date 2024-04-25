

export type Event={
    count:number
}

interface IController{
    initialize(event:Event):void
    handleIncrement():void;
}
export default IController;