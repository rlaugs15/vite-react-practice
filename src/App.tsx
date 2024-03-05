import { Outlet } from "react-router-dom"
import "../public/index.css"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
  }

export default App
