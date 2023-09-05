import logo from './logo.svg';
import './App.css';
import Timer from './timer/timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <button>Start</button>
      <button>Pause</button>
    </div>
  );
}

export default App;
