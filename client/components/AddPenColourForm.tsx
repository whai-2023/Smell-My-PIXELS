import React, { useState } from 'react'

interface Props {
    onAddPenColour: (newPenColour: string) => void
  }

export default function AddPenColourForm(props: Props) {
    const [text, setText] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
      }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        props.onAddPenColour(text)
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-background">Select Pen Colour:</label>
                <input
                    type="text"
                    name="new-pen"
                    id="new-pen"
                    value={text}
                    onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </>
    )
}