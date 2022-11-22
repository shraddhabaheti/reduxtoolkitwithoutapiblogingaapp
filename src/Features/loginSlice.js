import { createSlice, current } from "@reduxjs/toolkit"

// let initialState={
//     login:{
//         Email_id:'',
//         password:''
//     }
// }
const loginSlice=createSlice({
 name:"login",
 initialState:{
     mydata:[]
 },
 reducers:{
     login:(state,action)=>{
        //  const loginData={
        //     id: Math.random(),
        //     Email_id:action.payload.Email_id,
        //    password:action.payload.password,
        //  }
         //  state.mydata.push(loginData);
        state.mydata.push(action.payload)
         console.log("=====>",action)
         console.log(current(state));
        
        //  state.mydata=action.payload
     }
 }
})

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
