import React, { useEffect, useState } from 'react'

export default function Count() {
    const inital=0
   
    const [count,setCount]=useState(inital);
    const [name,setName]=useState({
        firstName:'',
        lastName:''
    })
    const handleChange=(e)=>{
        setName({
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        document.title=`you Cliked ${count} it items`
    })
    const isEven=()=>{
      return count % 2 == 0
    }
  return (
    <div>
     
      count:{count}
      <button onClick={()=>setCount(inital)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <p>{isEven() ? "even" :'odd'}</p>
      <button onClick={()=>setCount(count-1)}>decrement</button>
           <input type="text" name='firstName' value={name.firstName} onChange={handleChange}/>
           <input type="text" name='lastName' value={name.lastName} onChange={handleChange}/>
           <h1>{name.firstName}</h1>
           <h1>{name.lastName}</h1>
           <p>{JSON.stringify(name)}</p>
    </div>
  )
}
