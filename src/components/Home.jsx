import React from 'react'
import Header from './common/Header/Header'
import CategoryMenu from './CategoryMenu/CategoryMenu'
import HomeContent from './HomeContent/HomeContent'
import SearchBar from './SearchBar/SearchBar'

const Home = () => {
  return (
    <>
        <Header/>
        <SearchBar/>
        <CategoryMenu/>
        <HomeContent/>
    </>
  )
}

export default Home


