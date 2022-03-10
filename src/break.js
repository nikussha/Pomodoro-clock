import React from 'react'
import { useState, useEffect } from 'react'

function Break({ breakk, setbreak, setreset, reset, breaktime, setBreaktime }) {
  let [secondbr, setSecondbr] = useState(0)

  let otherbreak = breaktime < 10 ? `0${breaktime}` : breaktime
  let othersecondbr = secondbr < 10 ? `0${secondbr}` : secondbr

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)
      if (secondbr === 0) {
        if (breaktime !== 0) {
          setSecondbr(59)
          setBreaktime(breaktime - 1)
        } else {
          setreset(true)
          setbreak(false)
        }
      } else {
        setSecondbr(secondbr - 1)
      }
    }, 1000)
  })
  return (
    <>
      <div className="break">
        <h2 className="breakheading">Break time</h2>
        <h3 className="breaktext">
          {otherbreak}:<span>{othersecondbr}</span>
        </h3>
      </div>
    </>
  )
}

export default Break
