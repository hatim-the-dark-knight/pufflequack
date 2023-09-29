import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <span className="location-label">
          Smart City, Kochi
        </span>
        <a href="#">
          <img src="/Burger_148.png" className="profile-icon">
          </img>
        </a>
      </div>
      <div className="search-bar">
        <input type="search" name="location-search" id="location-search" />
      </div>
    </div>
  )
}

export default Header