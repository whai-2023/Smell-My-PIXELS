import Pixel from './Pixel'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenColourForm from './AddPenColourForm'
import ClearCanvasButton from './ClearCanvasButton'
import { useState } from 'react'

function App() {
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [penColour, setPenColour] = useState('black')

  function handleBackground(newBackground: string) {
    setBackgroundColour(newBackground)
  }

  function handlePen(newPen: string) {
    setPenColour(newPen)
  }

  function handleClearButton() {}
  console.log(penColour)
  return (
    <div className="app">
      <div className="canvas">
        <>
          {Array.from({ length: 15000 }, (_, index) => (
            <Pixel key={index} changeBackgroundColour={backgroundColour} />
          ))}
        </>
      </div>
      <div className="navbar">
        <h2>Background Colours</h2>
        <AddColourBackgroundForm onAddBackgroundColour={handleBackground} />
        <h2>Pen Colours</h2>
        <AddPenColourForm onAddPenColour={handlePen} />
        <h2>Clear Canvas</h2>
        <ClearCanvasButton onButtonClearCanvas={handleClearButton} />
      </div>
    </div>
  )
}

export default App
