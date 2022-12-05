import { ReactDOM } from "react";
import { useState } from "react";
import { Component } from "react"
// export const About=()=>{
//     return(
//         <div>Hello i am shraddha baheti</div>
//     )

 
export class About extends Component{
    constructor(){
        super()
        this.state={
           count:0
        }
        
        }
        increment(){
            this.setState({
                count :this.state.count+1
            })
        }
        decrement(){
            this.setState({
                count:this.state.count-1
            },
            ()=>{
              console.log("callbackvalue",this.state.count)
            }
            
            )
        }
     
    //     chnageEvent=()=>{
    //         this.setState({
    //             message:"thanks for subscribing"
    //         })
    // }
    render(){
      const name=["shraddha","komal","preety"]
      const namelist=name.map((name,index)=><h1>{index}{name}</h1>)
        return(
            <div>
                <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
          <h1>{namelist}</h1>
            </div>
            
         ) 
        }
     }
