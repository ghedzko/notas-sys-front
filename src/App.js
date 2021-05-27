import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"

function Title({ name, showTitle }) {
    return showTitle && <h1>Hola {name}</h1>
}

function App() {
    const [showTitle, setShowTitle] = useState(false)

    const name = "Guillo"

    const handleToggleTitle = () => {
        setShowTitle(!showTitle)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Title name={name} showTitle={showTitle} />
                <button onClick={handleToggleTitle}>toggle title</button>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
