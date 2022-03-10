import React from 'react'
import { useState, useEffect } from 'react'
import Startbutton from './startbutton'

function Session({ increaseses, decreaseses, session }) {
  return (
    <>
      <div className="session">
        <p>{session}</p>
        <h3>Session</h3>
        <button onClick={increaseses}>Inc</button>
        <button onClick={decreaseses}>Dec</button>
      </div>
    </>
  )
}

export default Session
