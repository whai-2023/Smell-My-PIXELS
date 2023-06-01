import { useState } from 'react'

export default function Pixel() {
  const [borderColor, setBorderColor] = useState(getRandomColor())
  const [backColor, setBackColor] = useState(getRandomColor())
  const [innerColor, setInnerColor] = useState(getRandomColor())

  function handleClick() {
    setBorderColor(getRandomColor())
    setBackColor(getRandomColor())
    setInnerColor(getRandomColor())
  }

  function handleMouseEnter() {
    setBorderColor('red')
    setBackColor('black')
    setInnerColor('black')
  }

  return (
    <div
      style={{
        backgroundColor: `${backColor}`,
        height: '12px',
        width: '12px',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          border: `2px solid ${borderColor}`,
          backgroundColor: `${innerColor}`,
          height: '4px',
          width: '4px',
          margin: 'auto',
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      ></div>
    </div>
  )
}

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`
