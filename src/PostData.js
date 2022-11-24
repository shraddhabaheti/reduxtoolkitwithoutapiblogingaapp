import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { json } from 'react-router-dom';
import { postData } from './Features/GetpostSlice';

const PostData = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        image: ''
    })

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const dispatch = useDispatch();
    // const handleFile=(e) => {

    //     let url = URL.createObjectURL(e.target.files[0]);
    //     setState(url)

    // } 
    const handleFile =async (e) => {
       let file=URL.createObjectURL(e.target.files[0])
        // let file=e.target.files[0]
        // let base64=await convertBase64(file)
        // console.log("*************",base64)
        // let parseImage=JSON.parse( base64);
        // console.log("parse image",parseImage)

    //   console.log("image type",typeof(base64))
        // setState(base64)
        
        //  let url = URL.createObjectURL(e.target.files[0]);
        setState({
            ...state,
            [e.target.name]:file
           
        })
    }
  
// const convertBase64=(file)=>{
// return new Promise ((resolve,reject)=>{

//  const fileReader=new FileReader();
//  fileReader.readAsDataURL(file);
//  fileReader.onload =()=>{
//     resolve(fileReader.result)
//  }
//  fileReader.onerror=(error)=>{
//      reject(error)
//  }
// })
// }

    const onSubmit = (e) => {
        e.preventDefault();

       
       if(state.title || state.content || state.image ){
     
        dispatch(postData(state))
       }else{
           
       }
        // let formData = new FormData();
        // formData.append('title', title)
        // formData.append('content', content)
        // formData.append('image', image)
       
    }
    return (
        <div>
            <h1>post Data in Design</h1>
            <form  >
                <input type="text" name="title" onChange={handleChange} /> <br /><br />
                <textarea type="text" name="content" onChange={handleChange}></textarea><br /><br />

                <input type='file'  name="image" onChange={handleFile} /><br /><br />
                {/* <img src={state} width="300px" height="300px"/> */}
                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default PostData
