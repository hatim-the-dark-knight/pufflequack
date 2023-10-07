import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from "react-router-dom"
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
  useEffect(() => {
    bot.ready();
  });

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
