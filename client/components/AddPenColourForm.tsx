import React, { useState } from 'react'

interface Props {
  onAddPenColour: (newPenColour: string) => void
}

export default function AddPenColourForm(props: Props) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.onAddPenColour(event.target.value)
  }

  return (
    <>
      <form>
        <label htmlFor="new-background">Select Pen Colour:</label>
        <select id="new-pen" name="new-pen" onChange={handleChange}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </form>
    </>
  )
}
