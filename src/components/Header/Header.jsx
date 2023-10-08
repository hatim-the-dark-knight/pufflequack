import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="h-container">
      <div className="top-bar">
        <span className="location-label">
          Smart City, Kochi
        </span>
        <Link to="/pufflequack/profile">
          <i className="bi-person-circle"></i>
        </Link>
      </div>
    </div>
  )
}

export default Header