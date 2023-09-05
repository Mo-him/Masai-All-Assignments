import React from "react"
import Card from "./Card";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import styled from  "styled-components"


const BodyWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`; 
const Body = ()=>{
    const {theme ,toggleTheme} =useContext(ThemeContext)
   
    return (
        <>
         <BodyWrapper theme={theme}>
        <Card />
        <Card />
        <Card />
      </BodyWrapper>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
        </>
    )
}
export default Body;