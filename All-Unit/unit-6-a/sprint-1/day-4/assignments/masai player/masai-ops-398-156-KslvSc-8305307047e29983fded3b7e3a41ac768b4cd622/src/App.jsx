import React from "react";
import { useState } from "react";

function App() {

  let [state, setState] = useState(0);
  let [statet, setStatet] = useState(0);

  const oneCount = () => {
    setState(state +1)
  };
 
  return (
    <div className="App">

      <h1>Welcome to Reach Ten Mini-Game</h1>

      {/* Display Player Turn here */}
      <span data-testid="turn-container">Its Your Turn: {}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" onClick={oneCount}>+1</button>
        <button data-testid="add-two-btn" onClick={oneCount(state+1)}>+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{state}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">Winner: {}</span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn">Reset Game</button>
    </div>
  );
}

export default App;
