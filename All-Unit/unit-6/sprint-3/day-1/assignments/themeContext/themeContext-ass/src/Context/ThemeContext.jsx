import React from "react";
import { useState } from "react";
import { createContext } from "react";

export   const ThemeContext = createContext();

  export function ThemeContextProvider({children}){

    const [ theme,setTheme] =useState("dark");
    
    const toggleTheme=(val)=>{
        setTheme(theme ==="dark" ? "light" : "dark");
    }
    return(
        <>
        <ThemeContext.Provider value={{ theme,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
        </>
    )
  }