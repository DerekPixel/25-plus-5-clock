import { useState } from 'react';
import {handleIncrement, handleDecrement} from './functions.js';
import './App.css';
import Timer from './components/Timer';

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div className="App">
      <div className="controls">
        <div>
          <div id="break-label">
            Break Length
          </div>
          <button 
            id="break-increment"
            onClick={() => handleIncrement(setBreakLength, breakLength)}
          >up</button>
          <div
            id="break-length"
          >{breakLength}</div>
          <button 
            id="break-decrement"
            onClick={() => handleDecrement(setBreakLength, breakLength)}
          >down</button>
        </div>
        <div>
          <div id="session-label">
            Session Length
          </div>
          <button 
            id="session-increment"
            onClick={() => handleIncrement(setSessionLength, sessionLength)}
          >up</button>
          <div
            id="session-length"
          >{sessionLength}</div>
          <button 
            id="session-decrement"
            onClick={() => handleDecrement(setSessionLength, sessionLength)}
          >down</button>
        </div>
      </div>

      <Timer 
        breakLength={breakLength} 
        sessionLength={sessionLength}
      />

    </div>
  );
}

export default App;
