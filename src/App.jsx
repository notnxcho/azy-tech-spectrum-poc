import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import ChartDemo from './components/ChartDemo'
import Home from './components/Home'
import AssessmentDemo from './components/Assessment/AssessmentDemo'
import { QuestionBankProvider } from './components/Assessment/QuestionBankContext';
import DomainMappedChartDemo from './components/DomainMappedChartDemo'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QuestionBankProvider>
          <Routes>
            <Route path="/chart" element={<ChartDemo />} />
            <Route path="/domainchart" element={<DomainMappedChartDemo />} />
            <Route path="/assessment" element={<AssessmentDemo />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </QuestionBankProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
