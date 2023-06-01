import Canvas from './Canvas'
import Splash from './Landing'
import Pixel from './Pixel'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Pixel />
      <Canvas />
    </div>
  )
}
