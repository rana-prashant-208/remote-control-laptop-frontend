import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Remote Control

      {/* //Add buttons to call functions for Controlling volume and the sleep state */}
      {<Control></Control>}
      </header>
    </div>
  );
}
class Control extends Component{
  constructor(props){
    super(props);
    this.increase=this.increase.bind(this)
    this.mute=this.mute.bind(this)
    this.decrease=this.decrease.bind(this)
    this.unmute=this.unmute.bind(this)
    this.sleep=this.sleep.bind(this)
    this.lock=this.lock.bind(this)
  }
  render(){
   return( <div className="LaptopControl">
     <br/>
      <button onClick={this.increase}>🔊</button>
      <button onClick={this.decrease}>🔉</button>
      <button onClick={this.mute}>🔕</button>
      <button onClick={this.unmute}>🔔</button>
      <button onClick={this.sleep}> 😴</button>
      <button onClick={this.lock}>🔒</button>
   </div>
   )
  }
  increase(){
    console.log("increase called");
    this.callserver("increase")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  decrease(){
    console.log("decrease called");
    this.callserver("decrease")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  lock(){
    console.log("lock called");
    this.callserver("lock")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  mute(){
    console.log("mute called");
    this.callserver("mute")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  unmute(){
    console.log("unmute called");
    this.callserver("unmute")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  sleep(){
    console.log("sleep called");
    this.callserver("sleep")
    .then(
      response=>{
         alert("Done")
      }
  ).catch(
      error=>{
        alert("failed")
          }
  )
  }
  callserver(value){
    return axios.get("http://192.168.0.104:8080/laptopcontrol/"+value);//used to call the backend with teh values
  }

}
export default App;
