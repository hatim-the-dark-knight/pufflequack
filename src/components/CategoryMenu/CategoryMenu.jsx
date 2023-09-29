import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './CategoryMenu.css'

const CategoryMenu = () => {
  return (
    <div className="container">
        <div className="btn-list">
            <button className="menu-btn">
                Near Me
            </button>
            <button className="menu-btn">
                Top Offers
            </button>
            <button className="menu-btn">
                Cuisines
            </button>
        </div>
    </div>
  )
}

export default CategoryMenu