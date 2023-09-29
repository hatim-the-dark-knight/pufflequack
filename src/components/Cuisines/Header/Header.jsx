import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h3 className="title">
          Cuisines
        </h3>
      </div>
      <div className="search-bar">
        <input type="search" name="location-search" id="location-search" />
      </div>
    </div>
  )
}

export default Header