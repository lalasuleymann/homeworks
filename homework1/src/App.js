import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
class Toggle extends Component {
  constructor(){
    super();

    this.state = {
      text: "Hi"
    }
  }
  
  render(){
    return(
      <>
      <h1 className="txt">{this.state.text}</h1>
      <button className="btn" onClick={() =>{
        this.setState({
          text:this.state.text==="Hi"?"Bye":"Hi"
        });

      }}>
        Click Me
      </button>
      </>
    )
  }
}

export default Toggle;
