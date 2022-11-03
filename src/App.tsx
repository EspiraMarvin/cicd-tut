import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
