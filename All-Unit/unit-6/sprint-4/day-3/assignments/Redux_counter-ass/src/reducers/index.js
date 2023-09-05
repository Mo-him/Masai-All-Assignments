import changeTheState from "./inc-dec";
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        changeTheState
    }
    );

export default rootReducer;