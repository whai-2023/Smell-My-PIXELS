import React, { useState } from 'react'

interface Props {
  onButtonClearCanvas: (newBackgroundColour: string) => void
}

export default function ClearCanvasButton(props: Props) {
  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    props.onButtonClearCanvas(event.target)
  }

  return (
    <>
      <button onClick={handleButtonClick}>
        <label htmlFor="new-background">Clear Canvas</label>
      </button>
    </>
  )
}
