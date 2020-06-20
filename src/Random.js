import React from 'react'
import './App.css'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            min:1,
            max:10,
            number:1
        }
        
    }
    componentDidMount(){
        this.setState({number:this.generatenumber(this.state.min,this.state.max)})
    }
    minChange=(event)=>{
        this.setState({min:event.target.value})
    }
    maxChange=(event)=>{
        this.setState({max:event.target.value})
    }
getinput=()=>{
    if(this.state.min > this.state.max){
        const minTep=this.state.min
        const maxTep=this.state.max
        this.setState(
            {
            min:maxTep,
            max:minTep
        },()=>
        this.setState({
            number:this.generatenumber(this.state.min,this.state.max)
        })
        );
    } else {
        this.setState({
            number:this.generatenumber(this.state.min,this.state.max)
        })
    }
}
    generatenumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    render=()=>
    
        <div>
            <div className="mb-3">  
 <h1  className="bg-primary text-white text-center p-2 m-1">Random Number Generator by any Range</h1>
<table className="table table-striped table-bordered table-sm ">
<thead className="bg-info text-white">
    
<tr className="text-center">
   <th> <label>Min:</label><input className="form-control" type="number"  min="0" max="9999999999" value={this.state.min} onChange={this.minChange} /></th>
   <th><label>Max:</label><input className="form-control" type="number" min="0" max="9999999999" value={this.state.max} onChange={this.maxChange}/></th>
   </tr>
   
   <tr>
<td colSpan="4" className="text-center">Random Number between  {this.state.min} & {this.state.max} is: <p className="mypara"><b>{this.state.number}</b></p></td>
   </tr>
   
   </thead>
   
                         <hr></hr>
            <tfoot className="text-center">
              <tr>
                 <td colSpan="4">
            <button className="btn btn-info m-2" type="submit" onClick={this.getinput}>Generate Number</button>
            </td>
            </tr>
            </tfoot>
            
            </table>

     </div>
        </div>
    
}

export default App