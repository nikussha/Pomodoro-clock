import React from 'react'
import { useState, useEffect } from 'react'

function Startbutton({ start, setstart, setreset }) {
  return (
    <>
      {start ? (
        <button onClick={() => setstart(false)}>Pause</button>
      ) : (
        <button
          onClick={() => {
            setstart(true)
            setreset(false)
          }}
        >
          Start
        </button>
      )}
    </>
  )
}

export default Startbutton
