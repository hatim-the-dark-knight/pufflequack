import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import React from 'react'
import { useEffect } from 'react'
import Home from './components/Home'
import Cuisines from './components/Cuisines'
import Restaurant from './components/Restaurant/Restaurant'
import data from './utils/categories.json'
import TopOffers from './components/TopOffers'
import SearchPage from './components/SearchPage/SearchPage'
import Profile from './components/Profile/Profile'
import Cover from './components/Cover/Cover'

const bot = window.Telegram.WebApp;
const filteredItems = data.map((restaurant) => restaurant.category).filter((value, index, self) => {
  return self.indexOf(value) === index;
});

let backPath = "";
const getBackPath = (path) => {
  if(path === "/pufflequack/easydineouts") {
    backPath = path;
  } else if(path === ("/pufflequack/easydineouts/profile" || "/pufflequack/easydineouts/cuisines" || "/pufflequack/easydineouts/topOffers" || "/pufflequack/easydineouts/search")) {
    backPath = "/pufflequack/easydineouts/";
  } else if(path.includes("/pufflequack/easydineouts/cuisines/")) {
    backPath = "/pufflequack/easydineouts/cuisines";
  } else {
    backPath = "";
  }
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    bot.MainButton.hide();
    getBackPath(location.pathname);
    if(backPath === "") {
      navigate(-1);
      bot.BackButton.show();
      bot.showPopup("Success", "(empty) Can navigate back", [{"type": "close"}]);
    }
    else {
      navigate(backPath);
      if(backPath === "/pufflequack/easydineouts") {
        bot.BackButton.hide();
        bot.showAlert("Cannot navigate back");
      } else {
        bot.BackButton.show();
        bot.showAlert("Can navigate back");
      }
    }
  }

  useEffect(() => {
    bot.ready();
    bot.expand();
    bot.BackButton.onClick(goBack);
    bot.BackButton.show();
    bot.enableClosingConfirmation();
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/pufflequack/" element={<Cover />} />
        <Route path="/pufflequack/easydineouts" element={<Home />} />
        <Route path="/pufflequack/easydineouts/profile" element={<Profile />} />
        <Route path="/pufflequack/easydineouts/cuisines" element={<Cuisines />} />
        <Route path="/pufflequack/easydineouts/topOffers" element={<TopOffers />} />
        <Route path="/pufflequack/easydineouts/search" element={<SearchPage />} />
        {
          data.map((item, i) => {
          return(
              <Route key={i} path={`/pufflequack/easydineouts/restaurants/${i}`} element={<Restaurant index={i}/>} />
          )})
        }
        {
          filteredItems.map((item, i) => {
            return(
                <Route key={i} path={`/pufflequack/easydineouts/cuisines/${item}`} element={<Cuisines category={item}/>} />
            )})
        }
      </Routes>
    </div>
    
  )
}

export default App
