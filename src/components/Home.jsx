import React from 'react'
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
        <Content title="Popular Restaurants"/>
    </div>
  )
}

export default Home


