import React, {useState} from 'react'

export const AddCategory = (props) => {
    const {categories, setCategories} = props
    const [input, setInput] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const addCategory = (event) => {
        event.preventDefault()
        if (input.trim().length > 2) {
            if (!categories.includes(input)) {
                setCategories([input, ...categories])
            } else {  }
            setInput("")
        }
    }

    return (
        <>
            <form onSubmit={addCategory}>
                <input onChange={inputChange} value={input} type='text' id='category' />
                <button type='submit'>Agregar</button>
            </form>
        </>
    )
}
