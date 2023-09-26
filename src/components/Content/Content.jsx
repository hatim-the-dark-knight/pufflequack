import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Content.css'

const Content = () => {
  return (
    <div className="grid">
        <div className="item-card">
            <img src="public/Burger_148.png" alt="" />
            <div className="label">
                Burger * <b>$4.99</b>
            </div>
            <button className="addButton">
                ADD
            </button>
        </div>
    </div>
  )
}

export default Content


