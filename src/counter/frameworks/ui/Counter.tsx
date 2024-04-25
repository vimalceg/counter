import React from 'react';
import DependenciesFactory from './DependenciesFactory';
import IController from '../../adapters/interfaces/IController';

class Counter extends React.Component{
    private controller:IController
    constructor(props){
        super(props);
        this.state={}
        let {controller}=DependenciesFactory({setState:this.setState})
        this.controller=controller;
        this.controller.initialize(props.count);
    } 
    render(){ 
        let {count}=this.props;
        return <div>test
        <button>-</button>
        {count} 
        <button>+</button>
        </div>
    }
}
export default Counter; 