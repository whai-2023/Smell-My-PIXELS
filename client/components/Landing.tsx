import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import LandingPixel from './LandingPixel'

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

export default function Landing() {
  useEffect(() => {
    const timer = setInterval(() => {
      setTextColor(getRandomColor())
    }, 500)
    return () => clearInterval(timer)
  }, [])

  const [textColour, setTextColor] = useState(getRandomColor())

  return (
    <div className="landing">
      {Array.from({ length: 500 }, () => (
        <LandingPixel />
      ))}
      <div className="enter">
        <Link to="/canvas">
          <h1 style={{ color: textColour }}>SMELL MY PIXELS</h1>
        </Link>
      </div>
    </div>
  )
}
