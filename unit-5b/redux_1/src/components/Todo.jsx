import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo } from "../Redux/actions"
import axios from "axios"

export const Todo = ()=>{
    const [text, setText] = useState("")
    const todos = useSelector((store)=>store.todo)
    const dispatch = useDispatch()
   
useEffect(()=>{
gettodos()
},[])

const gettodos = ()=>{
   axios.get("http://localhost:8080/todos").then(({data})=>{
       dispatch(addtodo(data))
   })
}

   const addstodo=()=>{
       axios.post("http://localhost:8080/todos",{
           title : text,
           status : false,
       }).then(()=>gettodos())
   }
    const handleDelete=(id)=>{
      console.log(id)
      axios.delete(`http://localhost:8080/todos/${id}`).then(gettodos)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button
            onClick={(e)=>{
                e.preventDefault()
                
               addstodo()
            
              
            }}
            >Add Todo</button>
           {todos.map((e,id,)=>(
               <div key = {e.id}>{e.title}{" "} <button onClick={()=>
                   handleDelete(e.id)
               }>DELETE</button></div>
               
           ))}
        </div>
    )
}