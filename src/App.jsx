import { useState, useEffect } from 'react'
import Stopwatch from './Stopwatch'
import './App.css'

function App() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      });
    }, 60000); 

    return () => clearInterval(intervalId);
  }, []); 


  return (
    <>
     <h1>Current Time: {time.hours}:{time.minutes < 10 ? '0' + time.minutes : time.minutes}</h1>
     <Stopwatch />
    </>
  )
}

export default App
