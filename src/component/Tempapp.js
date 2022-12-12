import React, { useEffect, useState } from 'react'
import '../Registration.css';
export default function Tempapp() {
  let Time=new Date().toLocaleTimeString('en-US')
  const [cTime,setCTime]=useState(Time);
  const [city,setCity]=useState(null)
  const [search,setSerch]=useState(null)
  
  useEffect(()=>{
    const fetchApi=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4a35237ec8058813aa3a12b9d02865b5`
       const responce=await fetch(url)
       const resJson= await responce.json();
       console.log(resJson)
       setCity(resJson.main)
    }
    fetchApi()
  },[search])
 const updateTime=()=>{
   let Time=new Date().toLocaleTimeString('en-US');
   setCTime(Time)
 }
 setInterval(updateTime,1000)
  return (
    <div>
      <form className='Form'>
     
      <h1>Weather app </h1>
     <div className='div_style'>
     <p>{cTime}</p>
     </div>
    <input value={search} className='input_name' type ="serch" placeholder='serch....'onChange={(e)=>{setSerch(e.target.value)}}/> <br/><br/>
    {/* <input  className='input_name' type ="text" placeholder='Country....'/><br/> 
    <button className='submit_button' type='submit'>Get Weather</button> */}
   {
     !city ?(
       <p>city is not found</p>
     ):(
       <div>
         <div>
      <h1>city :-  {search} </h1><br/>
      <h3>{city.temp} °Cel </h3><br/>
      <p>{city.temp_max} °Cel  || {city.temp_min} °Cel  </p>
    </div>
   
    </div>
     )

   }
   
      </form>
      
     {/* <div>
       <h1>{search}</h1>
       <h1>{city.main.temp} </h1>
       <h3>{city.main.temp_max} || {city.main.temp_min}  </h3>
     </div>
     <div></div>
     <div></div>
     <div></div> */}
    </div>
  )
}
