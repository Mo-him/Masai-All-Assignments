import Profile from './components/Profile.js';
import Todo from './components/Todo.js';
import './App.css';

function App() {
  const name = "Atul Kumar";
  const age = 18;
  const location = "Patna";
  const organ = "Masai";
  const task = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];
  return (
    <>
       <div id="container">
         <Profile name = {name} age = {age} location = {location} organ = {organ}/>
         <Todo task = {task}/>
       </div>
    </>
  );
}

export default App;
