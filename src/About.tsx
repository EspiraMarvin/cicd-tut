import React, { useEffect } from "react"
import "./App.css"
import { Link } from "react-router-dom"

export default function About() {
  useEffect(() => {
    document.title = "ABOUT"
  }, [])

  return (
    <div>
      <div className="App-header">
        <h3>About !!!!</h3>
        <Link to="/">
          <button
            style={{
              background: "white",
              height: "40px",
              width: "130px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            className="App-link"
          >
            GO BACK HOME
          </button>
        </Link>
      </div>
    </div>
  )
}
