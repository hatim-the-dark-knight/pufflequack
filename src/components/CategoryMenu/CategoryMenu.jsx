import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './CategoryMenu.css'
import { Link, Route, Routes } from "react-router-dom"

const CategoryMenu = () => {
  return (
    <div className="cm-container">
        <div className="btn-list">
            <button className="menu-btn">
                <Link to="/pufflequack/topOffers" className="menu-link">
                    Top Offers
                </Link>
            </button>
            <button className="menu-btn">
                <Link to="/pufflequack/cuisines" className="menu-link">
                    Cuisines
                </Link>
            </button>
        </div>
    </div>
  )
}

export default CategoryMenu