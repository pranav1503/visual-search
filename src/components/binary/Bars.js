import React, { Component } from 'react'
import "../style.css";
export default class Bars extends Component {

    constructor(props){
        super(props);
        this.animateSearch = this.animateSearch.bind(this);
        this.createBars = this.createBars.bind(this);
    }

    createBars(){
        let arr = this.props.arr;                
        let items = [];
        arr.forEach((element,index) => {
            items.push(<div key={index} className="bar-element" id={index}>{element}</div>)
        });
        if(this.props.find !== -1){
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
        let first = 0;
        let last = arr.length-1
        let mid;
        while(last>=first){
            let divs = document.querySelectorAll(".bar-element");
            for(let i=0;i<divs.length;i++){
                divs[i].style.backgroundColor = "#ADD8E6";
            }
            document.getElementById(first).style.backgroundColor = "red";
            document.getElementById(last).style.backgroundColor = "red";            
            mid = Math.floor((first+last)/2);
            document.getElementById(mid).style.backgroundColor = "purple";
            if(arr[mid] == key){
                await this.timeout(500);
                for(let i=0;i<divs.length;i++){
                    divs[i].style.backgroundColor = "#ADD8E6";
                }
                document.getElementById(mid).style.backgroundColor = "green";
                await this.timeout(500);
                alert("Element Found at index " + mid);
                return;
            }else if(arr[mid]>key){
                last = mid-1;
            }else{
                first = mid + 1;
            }
            await this.timeout(1000);
        }
        document.getElementById(arr.length-1).style.backgroundColor = "#ADD8E6";
        await this.timeout(500);
        alert("Element Not Found.");
        return ;
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
