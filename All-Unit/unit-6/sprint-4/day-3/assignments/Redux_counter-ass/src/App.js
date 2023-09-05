import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {incrementCount , decrementCount} from './actions/index'

function App() {
  let myState = useSelector((state) => state.changeTheState);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter Application React-Redux</h1>
      <div className='container'>
        <button onClick={()=>{dispatch(decrementCount(1))}}>-</button>
        <input className = "text" type="text" value={myState}></input>
        <button onClick={()=>{dispatch(incrementCount(1))}}>+</button>
      </div>
    </div>
  );
}

export default App;
