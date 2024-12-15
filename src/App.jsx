
import Merchandise from './pages/merchandise/merchandise';
import Header from './components/navigation/header/header';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Merchandise />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
