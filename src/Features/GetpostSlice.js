import { createSlice ,current} from "@reduxjs/toolkit";

let  getpostSlice=createSlice({
    name:"postData",
    initialState:{
        postData:[]
    },
    reducers:{
        postData :(state,action) =>{
         
            state?.postData?.push(action?.payload)
            console.log("=====> action",action)
            console.log(current(state));
           
           },
        
        // removeData(state) {
        //     return {postData: []}
        // }
        
       
    }
})
export const {postData,removeData}=getpostSlice.actions;
export default getpostSlice.reducer;