import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {
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

    function onGoingTask(){
        setTodo(task.filter(task => task.complete === false))
    }

    function TaskDone(){
        setTodo(task.filter(task => task.complete === true))
    }
    function allTask(){
        setTodo(task)
    }

    function deleteTask(id){
        axios.delete(`https://632b01531090510116ce5636.mockapi.io/todos/${id}`)
        .then(res => {
            // window.location.reload()
            loadList()
            alert('Task berhasil dihapus')
        })
    }
  return (

    <div>
        <h1 className='d-flex justify-content-center my-5'> Todo App </h1>

        <div className='HeadForm m-4 p-3 d-flex justify-content-between border rounded'>
            <Button variant='success' onClick={() => navigate('/add')}>Add New Task</Button>
            <Form className='d-flex'>
                <Form.Control className='mx-2' type='text' placeholder='Search...'></Form.Control>
                <Button> Search </Button>
            </Form>
        </div>

        <div className='taskSection m-4 p-3 border rounded'>
            <div className='filterGroup d-flex justify-content-center'>
                <Button onClick={allTask} className='filterButton'>All</Button>
                <Button onClick={TaskDone} className='filterButton'>Done</Button>
                <Button onClick={onGoingTask} className='filterButton'>On Going</Button>
            </div>
            <ListGroup className='mt-4'>
                {
                    todo?.map((data) => {
                        return (
                        <ListGroup.Item key={data.id} className='d-flex justify-content-between'
                        style={{backgroundColor: data.complete? "green" : "white", color: data.complete? 'white' : 'black'}}>
                            <strong>{data.task}</strong>
                                <div className=''>
                                    <Button size='sm'
                                    style={{backgroundColor: data.complete? 'cyan' : 'grey'}}></Button>
                                    <Button onClick={()=> navigate(`/edit/${data.id}`)} className='actionButton mx-2' variant='warning'>Edit</Button>
                                    <Button onClick={()=>deleteTask(data.id)} className='actionButton' variant='danger'>Delete</Button>
                                </div>
                        </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    </div>
  )
}

export default Home