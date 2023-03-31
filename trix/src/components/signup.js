import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { registerUSer } from '../Js/Actions/user';

const Signup = () => {
  const dispatch=useDispatch()
  const [USER, setUSER] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })
  function sign(){
    dispatch(registerUSer(USER));
    alert("user signed");
  }
  return (
    <div className='signup '>
<div className='form'>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="first name" onChange={(e)=>setUSER({...USER,firstname:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="last name" onChange={(e)=>setUSER({...USER,lastname:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setUSER({...USER,email:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUSER({...USER,password:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i agree to privacy policy terms" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={sign}>
        Submit
      </Button>
    </Form>
</div>

    </div>
  )
}

export default Signup