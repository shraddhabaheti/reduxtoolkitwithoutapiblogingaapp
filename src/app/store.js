import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../curd/todosslice'
import  reducer from '../Features/loginSlice'
import registrationReducer from '../Features/RegistrationSlice'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { combineReducers } from "redux";
 import { persistStore} from 'reduxjs-toolkit-persist'
import persistReducer from "redux-persist/es/persistReducer";
import postDatareducer from '../Features/GetpostSlice'
// import  regreducer from '../Features/RegistrationSlice'

const persistConfig = {
   key: 'root',
   version:1,
   storage,
 }
 let reducers = combineReducers({
    todo :todoReducer,
     login:reducer,
     register:registrationReducer,
     postData:postDatareducer,
    
    
 });
 
 const persiReducer = persistReducer(persistConfig,reducers );
export default configureStore ({
   reducer:persiReducer
})