import { useEffect, useRef, useState } from 'react';
import {timeToString, convertMinutesToMilliseconds} from '../functions.js';

const Timer = ({breakLength, sessionLength}) => {

  var breakMilliseconds = convertMinutesToMilliseconds(breakLength);
  var sessionMilliseconds = convertMinutesToMilliseconds(sessionLength);

  const [sessionTime, setSessionTime] = useState(sessionLength);
  // const [breakTime, setBreakTime] = useState(breakLength);

  const [display, setDisplay] = useState(timeToString(sessionMilliseconds));

  var startTime = 0;

  var isTiming = useRef(false);
  var timerTime = useRef(sessionMilliseconds);
  var timeInterval = useRef(0);
  var sessionOrBreak = useRef('session');

  useEffect(() => {
    if(isTiming.current === false) {
      if(sessionLength !== sessionTime) {
        breakMilliseconds = convertMinutesToMilliseconds(breakLength);
        sessionMilliseconds = convertMinutesToMilliseconds(sessionLength);
        timerTime.current = sessionMilliseconds;
        setSessionTime(sessionLength);
        setDisplay(timeToString(convertMinutesToMilliseconds(sessionLength)))
      }
    }
  }, [sessionLength, breakLength])

  function handleStartAndStop() {
    if(isTiming.current) {
      isTiming.current = false;
      clearInterval(timeInterval.current);
    } else {
      isTiming.current = true;
      start();
    }
  }

  function start() {
    console.log('start');
    startTime = Date.now();
    isTiming.current = true;
    timeInterval.current = setInterval(() => {
      if(timerTime.current <= 0) {
        timerTime.current = sessionOrBreak.current === 'session' ? breakMilliseconds : sessionMilliseconds;
        sessionOrBreak.current = sessionOrBreak.current === 'session' ? 'break' : 'session';
      }
      timerTime.current -= (Date.now() - startTime);
      startTime = Date.now();
      setDisplay(timeToString(timerTime.current));
    }, 5);
  }

  return (
    <div>
      <div id="timer-label">
        {sessionOrBreak.current === 'session' ? 'SESSION' : 'BREAK'}
      </div>
      <div id="time-left">{display}</div>
      <button
         id="start_stop"
         onClick={() => handleStartAndStop()}
      >Start / Stop</button>
      <button id="reset">Reset</button>
  </div>
  )
}

export default Timer
