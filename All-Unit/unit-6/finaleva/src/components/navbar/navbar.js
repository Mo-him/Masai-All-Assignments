import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props){
    return <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
}
export default Navbar;