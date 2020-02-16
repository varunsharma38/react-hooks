import React, {useState, useEffect} from 'react';

import "./App.scss";

export default function App() {

    const [items, setItems] = useState([])
    const [input, setInput] = useState('')

    function handleClick() {
        setItems([...items, input])
        setInput('')
    }

    function handleInput(e) {
        setInput(e.target.value)
    }

    useEffect(() => {
        document.title = `TODO List: ${items.length} items`
    })

    return (
        <div className="todo-container">
            <input type="text" value={input} onChange={handleInput} />
            <button className="btn-primary" onClick={handleClick}>Add Item</button>
            <ul className="item-list">
                {items.map(item => <li key="item">{item}</li>)}
            </ul>
        </div>
    )
}