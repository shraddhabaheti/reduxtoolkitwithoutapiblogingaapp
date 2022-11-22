import { createSlice,current } from "@reduxjs/toolkit"


const RegistrationSlice=createSlice({
    name:"Registration",
    initialState:{
        myRegistration:[]
    },
    reducers:{
        register:(state,action)=>{
           state.myRegistration.push(action.payload)
           console.log("=====>",action)
           console.log(current(state));
        }
    }
})
export const {register}=RegistrationSlice.actions;
export default RegistrationSlice.reducer;