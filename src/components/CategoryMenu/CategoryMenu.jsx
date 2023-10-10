import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './CategoryMenu.css'
import { Link, Route, Routes } from "react-router-dom"

const CategoryMenu = () => {
  return (
    <div className="cm-container">
        <div className="btn-list">
            <Link to="/pufflequack/topOffers/" className="menu-link">
                <button   on className="menu-btn">
                    Top Offers
                </button>
            </Link>
            <Link to="/pufflequack/cuisines/" className="menu-link">
                <button className="menu-btn">
                    Cuisines
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CategoryMenu