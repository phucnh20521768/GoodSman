import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './footer.css'
import logo from '../../assets/images/Logo.png'

function Footer() {
  return (
    <footer className='footer'>
      <Container className='pt-5 pb-3'>
        <Row>
          <Col lg='4'>
            <div className='logo'>
                <NavLink to='home'><img src={logo}  alt='logo' /></NavLink>
            </div>
            <ul className='d-flex justify-content-start gap-4 my-2'>
              <li>
                <a href='#'>
                  <span><i class="ri-facebook-box-fill icon"></i></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span><i class="ri-twitter-fill icon"></i></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span><i class="ri-snapchat-fill icon"></i></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span><i class="ri-github-fill icon"></i></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span><i class="ri-government-fill icon"></i></span>
                </a>
              </li>
            </ul>
            <div>
              <h6 className='pb-3 fw-bold'>Address</h6>
              <p className=''>+123 654 987</p>
              <p className=''>877  The Bronx, NY</p>
              <p className=''>14568, USA</p>
            </div>
          </Col>
          <Col>
              <h6 className='pb-3 fw-bold'>My account</h6>
              <p className=''>Sign in</p>
              <p className=''>Register</p>
              <p className=''>Other status</p>
          </Col>
          <Col>
              <h6 className='pb-3 fw-bold'>Help</h6>
              <p className=''>Shipping</p>
              <p className=''>Return</p>
              <p className=''>Sizing</p>
          </Col>
          <Col>
              <h6 className=' pb-3 fw-bold'>Shop</h6>
              <p className=''>All Product</p>
              <p className=''>Bedroom</p>
              <p className=''>Dinnning Room</p>
          </Col>
          <Col>
              <h6 className='pb-3 fw-bold'>Legal Stuff</h6>
              <p className=''>Shipping & Delivery</p>
              <p className=''>Terms & Conditions</p>
              <p className=''>Privacy & Pocicy</p>
          </Col>
        </Row>
        <Row className='py-4'>
          <Col>
            <p className=''>Copyright &#169;2022 INWOOD. ALL Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer