import React from 'react'
import './Model.css'
function Model({closeModel}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button onClick={()=>closeModel(false)}>X</button>
            </div>
           
            <div className='title'>
                <h3>are you sure model open you want to continue?</h3>
            </div>
            <div className='body '>
                <p>The next page is awesome to continue </p>
            </div>
            <div className='footer'>
                <button id="cancelBtn" onClick={()=>closeModel(false)}>Cancel</button>
                <button >continue</button>

            </div>
        </div>
     
    </div>
  )
}

export default Model
