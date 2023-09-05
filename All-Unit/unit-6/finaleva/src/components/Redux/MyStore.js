import {legacy_createStore, combineReducers} from "redux";
import { authReducer } from "./Reducers/authReducer";
import productReducer from "./Reducers/productReducer";

const combineReducer = combineReducers({Auth:authReducer, Productdata:productReducer})
export const MyStore = legacy_createStore(authReducer);