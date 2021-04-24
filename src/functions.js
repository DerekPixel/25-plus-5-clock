export function handleIncrement(setState, length) {
  if(length >= 60) {
    setState(60);
    return;
  }
  setState(length + 1);
}

export function handleDecrement(setState, length) {
  if(length <= 1) {
    setState(1);
    return;
  }
  setState(length - 1);
}

export function convertMinutesToMilliseconds(timeInSeconds) {
  return (timeInSeconds * 1000) * 60;
}

export function timeToString(time) {
  var diffInHr = time / 3600000;
  // var hh = Math.floor(diffInHr).toString().padStart(2, "0");
  // var diffInMin = (diffInHr - hh) * 60; this is the original
  var diffInMin = (diffInHr) * 60;
  var mm = Math.floor(diffInMin).toString().padStart(2, "0");
  var diffInSec = (diffInMin - mm) * 60;
  var ss = Math.floor(diffInSec).toString().padStart(2, "0");
  // var diffInMs = (diffInSec - ss) * 100;
  // var ms = Math.floor(diffInMs).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function pimp() {
  console.log('pimp');
  return 'pimp';
}

export default pimp;
