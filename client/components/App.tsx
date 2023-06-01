import Pixel from './Pixel'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenColourForm from './AddPenColourForm'
import { useState } from 'react'

function App() {
  const [background, setBackground] = useState(['white'])
  const [pen, setPen] = useState(['black'])

  function handleBackground(newBackground: any) {
    setBackground([...background, newBackground])
  }

  function handlePen(newPen: string) {
    setPen([...pen, newPen])
  }

  return (
    <div className="app">
      <div className="navbar">
        <h1>Colours!</h1>
        <h2>Background Colours</h2>
        <AddColourBackgroundForm onAddBackground={handleBackground} />
        <h2>Pen Colours</h2>
        <AddPenColourForm onAddPenColour={handlePen} />
      </div>
      <div className="canvas">
        <>
          {Array.from({ length: 15000 }, () => (
            <Pixel />
          ))}
        </>
      </div>
    </div>
  )
}

export default App
