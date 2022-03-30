import React, {Component} from "react";
import { Button } from "./Button";
import "./Counter.css";
import { render } from "react-dom";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    handleCount(value) {
        this.setState((prevState) => ({ count: prevState.count + value }));
      }

    render(){
        if(this.state.count > 0){
            return(
            < >
            <div className="counter">
            <Button sign="-" count={this.check} updateCount={this.handleCount.bind(this)}/>
            <span> {this.state.count}</span>    
            <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)}/>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="counter">
            <button className="BTN">-</button>
            <span> {this.state.count}</span>    
            <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)}/>
            </div>
            </>
        )
    }
    }
}

export default Counter;