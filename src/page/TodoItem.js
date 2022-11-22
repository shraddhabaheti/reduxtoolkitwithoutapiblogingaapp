import { SettingsSystemDaydreamTwoTone, Update } from "@mui/icons-material";
import { dialogActionsClasses } from "@mui/material";
import { color } from "@mui/system";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  let {text,setInput,setToggleButton} = props;
  
     const deleteTodo = () => {
      props.onCheck(props.id);
    };
  
     
   const editData=()=>{
    setInput({['text']:text, ['id']:props.id})
    
      setToggleButton(true)
     
   }
   
    return ( 
      <div style={{margin:"30px" ,marginLeft:'-50px'}} >
          
        <input type="checkbox" ></input>
        <label>{props.text}</label>
          <Button className="btn1" onClick={deleteTodo} variant="danger">Delete</Button>
         <Button className="btn1" onClick={()=>editData(text)} variant="danger"   name="edit" >Edit</Button>
                  
       
        
      </div>
    );
  };
 
  export default TodoItem;