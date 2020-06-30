import React, { Component } from 'react'
import {InputGroup, Button, Alert} from 'react-bootstrap';
import './style.css';
export default class InputArray extends Component {
    constructor(props){
        super(props)

        this.state = {
            value : '',
            key : -1,
            msg : '',
            showAlert: "none"
        };

        this.getInput = this.getInput.bind(this);
        this.storeInput = this.storeInput.bind(this);    
    }
    
    
    getInput(e){        
        this.setState({
            value : e.target.value
        });
    }

    storeInput(){
        let intval = parseInt(this.state.value);        
        this.setState({
            msg : '',
            showAlert: "none" 
        });

        if(intval.toString().length !== this.state.value.length){
            this.setState({
                msg : 'Invalid Key: ' + this.state.value,
                showAlert: "block" 
            }); 
            intval = -1;
        }else{
            this.setState({
                key: intval
            });
        }
        
        this.setState({
            key : intval
        },()=>{
            if(this.props.onChange){
                this.props.onChange(this.state);
            } 
        });               
    }

    render() {
        return (
            <div className="container input-container">
                {/* <p className="input-error-msg"></p> */}
                <Alert variant="warning" style={{"display" : this.state.showAlert}}>
                    {this.state.msg}
                </Alert>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Enter the Key</InputGroup.Text>
                    </InputGroup.Prepend>                    
                    <input type="text" className="form-control" onChange={this.getInput}/>
                    <InputGroup.Append>
                        <Button variant="primary" onClick={this.storeInput} disabled={this.props.disBtn}>&nbsp;Search&nbsp;</Button>
                    </InputGroup.Append>
                </InputGroup>
                <br />
            </div>
        )
    }
}
