import Model from './component/Model'
import React, { useState } from 'react'

export default function M() {
    const [openModel,setOpenModel]=useState(false);
  return (
    <div>
      <h1>Hey Click open the model</h1>
      <button className='openModalBtn' onClick={()=>{
         setOpenModel(true) 
      }}>open</button>
     {openModel && <Model closeModel={setOpenModel}/>} 
    </div>
  )
}
