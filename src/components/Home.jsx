import React from 'react'
import Header from './common/Header/Header'
import CategoryMenu from './CategoryMenu/CategoryMenu'
import HomeContent from './HomeContent/HomeContent'
import SearchBar from './SearchBar/SearchBar'
import '../App.css'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <SearchBar/>
        <CategoryMenu/>
        <HomeContent/>
    </div>
  )
}

export default Home


