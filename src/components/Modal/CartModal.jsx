import { React, useState } from 'react'
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import './CartModal.css'

import icon_google from '../../assets/images/arm-chair-01.jpg'

function Divide() {
    return (<>
        <div className="d-flex py-2 px-5">
            <hr className="my-auto flex-grow-1"></hr>
        </div>
    </>
    )
}

function ProductCart() {
    return (<Row className='p-2 g-0'>
        <img src={icon_google} alt="" className='col-2 img-fluid' />
        <Col className='my-auto'>
            <div className='text-primary'>Shirt</div>
            <div className='text-secondary'>Cotton T-shirt</div>
        </Col>
        <div className='col-3 my-auto'>
            <i className='ri-subtract-line col-3'></i>
            <input type="number" className='col-6 px-1 mx-1 rounded border border-1' />
            <i className='ri-add-line col-3'></i>
        </div>
        <span className='col-2 my-auto'>$ 44.00</span>
        <i className='col-1 ri-close-line my-auto'></i>
    </Row>)
}

function CartModal() {
    return (
        <Modal
            show={true}
            onHide={null}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Row className='col-lg-8 col-11 g-0 p-2'>
                    <span className='col-6'>Shopping cart</span>
                    <span className='col-6 text-end'>3 items</span>
                </Row>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <Container>
                    <Row>
                        <Row className='col-lg-8 col-12 g-0 p-2'>
                            <ProductCart />
                            <Divide />
                            <ProductCart />
                            <Divide />
                            <ProductCart />
                            <Divide />
                            <ProductCart />
                        </Row>
                        <Row className='col-lg-4 col-12 rounded-summary bg-primary-section-summary g-0 gy-lg-0 gy-2 p-3 text-white text-center'>
                            <span>Summary</span>
                            <Divide />
                            <span className='col-6'>ITEMS: 3</span>
                            <span className='col-6 '>$ 532.4</span>
                            <span className='col-6'>SHPPING</span>
                            <div className='col-9 mx-auto'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <span className='col-6'>GIFT CODE</span>
                            <div className='col-9 mx-auto'>
                                <div className="input-group">
                                    <span className="input-group-text" id="addon-wrapping">GSM</span>
                                    <input type="text" className="form-control" placeholder="Gift code" aria-label="Username" aria-describedby="addon-wrapping"></input>
                                </div>
                            </div>
                            <Divide />
                            <span className='col-6'>TOTAL PRICE</span>
                            <span className='col-6 '>$ 532.4</span>
                            <button className='col-12 my-3 btn btn-checkout text-uppercase'>Checkout</button>
                        </Row>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default CartModal