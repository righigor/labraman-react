import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HeroIcon from './components/heroIcon/HeroIcon'
import HistoriaPage from './components/historia/historiaPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HeroIcon /> } />
        <Route path="nossa-historia" element={ <HistoriaPage /> } />
      </Routes>
    </Router>
  )
}

export default App
