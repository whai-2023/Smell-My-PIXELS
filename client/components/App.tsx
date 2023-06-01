import Nav from './PenColour'
import Header from './Header'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenBackgroundForm from './AddPenColourForm'
import { useState } from 'react'

function App() {
  const [background, setBackground] = useState(['white'])
  const [pen, setPen] = useState(['black'])

  function handleBackground(newBackground: any) {
    setBackground(handleBackground)
  }

  function handlePen(newPen: string) {
    setPen(' ')
  }

  return (
    <div className="App">
      <Header/>
      <Nav placeHolder="Select..."/>
        <AddColourBackgroundForm onAddBackground={handleBackground} />
        <AddPenBackgroundForm onAddPenColour={handleBackground} />
    </div>
  )
}

export default App