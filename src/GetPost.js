import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postData,removeTodo } from './Features/GetpostSlice'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { json } from 'react-router-dom';
const GetPost = () => {
   
    const data = useSelector((state) => state);
   
    console.log("====>",data)
   
    const dispatch=useDispatch()
    
 useEffect(()=>{
    
    dispatch(postData())
  },[])


// const onDelete=()=>{
    
//  let res=  data.postData.postData.filter((item)=>item.email_id !==data.email_id)
//  console.log(res)
// }

  return (
    <div>
      <form >
          <h1>GetPost Data</h1>
          {
              data?.postData?.postData?.map((item)=>{
                  return(
                      <div>
                         <h1>{item?.title}</h1>
                          <p>{item?.content}</p>
                          <img  src={item?.image} ></img>
                      
                       
                      </div>
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
