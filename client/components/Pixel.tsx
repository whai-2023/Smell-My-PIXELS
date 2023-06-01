import { useState } from 'react'

export default function Pixel() {
  const [color, setColor] = useState(getRandomColor())

  function handleClick() {
    setColor(getRandomColor())
  }

  function handleDragEnter() {
    setColor('black')
  }

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: '12px',
        width: '12px',
      }}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
    ></div>
  )
}

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`
