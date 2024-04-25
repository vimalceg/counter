import React from 'react';
import DependenciesFactory from './DependenciesFactory';
import IController from '../../adapters/interfaces/IController';

class Counter extends React.Component{
    private controller:IController
    constructor(props){
        super(props);
        
        let {controller}=DependenciesFactory({setState:(state:any)=>{
            if(this.state===undefined){
                this.state=state;
            }else{
            this.setState(state);
            }
        }})
        this.controller=controller;
        this.controller.initialize({count:props.count});
    } 
    render(){ 
        let {count}=this.state;
        return <div>
        <button>-</button>
        {count} 
        <button onClick={this.controller.handleIncrement}>+</button>
        </div>
    }
}
export default Counter; 