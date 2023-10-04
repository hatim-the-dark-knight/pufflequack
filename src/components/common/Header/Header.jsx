import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <span className="location-label">
          Smart City, Kochi
        </span>
        <Link to="/pufflequack/profile">
          <i class="bi-person-circle"></i>
          {/* <img src="/Burger_148.png" className="profile-icon">
          </img> */}
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" class="form-control form-input" name="location-search" id="location-search" placeholder="Search Restaurants.." />
      </div>
    </div>
  )
}

export default Header