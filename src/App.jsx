import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import ChartDemo from './components/ChartDemo'
import Home from './components/Home'
import AssessmentDemo from './components/Assessment/AssessmentDemo'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/chart" element={<ChartDemo />} />
          <Route path="/assessment" element={<AssessmentDemo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
