import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, postData,removeTodo } from './Features/GetpostSlice'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Registration.css';
import { json } from 'react-router-dom';
import { display, height, margin } from '@mui/system';
const GetPost = () => {
   
    const data = useSelector((state) => state);
   
    console.log("====> get data",data)
   
    const dispatch=useDispatch()
    
//  useEffect(()=>{
    
//     dispatch(postData())
//   },[])


const onDelete=()=>{
    dispatch(deleteData(data))

}


  return (
    <div>
      <form  className='Form'>
          <h1>GetPost Data</h1>
          {
              data?.postData?.postData?.map((item,index)=>{
                  return(
                    <Card key={index} className="indexCard">
                    <Card.Img className='cardImage' variant="top" src={item?.image}/>
                    <Card.Body>
                      <Card.Title>{item?.title}</Card.Title>
                      <Card.Text>
                      {item?.content}   
                   </Card.Text>
                      <Button variant="primary" onClick={onDelete}>Delete</Button>
                    </Card.Body>
                  </Card>
                      // <div key={index}>
                      //    <h1>{item?.title}</h1>
                      //     <p>{item?.content}</p>
                      //     <img className='image'  src={item?.image} ></img>
                      //     {/* <button onClick={onDelete}>Delete</button> */}
                       
                      // </div>
                //     <Card style={{ width: '18rem' }}>
                //     <Card.Img variant="top" src="holder.js/100px180" />
                //     <Card.Body>
                //       <Card.Title>{item?.title}</Card.Title>
                //       <Card.Text>
                //         {item?.content}
                //       </Card.Text>
                //       <Button variant="primary">Go somewhere</Button>
                //     </Card.Body>
                //   </Card>
                  )
                  
              })
              
          }
        
      </form>
    </div>
  )
}

export default GetPost
