import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function AllProducts(){
    const [isLoading,setIsLoading]=React.useState(false)
    const [isError,serIsError]=React.useState(false)
    const [data,setData]=React.useState([]);
    function getData(){
        setIsLoading(true)
        fetch('http://localhost:3004/Products')
        .then((res)=>res.json())
        .then((gottenData)=>{console.log(gottenData);setData(gottenData);serIsError(false);})
        .catch((err)=>serIsError(true))
        .finally(()=>setIsLoading(false))
    }
    useEffect(()=>{getData()},[])
    if(isLoading){
        return <h1>Loading.....</h1>
    }
    if(isError){
        return <h1>Something went wrong....</h1>
    }
    return (
        <div>
            <h1>All Product</h1>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>AboutProduct</th>
                </tr>
            </thead>
            {data.map((e)=>(
                <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td><Link to={`/Product/${e.id}`}>More...</Link></td>
                </tr>
            ))}
</table>
        </div>
    )
}
export default AllProducts;