import React, { useState } from 'react'

interface Props {
  onButtonClearCanvas: (newBackgroundColour: string) => void
  resetSwitch: boolean
  setResetSwitch: (newResetSwitch: boolean) => void
}

export default function ClearCanvasButton(props: Props) {
  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    // props.onButtonClearCanvas(event.target.value)
    props.setResetSwitch(!props.resetSwitch)
  }

  return (
    <>
      <button onClick={handleButtonClick}>
        <label htmlFor="new-background">Clear Canvas</label>
      </button>
    </>
  )
}
