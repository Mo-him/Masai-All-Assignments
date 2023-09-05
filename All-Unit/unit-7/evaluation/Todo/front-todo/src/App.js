import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
