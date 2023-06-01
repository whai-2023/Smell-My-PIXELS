import Pixel from './Pixel'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenColourForm from './AddPenColourForm'
import { useState } from 'react'
import Colours from './Colours'

function App() {
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [penColour, setPenColour] = useState('black')

  function handleBackground(newBackground: string) {
    setBackgroundColour(newBackground)
  }

  function handlePen(newPen: string) {
    setPenColour(newPen)
  }
  console.log(penColour)
  return (
    <div className="app">
      <div className="canvas">
        <>
          {Array.from({ length: 15000 }, () => (
            <Pixel />
          ))}
        </>
      </div>
      <div className="navbar">
        {/* <Colours /> */}
        <h2>Background Colours</h2>
        <AddColourBackgroundForm onAddBackground={handleBackground} />
        <h2>Pen Colours</h2>
        <AddPenColourForm onAddPenColour={handlePen} />
      </div>
    </div>
  )
}

export default App
