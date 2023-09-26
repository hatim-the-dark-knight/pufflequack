import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PuffleQuack</a>
          
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