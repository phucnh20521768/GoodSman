import React from 'react'
import { Container, Row, Navbar, Nav, Offcanvas, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import './header.css'

const nav_links = [
  {
    path: 'home',
    display: 'Trang chủ'
  },
  {
    path: 'shop',
    display: 'Sản phẩm'
  },
  {
    path: 'list',
    display: 'Danh mục'
  },
  {
    path: 'about',
    display: 'Giới thiệu'
  },
  {
    path: 'contact',
    display: 'Liên hệ'
  },
]

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row>
          <Col>
          <Navbar key='lg' expand='lg' className='my-2'>
            <Navbar.Brand href="#">
            <div className='logo'>
                <NavLink to='home'><img src={logo}  alt='logo' /></NavLink>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 nav">
                {
              nav_links.map((item, index) =>(
                <NavLink className={(navClass) => navClass.isActive ? 'nav-link active' : ''}  to={item.path}>{item.display}</NavLink>
              ))
            }
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='nav-icons'>
                <span><i className="ri-search-line icon"></i></span>
                <span className='position-relative'>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">9
                    <span className="visually-hidden">cart</span>
                  </span>
                  <i className="ri-shopping-cart-2-fill icon"></i>
                </span>
                <span><i className="ri-user-fill icon"></i></span>
              </div>
          </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header