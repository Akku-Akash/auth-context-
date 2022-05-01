export const All =({data})=>{
       return (
           <>
           <tr key = {data.id}>
             <td>{data.name}</td>
             <td>{data.age}</td>
             <td>{data.address}</td>
             <td>{data.department}</td>
             <td>{data.salary}</td>
             <td>{data.marry}</td>

           </tr>
           </>
       )
}