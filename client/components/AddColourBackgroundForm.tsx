import React, { useState } from 'react'

interface Props {
    onAddBackground: (newBackground: string) => void
  }

export default function AddColourBackgroundForm(props: Props) {
    const [text, setText] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
      }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        props.onAddBackground(text)
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-background">Select Background Colour:</label>
                <input
                    type="text"
                    name="new-background"
                    id="new-background"
                    value={text}
                    onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </>
    )
}