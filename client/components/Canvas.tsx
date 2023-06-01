import Pixel from './Pixel'

export default function Canvas() {
  return (
    <>
      {Array.from({ length: 20000 }, () => (
        <Pixel />
      ))}
    </>
  )
}
