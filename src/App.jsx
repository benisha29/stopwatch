import { useState } from 'react'  //Store changing data
import { useEffect } from 'react' //Run logic when state changes
import './App.css'

function App() /*Main React component*/ {  
  const[time, setTime] = useState(0); //Stopwatch time
    const[running, setRunning] = useState(false); //Is stopwatch running?

    useEffect(() => { /*Runs timer logic*/
      let interval; //Stores timer ID
      if (running) { 
        interval = setInterval(() => {
          setTime((prevtime) => prevtime +10);
        }, 10);
      } else if(!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]); 
  return (
  <div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-gray-900 text-white">
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold">Stopwatch App</h1>

      <div className="text-2xl font-mono">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="flex gap-4">
        {running ? (
          <button
            className="border rounded-lg px-4 py-1"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="border rounded-lg px-4 py-1"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}

        <button
          className="border rounded-lg px-4 py-1"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
);


}

export default App