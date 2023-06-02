import React, { useState } from 'react'
import '../main.css'

function Navbar() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleMenuOne = () => {
    // do something
    setOpen(false)
  }

  const handleMenuTwo = () => {
    // do something
    setOpen(false)
  }

  return (
    <div className="navbar">
      <h1>Colours!</h1>
      <h2>Background Colours</h2>
      <button className="dropdown" onClick={handleOpen}>
        Colours
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <li>
              <button onClick={handleMenuOne}>Pink</button>
              <button onClick={handleMenuOne}>Green</button>
              <button onClick={handleMenuOne}>Black</button>
            </li>
          </li>
        </ul>
      ) : null}

      <h2>Pen Colours</h2>
      <button className="dropdown" onClick={handleOpen}>
        Colours
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <li>
              <button onClick={handleMenuTwo}>Pink</button>
              <button onClick={handleMenuTwo}>Green</button>
              <button onClick={handleMenuTwo}>Black</button>
            </li>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Navbar
