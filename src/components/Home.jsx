import React from 'react'
import { useEffect } from 'react'
import Header from './Header/Header'
import CategoryMenu from './CategoryMenu/CategoryMenu'
import SearchBar from './SearchBar/SearchBar'
import Content from './Content/Content'
import '../App.css'

const Home = () => {
  return (
    <div className=''>
        <Header/>
        <SearchBar/>
        <CategoryMenu/>
        <div className="content-title">
          Popular Restaurants
        </div>
        <Content category=""/>
    </div>
  )
}

export default Home


