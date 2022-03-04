import { useState } from "react";
export function Counter (props){
    let [count, setCount] = useState(props.value) 
   return (
   <h1> Counter: {count} <br />
   <button className="inc"
   onClick={()=>{
       setCount(count+1)
       
   }}
   >Increment</button>
   <button className="inc"
   onClick={()=>{
    setCount(count-1)
   
}}
   >Decrement</button>
<button className="inc"
onClick={()=>{
    setCount(count*2)
}}
>Double</button>

   </h1>
   );
  
}