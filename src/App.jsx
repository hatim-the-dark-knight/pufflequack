import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeContent from './components/HomeContent/HomeContent'

import CategoryMenu from './components/CategoryMenu/CategoryMenu'

function App() {
  return (
    <>
      <Header/>
      <CategoryMenu/>
      <HomeContent/>
    </>
  )
}

export default App
