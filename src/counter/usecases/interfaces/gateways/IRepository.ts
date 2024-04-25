import ICounter from "../../../entities/interfaces/ICounter";

interface Repository {
    saveCounter(counter:ICounter):void;
    getCounter():ICounter;
}
export default Repository;