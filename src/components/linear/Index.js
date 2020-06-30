import React, { Component } from 'react'
import Navbar from '../Navbar_My';
import Inputs from '../InputArray';
import Boxes from './Bars';
import KeyElement from '../InputKey';
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr : [],
            key : -1,
            myState : [],
        };
        this.getData = this.getData.bind(this);
        this.getKey = this.getKey.bind(this);        
    }

    getData(data){        
        this.setState({
            arr: data.arr,
            myState: [this.state.arr,this.state.key]
        })                 
    }

    getKey(data){        
        this.setState({
            key: data.key,
            myState: [this.state.arr,data.key]
        }) ;               
    }


    render() {
        let keymsg = "No Key Found";
        if(this.state.key !== -1){
            keymsg = "Key: " + this.state.key;
        }
        return (
            <div>
                <Navbar name="Linear Search"></Navbar>
                <Inputs onChange={this.getData}></Inputs>                
                <Boxes key={this.state.myState} arr={this.state.arr} find={this.state.key}></Boxes>
                <KeyElement onChange={this.getKey}></KeyElement>
                <h3>{keymsg}</h3>
            </div>
        )
    }
}
