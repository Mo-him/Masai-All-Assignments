import React from "react"
import { useContext } from "react";
import { CardContext } from "../Context/CardContext";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  background: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const Navbar = ()=>{
    const {cartCount }= useContext(CardContext);
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
        
        <NavbarWrapper theme={theme}>

        <p>cart Count :{cartCount}</p>
        </NavbarWrapper>
       
        </>
    )
}
export default Navbar;