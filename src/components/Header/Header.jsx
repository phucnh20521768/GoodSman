import React from 'react'
import { Container, Row, } from 'react-bootstrap'
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
            <div className='nav-wrapper'>
              <div className='logo'>
                <NavLink to='home'><img src={logo}  alt='logo' /></NavLink>
              </div>
                <ul className='nav'>
                  {
                    nav_links.map((item, index) =>(
                      <li className='nav-item' key={index}>
                      <NavLink className={(navClass) => navClass.isActive ? 'nav-link active' : ''}  to={item.path}>{item.display}</NavLink>
                    </li>
                    ))
                  }
                </ul>
              
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
            </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header