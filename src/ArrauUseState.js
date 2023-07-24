import axios from 'axios'
import React, { useState,useEffect } from 'react'
const initState=["clerk","burse"]
export default function ArrauUseState() {
    const [persons,setperson]=useState(initState)
    
    const handleClick=()=>{
        // persons.push("shraddha")
        // persons.push("Baheti")
        // setperson(persons)
        const newPerson=[...persons]
        newPerson.push("shraddha")
        newPerson.push("baheti")
        setperson(newPerson)
    }
    console.log("ArrayUseState")
  //  useEffect(()=>{
  //    axios.get('https://jsonplaceholder.typicode.com/posts')
  //    .then((res)=>console.log("shradasdd",res))
  //  })
  return (
    <div>
        <button onClick={handleClick}>Click</button>
     {
         persons.map(person=>(
             <div key={person}>{person}</div>
         ))
     }
    </div>
  )
}
