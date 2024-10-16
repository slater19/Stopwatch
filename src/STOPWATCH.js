import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  
  const [date, setDate] = useState(0);
   const [isRunning, setIsRunning] = useState(false)
  
  const  formatTime= (seconds) => {
    const minutes = Math.floor(seconds/ 60);
    const  remSeconds = seconds%60;
    return `${minutes}:${remSeconds<10 ? "0":""}${remSeconds}`;
  };

  const handleStart = () => {
  setIsRunning(!isRunning);
    
  }

  const handleReset  = () => {
  setIsRunning(false);
  setDate(0);
  }
 
  useEffect(() => {
    let intervalId="";
    if (isRunning) {
      
      intervalId = setInterval(() => {setDate((prev)=>prev+1)}, 1000);
    }
    else{clearInterval(intervalId)}
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <>
        <h1>Stopwatch</h1>
        <p>Time: {formatTime(date)}</p>
        <button  onClick={handleStart}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button  onClick={handleReset}>
        Reset
        </button>
      
        </>
  );
};

export default Stopwatch;