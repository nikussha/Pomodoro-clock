import React from 'react'

function Breakbutton({ breaktime, setbreaktime }) {
  return (
    <>
      <div className="breakbtn">
        <p>{breaktime}</p>
        <h3>Break length</h3>
        <button onClick={() => setbreaktime(breaktime + 1)}>Inc</button>
        <button
          onClick={() =>
            breaktime > 1 ? setbreaktime(breaktime - 1) : setbreaktime(1)
          }
        >
          Dec
        </button>
      </div>
    </>
  )
}

export default Breakbutton
