import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/allroutes';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
