import { CircularProgress } from "@mui/material";
import React from "react"

const Page1=({post,loading})=>{
    if(loading){
       
            return <h2><CircularProgress color="secondary"/></h2>

       
    }
    return(
      <ul className="list-group mb-4">
    {
        post.map(post=>(
            <li key={post.id} className='list-group-item'>{post.title}</li>
        ))
    }
    {/* {
        post.map((post)=>{
            const {id,title,body}=post;
            <div className="list-group-item" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
        })
    } */}
     
      </ul>
    )
}
export default Page1;