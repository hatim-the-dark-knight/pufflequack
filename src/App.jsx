import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PuffleQuack</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * 2)}>
          Count: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and Enjoy!!
        </p>
      </div>
      <p className="read-the-docs">
        Just do whatever you want!
      </p>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
