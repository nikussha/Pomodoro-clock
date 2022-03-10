import './App.css'
import { useState, useEffect, useCallback } from 'react'
import Session from './session'
import Startbutton from './startbutton'
import Break from './break'
import Breakbutton from './breakbutton'

function App() {
  const [breakk, isBreak] = useState(false)
  const [start, setStart] = useState(false)
  const [session, setSession] = useState(1)
  const [minutes, setMinutes] = useState(session)
  const [seconds, setSeconds] = useState(0)
  const [reset, setReset] = useState(false)
  let [breaktime, setBreaktime] = useState(1)

  let othermin = minutes < 10 ? `0${minutes}` : minutes
  let othersec = seconds < 10 ? `0${seconds}` : seconds

  let increaseses = () => {
    setSession(session + 1)
    setMinutes(minutes + 1)
  }

  let decreaseses = () => {
    if (session > 1 && minutes > 1) {
      setSession(session - 1)
      setMinutes(minutes - 1)
    }
  }

  useEffect(() => {
    let int = setInterval(() => {
      clearInterval(int)
      if (start === true && reset === false) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          } else {
            isBreak(true)
          }
        } else {
          setSeconds(seconds - 1)
        }
      } else if (start || (!start && reset)) {
        setMinutes(session)
        setSeconds(0)
        setStart(false)
      }
    }, 1000)
  }, [start, seconds, reset])

  return (
    <>
      {/* time for break  */}
      {breakk ? (
        <Break
          setBreaktime={setBreaktime}
          breaktime={breaktime}
          breakk={breakk}
          setbreak={isBreak}
          setreset={setReset}
          reset={reset}
        ></Break>
      ) : (
        <div className="clock">
          {/*session button */}
          <Session
            increaseses={increaseses}
            decreaseses={decreaseses}
            session={session}
          ></Session>
          {/* break button */}
          <Breakbutton
            breaktime={breaktime}
            setbreaktime={setBreaktime}
          ></Breakbutton>
          {/* start and reset buttons */}
          <div className="twobtns">
            <Startbutton
              start={start}
              setstart={setStart}
              reset={reset}
              setreset={setReset}
            ></Startbutton>
            <button onClick={() => setReset(true)}>Reset</button>
          </div>
          {/* displaying time */}
          <div className="display">
            <h2>
              {othermin}:<span>{othersec}</span>
            </h2>
          </div>
        </div>
      )}
    </>
  )
}

export default App
