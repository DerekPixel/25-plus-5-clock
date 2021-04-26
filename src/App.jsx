import { useState } from 'react';
import {handleIncrement, handleDecrement} from './functions.js';
import './App.css';
import Timer from './components/Timer';

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div className="App">
      <header>
        <h1 className="title">25 + 5 Clock</h1>
        <div className="creds-div">
          <p className="cred">Made by Derek Price</p>
          <a className="cred" href="https://github.com/DerekPixel/25-plus-5-clock">GitHub</a>
        </div>
      </header>
      <div className="container">
        <div className="controls">
          <div
            className='break'
          >
            <h2 id="break-label">
              Break Length
            </h2>
            <div
              className='break-btns'
            >
              <button
                id="break-increment"
                onClick={() => handleIncrement(setBreakLength, breakLength)}
              >up</button>
              <div
                className='length'
                id="break-length"
              >{breakLength}</div>
              <button
                id="break-decrement"
                onClick={() => handleDecrement(setBreakLength, breakLength)}
              >down</button>
            </div>
          </div>
          <div
            className='session'
          >
            <h2 id="session-label">
              Session Length
            </h2>
            <div
              className='session-btns'
            >
              <button
                id="session-increment"
                onClick={() => handleIncrement(setSessionLength, sessionLength)}
              >up</button>
              <div
                className='length'
                id="session-length"
              >{sessionLength}</div>
              <button
                id="session-decrement"
                onClick={() => handleDecrement(setSessionLength, sessionLength)}
              >down</button>
            </div>
          </div>
        </div>
        <Timer
          breakLength={breakLength}
          sessionLength={sessionLength}
          setBreakLength={(newLength) => setBreakLength(newLength)}
          setSessionLength={(newLength) => setSessionLength(newLength)}
        />
      </div>

    </div>
  );
}

export default App;
