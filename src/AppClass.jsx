import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
  constructor(props){
    super()
    this.data = props
  }  

  // code here
  render(){
    
    let galleryStyle = {
      textAlign:"center",
      color:"red",
      // fontFamily:"sans-serif",
      // fontStyle:"italic" 
    }
  
    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"49.5% 49.5%",
      gridGap:"1%"
    }

    return (
      <>
        <h1 style={galleryStyle}>Kalvium Gallery Using Class Component</h1>
        <div style={styleMyDiv}>
          <img src={this.data.props[0].img} width={"100%"}/>
          <img src={this.data.props[1].img} width={"100%"}/>
          <img src={this.data.props[2].img} width={"100%"}/>
          <img src={this.data.props[3].img} width={"100%"}/>
        </div>
      </>
    )
  }
}
