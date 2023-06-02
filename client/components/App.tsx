import Pixel from './Pixel'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenColourForm from './AddPenColourForm'
import ClearCanvasButton from './ClearCanvasButton'
import { useState } from 'react'

function App() {
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [penColour, setPenColour] = useState('black')
  const [resetSwitch, setResetSwitch] = useState(false)

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
            <Pixel key={index} changeBackgroundColour={backgroundColour} changePenColour={penColour} resetSwitch={resetSwitch}/>
          ))}
        </>
      </div>
      <div className="navbar">
        <AddColourBackgroundForm onAddBackgroundColour={handleBackground} />
        <AddPenColourForm onAddPenColour={handlePen} />
        <ClearCanvasButton onButtonClearCanvas={handleClearButton} resetSwitch={resetSwitch} setResetSwitch={setResetSwitch}/>
      </div>
    </div>
  )
}

export default App
