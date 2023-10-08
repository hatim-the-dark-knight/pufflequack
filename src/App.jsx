import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import React from 'react'
import { useEffect } from 'react'
import Home from './components/Home'
import Cuisines from './components/Cuisines'
import Restaurant from './components/Restaurant/Restaurant'
import data from './utils/categories.json'
import TopOffers from './components/TopOffers'
import SearchPage from './components/SearchPage/SearchPage'
import Profile from './components/Profile/Profile'

const bot = window.Telegram.WebApp;

    

function App() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    bot.ready();
    bot.BackButton.onClick(goBack);
    bot.BackButton.show();
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/pufflequack" element={<Home />} />
        <Route path="/pufflequack/profile" element={<Profile />} />
        <Route path="/pufflequack/cuisines" element={<Cuisines />} />
        <Route path="/pufflequack/topOffers" element={<TopOffers />} />
        <Route path="/pufflequack/search" element={<SearchPage />} />
        {
          data.map((item, i) => {
          return(
              <Route key={i} path={`/pufflequack/${i}`} element={<Restaurant index={i}/>} />
          )})
        }
      </Routes>
    </div>
    
  )
}

export default App
