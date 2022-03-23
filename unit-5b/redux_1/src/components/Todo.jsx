import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo } from "../Redux/actions"
import axios from "axios"

export const Todo = ()=>{
    const [text, setText] = useState("")
    const todos = useSelector((store)=>store.todo)
    const dispatch = useDispatch()
    function handledelte(id){
        const newList = text.filter((e) => e.id !== id);

       return  setText(newList);
    }
    const addtodos=()=>{
        axios.post("http://localhost:8080/todo",{
            title: text,
            status : false,

        })
    }
    
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button
            onClick={(e)=>{
                e.preventDefault()
               dispatch(addtodo(text))
               addtodos()
              
            }}
            >Add Todo</button>
           {todos.map((e,id,)=>(
               <div key = {id}>{e} <button
               onClick={handledelte}
               >Delete</button></div>
               
           ))}
        </div>
    )
}