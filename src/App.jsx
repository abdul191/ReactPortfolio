import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen"
import Navbar from "./Pages/Home/Navbar"
import Whatsapp from "./Pages/Home/Whatsapp";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<h1>404  Not Found</h1>}></Route>
          </Routes>
          <Whatsapp />
        </div>
      </Router>
    </div>
  )
}

export default App
