import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Features/loginSlice';
 import { useSelector } from 'react-redux';
import './Registration.css';
const Login = () => {
    const[state,setState]=useState({
        email_id:'',
        password:''
    })
    const[error,setError]=useState({
      email_id:'',
      password:''
    })
    
    const navigate=useNavigate();
    
     const selector = useSelector((state) => state);
    
    const dispatch=useDispatch();
    const handleChange=(e)=>{
      let {name,value}=e.target
      if(name==="email_id"){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if(!pattern.test(value)){
           setError({
             ...error,
             [name]:"please Enter the Email id"
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
      }
      if(name==="password"){
        var password = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);{
          if(!password.test(value)){
            setError({
              ...error,
              [name]:'please Enter the password'
            })
          }else{
            setError({
              ...error,
              [name]:''
            })
          }
        }
      }

      setState({
        ...state,
        [name]:value
      })
    }
  
    const Submit=(e)=>{
    
      e.preventDefault()
      dispatch(login(state))

      if(!state.password || !state.email_id){
        let error={};
        if(!state.email_id){
          error.email_id="please Enter the email_id"
          setError(error)
        }
        if(!state.password){
          error.password="please Enter the password"
          setError(error)
        }
       }else{
      
        
       
        // if(selector.register.myRegistration[0].email_id ===state.email_id){
        //   navigate('/todo')
        // }else{
        //   navigate('/pre')
        // }
        const payload=selector.register.myRegistration.find((user)=>user.email_id === state.email_id && user.password === state.password )
        if(payload){
         console.log("cler=============")
         navigate('/todo')
          // 
        }else{
         navigate('/pre')
        }
      }
     

    }
  return (
    <div>
      <form className='Form'>
      <h1 className='Registration_design'>Login From</h1>
          <div className='div1'>
              <label className='label_name'>email_id</label>
              <input type="text"name='email_id' className='input_name'onChange={handleChange} />
               <span className='error'>{error.email_id}</span> 
          </div>
          <div className='div1'>
              <label className='label_name'>password</label>
              <input type="text"name='password' className='input_name' onChange={handleChange}/>
               <span className='error'>{error.password}</span>
          </div>
          <button className='submit_button'  onClick={Submit}>Login</button>
      </form>
   
    </div>
     
  )
}

export default Login
