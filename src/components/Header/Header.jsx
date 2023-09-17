import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="wrapper">
        <div className="container">
            <div className="logo">
                Q
            </div>

            <div className="menu">
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="">PROJECTS</a>
                <a href="mailto:farsul78@gmail.com">CONTACT</a>
            </div>
        </div>
    </section>
  )
}

export default Header