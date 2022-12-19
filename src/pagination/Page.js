import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Page1 from './Page1';
import Pagenation1 from './Pagenation1';

const Page=()=>{
   const [post,setPost]=useState([]);
   const [loading,setLoading]=useState(false);
   const [currentPage,setCurrentPage]=useState(1);
   const [postPerPage,setPostPerPage]=useState(10);
   useEffect(()=>{
    const fetchPost=async()=>{
       setLoading(true) 
       const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
       setPost(res.data);
       setLoading(false)

    }
    fetchPost();
   },[])
  console.log(post);
  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPost=indexOfLastPost -postPerPage;
  const currentPost=post.slice(indexOfFirstPost,indexOfLastPost)
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
    return(
        <div className='container mt-5'>
          <h1 className='text-primary mb-3'>MY BLOG</h1>
          <Page1 post={currentPost} loading={loading}/>
          <Pagenation1 postPerPage={postPerPage} totalPost={post.length} paginate={paginate}/>
        </div>
    )
}
export default Page;





