import React, { useState } from 'react'
import "../main.css"

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Colours</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}>Pen Colours</button>
            <li>
              <button onClick={handleMenuOne}>Pink</button>
              <button onClick={handleMenuOne}>Green</button>
              <button onClick={handleMenuOne}>Black</button>
            </li>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuTwo}>Background Colours</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;