import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
    const [todo, setTodo] = useState([])
    const [task, setTask] = useState ([])

    function loadList(){
        axios.get('https://632b01531090510116ce5636.mockapi.io/todos')
        .then(res => {
            console.log(res.data)
            setTodo(res.data)
            setTask(res.data)
        })
        . catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        loadList()
    },[])

    const [updateTask, setUpdateTask] = useState({ id: null, status: false})
    const [formData, setFormData] = useState({
        task: ''
    })

    function handleChange(e){
        let data = {...formData}
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert('oke')

        let data = [...todo]

        if(formData === ''){
            return false
        }
        if(updateTask.status){
            data.forEach((todo) =>{
                if(todo.id === updateTask.id){
                    todo.task = formData.task
                }
            })

            axios.put(`https://632b01531090510116ce5636.mockapi.io/todos/${updateTask.id}`,{
                task: formData.task
            }).then (res => {
                alert('Berhasil update task')
            })
        }
        setFormData({task: ''})
        setUpdateTask({id: null, status: false})
    }

    function handleEdit(id){
        
        let data =[...todo]
        let foundTask = data.find( todo => todo.id === id)
        setFormData({task: foundTask.task})
        setUpdateTask ({id: id, status: true})
    }

  return (
    <div>
        <h1 className='m-4 d-flex justify-content-center'>Edit Task</h1>
        <Form onSubmit={handleSubmit} className='HeadForm m-4 p-3 border rounded'>
            <Form.Label>Task :</Form.Label>
            <Form.Control onChange={handleChange} value={formData.task} name='task' type='text' placeholder='Edit task here...'></Form.Control>

            <div className='mt-2'>
                <Button type='submit' className='actionButton' variant='success'>Submit</Button>
                <Button onClick={() => {navigate('/')}} className='actionButton mx-2' variant='danger'>Back </Button>
            </div>
        </Form>

        <ListGroup className='m-4 p-3 border rounded'>
                {
                    todo.map((data) => {
                        return (
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <strong>{data.task}</strong>
                                <Button onClick={()=>handleEdit(data.id)} variant='warning'>Edit</Button>
                            </ListGroup.Item>
                        )
                    })
                }
        </ListGroup>
    </div>
  )
}

export default Edit