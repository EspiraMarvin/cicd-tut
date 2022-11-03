import logo from "./logo.svg"
import "./App.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title = "HOME"
  }, [])
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="about">
          <button
            style={{
              height: "40px",
              width: "130px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            className="App-link"
          >
            About
          </button>
        </Link>
      </header>
    </div>
  )
}
