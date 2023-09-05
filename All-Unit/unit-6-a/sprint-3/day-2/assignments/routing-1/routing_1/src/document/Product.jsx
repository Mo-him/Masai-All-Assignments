import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import React from "react";
function Product(){
    const [pdata,setPdata]=React.useState({})
    const [check,setCheck]=React.useState([])
    const {id}=useParams();
    useEffect(()=>{
    fetch(`http://localhost:3004/Products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{setPdata(res);console.log(pdata)})
    .catch((error)=>console.log(error));
    
    
    },[])
    // 
    if(!pdata.hasOwnProperty('id')){
        return <h1>Error404</h1>
    }
    
    return (
        <div>

        {/* <h1>ProductId:{id}</h1> */}
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                <tr key={pdata.id}>
                <td>{pdata.name}</td>
                <td>{pdata.price}</td>
                {/* <td><Link to={`/Product/${e.id}`}>More...</Link></td> */}
                </tr>
            }
            </tbody>
        </table>
        
        </div>
    )
}
export default Product;