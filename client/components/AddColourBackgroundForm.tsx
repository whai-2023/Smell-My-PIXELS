import React, { useState } from 'react'

interface Props {
  onAddBackgroundColour: (newBackgroundColour: string) => void
}

export default function AddColourBackgroundForm(props: Props) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.onAddBackgroundColour(event.target.value)
  }

  return (
    <>
      <form>
        <label htmlFor="new-background">Select Background Colour:</label>
        <select
          id="new-background"
          name="new-background"
          onChange={handleChange}
        >
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>

        </select>
      </form>
    </>
  )
}
