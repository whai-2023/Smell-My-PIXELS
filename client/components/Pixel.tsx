import { useState, useEffect } from 'react'

interface Props {
  changeBackgroundColour: string
  changePenColour: string
  resetSwitch: boolean
}

export default function Pixel(props: Props) {
  const [color, setColor] = useState(props.changeBackgroundColour)
  const [isDrawn, setIsDrawn] = useState(false)
  const [colour, setPenColour] = useState(props.changePenColour)
  
  useEffect(() => {
    setIsDrawn(false)
    setColor(props.changeBackgroundColour)
  }, [props.resetSwitch]) //useEffect watches for resetAwitch to be altered
  

  useEffect(() => {
    // if NOT isDrawn, set colour, else don't set colour
    if (isDrawn == false) {
      setColor(props.changeBackgroundColour)
    }
  }, [props.changeBackgroundColour])

  function handleClick() {
    setColor(props.changePenColour)
    setIsDrawn(true)
  }

  function handleDragEnter() {
    setColor(props.changePenColour)
    setIsDrawn(true)
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
