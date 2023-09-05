import React, { useEffect } from "react";
import "./home.css";
import { productAction } from "../Redux/Action/productaction";
import {useDispatch} from "react-redux";
function Home(){


    const dispatch=useDispatch();
    async function fetchdata(){
        var data = await fetch("http://localhost:3002/products");
        var res = await data.json();
        // setState(res);
        console.log(res);
        productAction(res, dispatch);
    }
    useEffect(() => {
        fetchdata();
    }, [])


    return (<div><h2>Home Page</h2>
    <table>
        <thead>
            <tr>
                <td>Brand</td>
                <td>Title</td>
                <td>Price</td>
                <td>View</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    
    
    </div>);

    
}


export default Home;