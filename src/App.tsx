import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HistoriaPage from './components/historia/historiaPage'
import HomePage from './components/homePage/HomePage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="nossa-historia" element={ <HistoriaPage /> } />
      </Routes>
    </Router>
  )
}

export default App
