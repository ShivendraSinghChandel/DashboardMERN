
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const myNav=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:9000/employee/usercheck";
    axios.post(api,{email:email,password:password}).then((res)=>{
      // localStorage.setItem("username",res.data[0].fname);
      // myNav("/dashboard")
      console.log(res)
    })
  }
    return(
        <>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' onChange={(e)=>{e.target.value}} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={(e)=>{e.target.email}} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Login;