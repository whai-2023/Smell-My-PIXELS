import Pixel from './Pixel'
import AddColourBackgroundForm from './AddColourBackgroundForm'
import AddPenColourForm from './AddPenColourForm'
import { useState } from 'react'

// function Parent() {
//   const [extraText, setExtraSet] = useState('Something')
//   // extraText = 'Something'
//   function changeExtraText() {
//     setExtraSet('anotherthing')
//   }

//   return <>
//     <h1>Hello</h1>
//     <button onClick={changeExtraText}>wadwa</button>
//     <Child extraTextToAdd={extraText} />
//   </>
// }

// interface childProps {
//   extraTextToAdd: string
// }

// function Child(props: childProps) {
//   console.log(props.extraTextToAdd) // 'anotherthing'

//   return <p>WOW!</p>
// }

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
      </div>
    </div>
  )
}

export default App
