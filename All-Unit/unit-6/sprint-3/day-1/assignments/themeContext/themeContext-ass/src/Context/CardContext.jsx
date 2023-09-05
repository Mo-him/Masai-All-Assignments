import React from "react";
import { useState } from "react";
import { createContext } from "react";

export   const CardContext = createContext();

  export function CardContextProvider({children}){
    const [cartCount ,setCartCount] =useState(0);
    const handleCartCount=(val)=>{
        setCartCount(cartCount+val)
    }
    return(
        <>
        <CardContext.Provider value={{ cartCount,handleCartCount }}>
            {children}
        </CardContext.Provider>
        </>
    )
  }