import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from './Features/RegistrationSlice';
import './Registration.css';
const Registration = () => {
    const[state,setState]=useState({
        FirstName:'',
        LastName:'',
        UserName:'',
        email_id:'',
        password:'',
        password2:''

    });
   const [error,setError]=useState({
    FirstName:'',
    LastName:'',
    UserName:'',
    email_id:'',
    password:'',
    password2:''
   })
   const navigate=useNavigate();
   const dispatch=useDispatch()
   const handleChange=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     if(name==="FirstName"){
       if(value.length<3){
         setError({
           ...error,
           [name]:"please Enter the First Name"
         })
       }else{
         setError({
           ...error,
           [name]:''
         })
       }
      }
       if(name==="LastName"){
         if(value.length<3){
           setError({
             ...error,
             [name]:'please Enter the Last name'
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
       if(name==="UserName"){
         if(value.length<3){
           setError({
             ...error,
             [name]:"please Enter the userName"
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
       if(name==="email_id"){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if(!pattern.test(value)){
           setError({
             ...error,
             [name]:"please Enter the email_id"
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
       if(name === "password"){
        var password = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);
         if(!password.test(value)){
           setError({
             ...error,
             [name]:"please Enter the password"
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
       if(name==="password2"){
         if(value.length < 3){
           setError({
             ...error,
             [name]:'please Enter the confirmPassword'
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
       if(state.password && name==="password2"){
         if(state.password !== value){
           setError({
             ...error,
             [name]:'please password not a match'
           })
         }else{
           setError({
             ...error,
             [name]:''
           })
         }
       }
     setState({
       ...state,
       [name]:value
     })
   }
   
   const onSubmit=(e)=>{
     e.preventDefault()
     dispatch(register(state))
     if(!state.FirstName ||!state.LastName ||!state.UserName || !state.email_id ||!state.password || state.password!==state.password2||!state.password2 ){
      let error={};
      if(state.password !==state.password2){
        error.password2="password and confirmpassword not a match"
      }
      if(!state.FirstName){
        error.FirstName="please Enter the FirstName"
        setError(error)
      }
      if(!state.LastName){
        error.LastName="please Enter the Last name"
        setError(error)
      }
      if(!state.UserName){
        error.UserName="please Enter the user name"
        setError(error)
       }
       if(!state.email_id){
         error.email_id="please Enter the email_id"
         setError(error)
       }
       if(!state.password){
         error.password="please Enter the password"
         setError(error)
       }
       if(!state.password2){
         error.password2="please Enter the Password2"
         setError(error)
       }
     }else{
    //  navigate("/login")
      
     }
    

   }
   
  return (
    <div>
      <form className='Form'>
           <h1 className='Registration_design'>Registration From</h1>
           <div className='div1'>
           <label className='label_name'>FirstName</label>
          <input type="text" name='FirstName' className='input_name' onChange={handleChange}/>
          <span className='error'>{error.FirstName}</span>
           </div>
          <div  className='div1'>
          <label className='label_name'>LastName</label>
          <input type="text" name='LastName' className='input_name' onChange={handleChange}/>
         <span className='error'>{error.LastName}</span>
          </div>
          <div  className='div1'>
          <label className='label_name'>Username</label>
          <input type="text" name='UserName' className='input_name' onChange={handleChange}/>
          <span className='error'>{error.UserName}</span>
          </div>
         <div  className='div1' >
         <label className='label_name'>Email-Id</label>
          <input type="email" name='email_id' className='input_name' onChange={handleChange}/>
         <span className='error'>{error.email_id}</span>
         </div>
         <div  className='div1'>
         <label className='label_name'>password</label>
          <input type="text" name='password' className='input_name' onChange={handleChange}/>
         <span className='error'>{error.password}</span>
         </div >
          <div  className='div1'>
          <label className='label_name'>password2</label>
          <input type="text" name='password2' className='input_name' onChange={handleChange}/>
          <span className='error'>{error.password2}</span>
          </div>
         
          <button className='submit_button' onClick={onSubmit}>Submit</button>
      </form>
     
    </div>
  )
}

export default Registration
