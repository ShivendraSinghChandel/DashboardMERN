import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const Insert=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setInput((values)=>({...values,[name]:value}));
      console.log(input);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const api="http://localhost:9000/students/stusave";
        axios.post(api,input).then((res)=>{
          toast.success("Data saved successfully");
        })
        
        
    }
    return(
        <>
        <ToastContainer/>
        <Form style={{width:"600px",border:"4px solid black",margin:"50px 350px",padding:"20px",borderRadius:"15px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Roll No</Form.Label>
        <Form.Control type="text" name='rollno' value={input.rollno} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text" name='fees' value={input.fees} onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;