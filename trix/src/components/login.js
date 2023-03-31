import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { loginUSer } from '../Js/Actions/user';



const Login = () => {
  const dispatch=useDispatch()
  const [USER, setUSER] = useState({
    email:"",
    password:""
  })
  function LOG(){
    dispatch(loginUSer(USER));
    alert("user LOGED");
  }
  return (
    <div className='login'>
      <img />
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
        <Form.Check type="checkbox" label="I agree to privacy policy terms" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={LOG}>
        Submit
      </Button>
    </Form>
     
    </div>
  )
}

export default Login

