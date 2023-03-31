import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { addservice } from "../Js/Actions/Storeaction";

const Addservice = () => {
    const dispatch=useDispatch()
    const [SERVICE, setSERVICE] = useState({
        name:"",
        price:0,
        companyName:"",
        type:"",
        logo:"none"
      })
      function ADD(){
        dispatch(addservice(SERVICE));
        alert("service added")
        
      }
  return (
    <div className='form signup'>
        <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>service Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setSERVICE({...SERVICE,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setSERVICE({...SERVICE,price:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>companyName</Form.Label>
        <Form.Control type="text" onChange={(e)=>setSERVICE({...SERVICE,companyName:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>type</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setSERVICE({...SERVICE,type:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>logo</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setSERVICE({...SERVICE,logo:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i agree to privacy policy terms" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={ADD}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Addservice