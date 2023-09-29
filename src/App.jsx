import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from "react-router-dom"

import Home from './components/Home/Home'
import Cuisines from './components/Cuisines/Cuisines'

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/pufflequack" class="list">
            Home
          </Link>
          <Link to="/pufflequack/cuisines" class="list">
            Cuisines
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/pufflequack" element={<Home />} />
        <Route path="/pufflequack/cuisines" element={<Cuisines />} />
        {/* <Route path="/details" element={<Live />} />
        <Route path="/payment" element={<Contact />} /> */}
      </Routes>
    </div>
    
  )
}

export default App
