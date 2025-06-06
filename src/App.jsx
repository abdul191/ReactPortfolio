import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen"
import Navbar from "./components/Navbar"
import Whatsapp from "./components/Whatsapp";
function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
