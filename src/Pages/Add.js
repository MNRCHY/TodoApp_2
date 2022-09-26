import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Add() {

    const navigate = useNavigate()
    const [todo, setTodo] = useState('')
    const data = {
        task : todo,
        complete: false
    }


    function submitTask(e){
        e.preventDefault()
            axios.post('https://632b01531090510116ce5636.mockapi.io/todos', data)
            .then(res => {
            alert ('Berhasil tambah task baru')
            navigate ('/')
        })
        }

  return (
    <div>
        <h1 className='m-5 d-flex justify-content-center'> Add Task </h1>
        <Form className='AddTask m-4 p-3 border rounded'>
            <Form.Label>Task :</Form.Label>
            <Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder='Add task here...'></Form.Control>
            <div className='mt-2'>
                <Button type='submit' onClick={submitTask} className='actionButton' variant='success'> Submit </Button>
                <Button onClick={() => navigate('/')} className='actionButton mx-2' variant='danger'> Back </Button>
            </div>
        </Form>
    </div>
  )
}

export default Add