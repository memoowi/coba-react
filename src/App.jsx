import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coba-react/" element={<Home />} />
        <Route path="/coba-react/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
