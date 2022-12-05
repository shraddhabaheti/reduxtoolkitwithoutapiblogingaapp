import React, { useReducer } from 'react'
const initalState=0;
    const reducer=(state,action)=>{
         switch(action){
             case 'increment':
                 return state+1;
              case 'decrement':
                  return state-1;
                  case 'reset':
                      return initalState
                     default :
                     return state;

         }
    }
export default function RedCount() {
    const [count,dispatch]=useReducer(reducer,initalState)
    const isEven=()=>{
      return count % 2 ==0
    }
  return (
    <div>
        <h1>{count}</h1>
       <button onClick={()=>dispatch('increment')}>Increment</button>
       <p>{isEven() ? "even" :'odd'}</p>
       <button onClick={()=>dispatch('decrement')}>Decrement</button>
       <button onClick={()=>dispatch( 'reset')}>Reset</button>
    </div>
  )
}
