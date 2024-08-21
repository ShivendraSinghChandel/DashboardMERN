
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { message } from 'antd';


const Registration=()=>{

    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:9000/employee/usersave";
        axios.post(api,input).then((res)=>{
            message.success("Data Saved !!",3);
        })
    }

    return(
        <>
           <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Enter First name</Form.Label>
        <Form.Control type="text" name='fname' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Last name</Form.Label>
        <Form.Control type="text" name='lname' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Contact</Form.Label>
        <Form.Control type="text" name='contact' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Registration;