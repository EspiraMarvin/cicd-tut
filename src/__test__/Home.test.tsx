import { render, screen } from "@testing-library/react"
import Home from "../Home"
import { BrowserRouter } from "react-router-dom"

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

test("renders learn react link", () => {
  render(<MockHome />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
