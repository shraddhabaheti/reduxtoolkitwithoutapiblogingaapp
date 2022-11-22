import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/ai";
import image from '../src/assect/company.png'
import image1 from '../src/assect/sce.png'
import MenuIcon from '@mui/icons-material/Menu';
import PresidentDrawer from './PresidentDrawer';
import { useState } from 'react';
function Next() {
  
  return (
    <>
     
    
      <Navbar className='Navbar' >
        <Container>
        
        
         
           <Link><img src={image} width="100px" height="100px"/></Link> 
          <Nav className="me-auto">
             {/* <Link ><PresidentDrawer/></Link> */}
            <Link to='/'  className='link'  ></Link>
            <Link to='/pre'  className='link'  >Registration</Link>
            <Link to="/login" className='link'>Login</Link>
            <Link to="/todo" className='link'>Todocurd</Link>
            <Link to="/hori" className='link'>Strapper</Link>
            <Link to="/post" className='link'>PostData</Link>
            <Link to="/get" className='link'>GetPost</Link>
       
      
      
          </Nav>
        </Container>
      </Navbar>

 
    </>
  );
}

export default Next;