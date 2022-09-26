import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='d-flex justify-content-center'>Edit Todo</h1>
        <Form className='HeadForm m-4 p-3 border rounded'>
            <Form.Label>Task :</Form.Label>
            <Form.Control className='mb-2' type='text' placeholder='Edit task here...'></Form.Control>
            <Button className='actionButton' variant='warning'>Edit</Button>
            <Button onClick={() => navigate('/')} className='actionButton ms-2' variant='danger'>Back</Button>
        </Form>
    </div>
  )
}

export default Edit