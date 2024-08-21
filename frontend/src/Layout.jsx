import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
           <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="insert" >Insert</Nav.Link>
            <Nav.Link as={Link} to="display" >Display</Nav.Link>
            <Nav.Link as={Link} to="update" >Update</Nav.Link>
            <Nav.Link as={Link} to="search" >Search</Nav.Link>
            <Nav.Link as={Link} to="contact" >Contact</Nav.Link>
            <Nav.Link as={Link} to="login" >Login</Nav.Link>
            <Nav.Link as={Link} to="registration" >Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id='wrapper'>
      <Outlet /> 
      </div>
      <div style={{height:"80px", width:"100%",backgroundColor:"blue"}}>
          <h1 style={{padding:"10px 530px",color:"white"}}>This is footer</h1>
      </div>
        </>
    )
}


export default Layout;