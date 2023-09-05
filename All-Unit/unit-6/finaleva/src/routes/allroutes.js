import {Routes, Route, Router} from "react-router-dom";
import Home from "../components/homepage/Home";
import Login from "../components/Login/Login";
import {useSelector} from "react-redux";
import { MyStore } from "../components/Redux/MyStore";
function AllRoutes(){
    // const {isAuth, token} =useSelector((MyStore)=>MyStore.authReducer);
    return (<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>);
}

export default AllRoutes;