import React from "react"
import { useContext } from "react";
import { CardContext } from "../Context/CardContext";
const Button = ()=>{
    const {handleCartCount} =useContext(CardContext)
    return (
        <>
        
       
       <button onClick={()=>handleCartCount(1)}>Add to Cart</button>
        </>
    )
}
export default Button;