import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Next from './Next';
import PresidentDrawer from './PresidentDrawer';
import Todocurd from './curd/TodoCurd';
//import HorijontalStrapper from './HorijontalStrapper';
import LinearStrapper from './LinearStrapper';
import GetPost from './GetPost';
import PostData from './PostData';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
    <Next/>
     <Routes>
     
   
       <Route path='/pre' element={<Registration/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/todo" element={<Todocurd/>}></Route>
       <Route path="/hori" element={<LinearStrapper/>}></Route>
       <Route path="/" element={<PresidentDrawer/>}></Route>
       <Route path="/post" element={<PostData/>}></Route>
       <Route path="/get" element={<GetPost/>}></Route>
     
      </Routes>
     
    </BrowserRouter>
   
    </div>
  );
}

export default App;
