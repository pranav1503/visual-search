import React, { Component } from 'react'
import "../style.css";
export default class Bars extends Component {

    constructor(props){
        super(props);
        this.state = {
            msg : ""
        }

        this.animateSearch = this.animateSearch.bind(this);
        this.createBars = this.createBars.bind(this);
    }

    createBars(){
        let arr = this.props.arr;                
        let items = [];
        arr.forEach((element,index) => {
            items.push(<div key={index} className="bar-element" id={index}> {element} </div>)
        });
        if(this.props.find !== -1 && arr.length !== 0){
            let msg = this.animateSearch();               
        }
        return items;
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async animateSearch(){
        let arr = this.props.arr;
        let key = this.props.find;    
        await this.timeout(500);
        for (let index = 0; index < arr.length; index++) {
            let divs = document.querySelectorAll(".bar-element");
            for(let i=0;i<divs.length;i++){
                divs[i].style.backgroundColor = "#ADD8E6";
            }
            document.getElementById(index).style.backgroundColor = "red";
            await this.timeout(500);
            if(arr[index] === key){
                document.getElementById(index).style.backgroundColor = "green";
                await this.timeout(500);
                alert("Element found at "+index);
                return;
            }
            
        }        
        document.getElementById(arr.length-1).style.backgroundColor = "#ADD8E6";
        await this.timeout(500);
        alert("Element Not Found.");
        return "Element Not Found";
    }

    render() {
        let items = this.createBars();    
        return (
            <div>
                <div className="container">
                    <div className="flex-container">   
                        {items}                                                             
                    </div>                     
                </div>
            </div>
        )
    }
}
