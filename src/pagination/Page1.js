import React from "react"
const Page1=({post,loading})=>{
    if(loading){
        return <h2>loading.....</h2>
    }
    return(
      <ul className="list-group mb-4">
    {
        post.map(post=>(
            <li key={post.id} className='list-group-item'>{post.title}</li>
        ))
    }
     
      </ul>
    )
}
export default Page1;