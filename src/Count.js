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
    //time join ......//......time show
//     today = new Date()
// past = new Date(2023,00,04) // remember this is equivalent to 06 01 2010
//dates in js are counted from 0, so 05 is june

// function calcDate(date1,date2) {
//     var diff = Math.floor(date2.getTime() - date1.getTime());
//     var day = 1000 * 60 * 60 * 24;

//     var days = Math.floor(diff/day);
//     var months = Math.floor(days/31);
//     var years = Math.floor(months/12);
//     var hours = Math.floor(diff / 3600) %24;
//    diff -= hours * 3600;
   
//    // calculate (and subtract) whole minutes
//    var minutes = Math.floor(diff / 60) % 60;
//    diff -= minutes * 60;
   
   // what's left is seconds
//    var seconds = diff % 60; 
//     var message = date2.toDateString();
//     message += " was "
//     message += days + " days " 
//     message += months + " months "
//     message += years + " years"
//     message += hours + " hours"
//      message += minutes + " minutes"
//         message += seconds+ " seconds"

//     return message
//     }


// a = calcDate(today,past)
// document.write(a) 
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
