import { useState, useEffect } from 'react'

export default function LandingPixel() {
  useEffect(() => {
    const timer = setInterval(() => {
      setInnerColor(getRandomColor()), setOuterColour(getRandomColor())
    }, 500)
    return () => clearInterval(timer)
  }, [])

  const [innerColour, setInnerColor] = useState(getRandomColor())
  const [outerColour, setOuterColour] = useState(getRandomColor())

  return (
    <div className="landing-pixel-outer">
      <div
        style={{
          height: '100px',
          width: '100px',
          backgroundColor: `${outerColour}`,
        }}
      >
        <div className="landing-pixel-inner">
          <div
            style={{
              height: '50px',
              width: '50px',
              margin: '25px',
              backgroundColor: `${innerColour}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`
