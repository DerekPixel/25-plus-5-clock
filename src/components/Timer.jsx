import { useEffect, useRef, useState } from 'react';
import {timeToString, convertMinutesToMilliseconds} from '../functions.js';

const Timer = ({breakLength, sessionLength, setBreakLength, setSessionLength}) => {

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
  }, [sessionLength, breakLength]);

  useEffect(() => {
    if(display === '00:00') {
      playSound();
    }

  }, [display]);

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
    startTime = Date.now();
    isTiming.current = true;
    timeInterval.current = setInterval(() => {
      timerTime.current -= (Date.now() - startTime);
      startTime = Date.now();
      if(timerTime.current <= 0) {
        timerTime.current = sessionOrBreak.current === 'session' ? breakMilliseconds : sessionMilliseconds;
        sessionOrBreak.current = sessionOrBreak.current === 'session' ? 'break' : 'session';
      }
      setDisplay(timeToString(timerTime.current));
    }, 5);
  }

  function reset() {
      stopSound();
      if(isTiming.current === true) {
      clearInterval(timeInterval.current);
      isTiming.current = false;
      setSessionLength(25);
      setBreakLength(5);
      setDisplay(timeToString(sessionMilliseconds));
      timerTime.current = sessionMilliseconds;
      sessionOrBreak.current = 'session';
    } else {
      clearInterval(timeInterval.current);
      setSessionLength(25);
      setBreakLength(5);
      setDisplay(timeToString(sessionMilliseconds));
      timerTime.current = sessionMilliseconds;
      sessionOrBreak.current = 'session';
    }
  }

  function playSound() {
    const sound = document.getElementById('beep');
    sound.currentTime = 0;
    sound.play();
  }

  function stopSound() {
    const sound = document.getElementById('beep');
    sound.pause();
    sound.currentTime = 0;
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
      <button 
        id="reset"
        onClick={() => reset()}
      >Reset</button>
      <audio 
        id='beep'
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
  </div>
  )
}

export default Timer
