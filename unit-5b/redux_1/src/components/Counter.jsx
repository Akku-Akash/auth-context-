 import { useDispatch, useSelector } from "react-redux"
import { addCount } from "../Redux/actions"

 export const Counter = ()=>{   
  const dispatch = useDispatch()
  const count = useSelector((store)=>store.count)
     return (
   <div>
       <h3>Counter :{count}</h3>
       <button onClick={()=>{
         dispatch(addCount(1))
       }}>
           add 1 
       </button>
   </div>
     )
 }