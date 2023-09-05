import React from 'react'
import { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useEffect } from 'react'


const Todo = () => {
    const [title,setTitle] = useState('')
    const [data,setData] = useState([])

    useEffect(() => {
      getData()
    },[])


    const getData = () => {
      fetch('http://localhost:3000/task')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res)
      })
      .catch(err => console.log(err))
      }




    const addTodo =(title) => {
      const data = {
        title,
        status:false
      }
      fetch('http://localhost:3000/addTask',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
          "content-Type":"application/json"
        }
      }).then(res => res.json())
      .then(res => {
        if(res.responce === 'error'){
          alert(res.message)
        }else{
          alert(res.message)
          getData()
        }
      }).catch(err => console.log(err))
    }






    const deleteTodo = (id) => {
      fetch(`http://localhost:3000/task/${id}`,{
        method:'DELETE'
      }).then(res => res.json())
      .then(res => {
        if(res.responce === 'error'){
          alert(res.message)
        }else{
          alert(res.message)
        }
        getData()
      })
    }






    const updateTodo = (id,status) => {
      console.log(status)
      const data = {
        status,
      }
      fetch(`http://localhost:3000/task/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data)
      }).then(res => res.json())
      .then(res => {
        if(res.responce === 'error'){
          alert(res.message)
        }else{
          alert(res.message)
          getData()

        }
      })
    }





    
  return (
    <div>
      <h1>Todo lists</h1>
      <div>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="Title" placeholder='Title' variant="outlined"></TextField>
      <Button variant="contained" onClick={()=> {addTodo(title)}}>Add</Button>
      </div>
      <h2>List of tasks</h2>
      {
        data?.map((el) => (
          <div style={{border:"1px solid #cecece" , display:"flex" , justifyContent:"space-around",width:"80%",margin:"20px auto"}}>
            <h4>{el.title}</h4>
            <h4 style={{color: (el.status === true)?"green":"red"}}>{`${el.status}`}</h4>
            <Button variant="contained"  style={{height:"50px",marginTop:"6px"}} onClick={() => updateTodo(el._id,el.status)}> <h4>{`${!el.status}`}</h4></Button>
            <Button variant="contained"  style={{height:"50px",marginTop:"6px"}} onClick={() => deleteTodo(el._id)}> <h4>DELETE</h4></Button>
          </div>
        ))
      }
    </div>
  )
}

export default Todo
