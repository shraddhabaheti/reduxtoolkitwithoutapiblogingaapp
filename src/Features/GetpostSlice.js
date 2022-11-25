import { createSlice ,current} from "@reduxjs/toolkit";

let  getpostSlice=createSlice({
    name:"postData",
    initialState:{
        postData:[]
    },
    reducers:{
        postData :(state,action) =>{
         
            state.postData = [...state.postData,action.payload]
            console.log("=====> action",action)
            console.log(current(state));
           
           },
           deleteData:(state,action)=>{
            console.log(current(state));
            let f=state.postData?.splice(action.payload,1);
           }
        
        // removeData(state) {
        //     return {postData: []}
        // }
        
       
    }
})
export const {postData,deleteData}=getpostSlice.actions;
export default getpostSlice.reducer;