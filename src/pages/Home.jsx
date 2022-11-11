import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

function Home() {
  return (
    <Helmet title={"Home"}>
      <section className='hero-section'>
      <div class="bg-hero"></div>
        <Container >
          <Row>
            <Col lg='5' md='5'>
              <div className='hero-content shadow-lg rounded'>
                <h1 className='fw-bold display-6'>HIỆN THỰC HÓA ƯỚC MƠ CÔNG NGHỆ</h1>
                <p className='my-5 h6'>Đổi mới sáng tạo, truy cầu sự hoàn hảo</p>
                <button type='button' className='btn btn-primary btn-lg'>Mua hàng</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='category'>
        <Container >
          <Row>

          </Row>
          <Row>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home