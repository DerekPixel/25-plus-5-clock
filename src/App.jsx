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
                className='increment'
                id="break-increment"
                onClick={() => handleIncrement(setBreakLength, breakLength)}
              >
                <span className="iconify" data-icon="bi:caret-up-fill"></span>
              </button>
              <div
                className='length'
                id="break-length"
              ><p>{breakLength}</p></div>
              <button
                className='decrement'
                id="break-decrement"
                onClick={() => handleDecrement(setBreakLength, breakLength)}
              >
                <span className="iconify" data-icon="bi:caret-down-fill"></span>
              </button>
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
                className='increment'
                id="session-increment"
                onClick={() => handleIncrement(setSessionLength, sessionLength)}
              >
                <span className="iconify" data-icon="bi:caret-up-fill"></span>
              </button>
              <div
                className='length'
                id="session-length"
              ><p>{sessionLength}</p></div>
              <button
                className='decrement'
                id="session-decrement"
                onClick={() => handleDecrement(setSessionLength, sessionLength)}
              >
                <span className="iconify" data-icon="bi:caret-down-fill"></span>
              </button>
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
