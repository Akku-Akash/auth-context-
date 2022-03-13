import axios from "axios"
import { useEffect, useState } from "react"
import {All} from "./All"

export const Forms =() => {
    const [data,setData] = useState([])
    const [form, setForm] = useState({
    name :"",
    age : "",
    address : "",
    department : "",
    salary :"",
    marry :""
    })
    
    useEffect(()=>{
        getdata()
    },[])
  
    const handlechange =(e)=>{
       const {id,value}  = e.target
       setForm({
           ...form,
           [id] : value,
       })
       
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(form)
     

            axios.post("http://localhost:3001/user",form).then(()=>{
                alert("form created successfully")
            })
        

    }  

    const getdata = ()=>{
        axios.get("http://localhost:3001/user").then((res)=>{
            setData(res.data)
        })
    }


   return (
<div>
    <input id="name" type="text"    onChange={handlechange} placeholder="Enter Name"/>
    <input id="age" type="number"   onChange={handlechange} placeholder="Age" />
    <input id="address" type="text" onChange={handlechange} placeholder="Enter Address" />
    <select  id="department" onClick={handlechange}>
<option value="" >Department</option>
<option value="mechanical department">Mechanical</option>
<option value="software department">Software</option>
<option value="civil department">Civil</option>
      

    </select>
    <input type="Number" id="salary" onChange={handlechange} placeholder = "Enter Salary" />
    <input  type="checkbox" value="married" name="" id="marry" onClick={handlechange} />
    <input type="submit" onClick={handlesubmit} />
    

    <table className="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>married</th>
        </tr>
        </thead>
        <tbody>
            {/* {form.map((e)=>(<All data = {e} key ={e.id}/>))} */}
            {data.map((e)=>(<All data = {e} key = {e.id}/>))}
        </tbody>
    </table>
</div>

   )
}