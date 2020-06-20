import React, { Component } from 'react';
import Random from './Random'




export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:Math.floor(Math.random()*(100-1+1)+1)
    }
  }
  isEven =(val)=>{ 
    return val % 2 === 0 ? "Even" :"Odd"
  }
  generateNumber = () => {
    return Math.floor(Math.random()*(100-1+1)+1)
  }
  getClassName(val){
    return val %2 ===0 ?"bg-danger text-ehite text-center p-2 m-1":
    "bg-secondary text-white text-center p-2 m-1"
  }
  previous=(val)=>{
    return ((val)+1) % 2 ===0 ?"Even":"Odd"

  }
  handelClick=()=>this.setState({count:this.generateNumber()});
  render=()=>
  <div>
    <h1  className="bg-primary text-white text-center p-2 m-1">Random(1-100){ this.state.count } Even/Odd</h1>
  <table className="table table-striped table-bordered table-sm">
 <thead className="bg-info text-white">
 <tr>
   <th>Value</th>
   <th>Even?</th>
   </tr>
 
 </thead>
 <tbody>
 <tr>
 <td>{ this.state.count }</td>
 <td>{ this.isEven(this.state.count) } </td>
 

 </tr>
 </tbody>
 <tfoot className="text-center">
 <tr>
 <td colSpan="4">
 <button className="btn btn-info m-2"
 onClick={ this.handelClick}>
 Click Me
 </button>
 </td>
 </tr>
 </tfoot>
 </table>
 <Random/>
 </div>
 } 
