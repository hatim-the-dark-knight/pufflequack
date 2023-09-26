import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Q</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link mx-2" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

      // <Navbar className="" bg="light" data-bs-theme="light">
      //   <Container>
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className="me-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#projects">Projects</Nav.Link>
      //       <Nav.Link href="#about">About</Nav.Link>
      //       <Nav.Link href="#contact">Contact</Nav.Link>
      //     </Nav>
      //   </Container>
      // </Navbar>