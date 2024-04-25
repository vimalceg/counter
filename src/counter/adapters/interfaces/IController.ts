export type Event={
    count:number
}

interface IController{
    initialize(event:Event):void
}
export default IController;