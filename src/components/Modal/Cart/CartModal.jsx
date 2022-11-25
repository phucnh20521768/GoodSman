import { React, useEffect, useState, useRef } from 'react'
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import './CartModal.css'
import { hasLogin } from '../../../database/Auth/Auth';
import icon_google from '../../../assets/images/arm-chair-01.jpg'

function Divide() {
    return (<>
        <div className="d-flex py-2 px-5">
            <hr className="my-auto flex-grow-1"></hr>
        </div>
    </>
    )
}

function ProductCart(props) {
    const [quantity, setQuantity] = useState(props.item.quantity)

    const updateQuantity = (value) => {
        setQuantity(value)
        props.item.quantity = value
        props.update()
    }

    const removeItem = (item) => {
        props.remoteItem(item)
    }

    return (<Row className='p-2 g-0'>
        <img src={icon_google} alt="" className='col-2 img-fluid' />
        <Col className='my-auto'>
            <div className='text-primary'>{props.item.name}</div>
            <div className='text-secondary'>{props.item.id}</div>
        </Col>
        <div className='col-3 my-auto'>
            <i className='ri-subtract-line col-3 rounded btn-quantity' onClick={() => updateQuantity(quantity - 1)}></i>
            <input type="number" className='col-6 px-1 mx-1 rounded border border-1' value={quantity} onChange={(e) => updateQuantity(parseInt(e.target.value))} />
            <i className='ri-add-line col-3 rounded btn-quantity' onClick={() => updateQuantity(quantity + 1)}></i>
        </div>
        <span className='col-2 my-auto'>{quantity * props.item.pricePerUnit}</span>
        <i className='col-1 ri-close-line my-auto' onClick={() => removeItem(props.item)}></i>
    </Row>)
}

function CartModal(props) {
    const [methodShipping, setMethodShipping] = useState(1)
    const [updated, setUpdated] = useState(false)

    const update = () => {
        setUpdated(!updated)
    }

    const removeItem = (item) => {
        let index = props.items.indexOf(props.items.filter(e => e.id === item.id)[0])
        if (index >= 0) {
            props.items.splice(index, 1)
        }
        update()
    }

    const checkout = () => {
        if (hasLogin()) {
            console.log("Checkouted")
        }
        else {
            props.open()
        }
    }

    return (
        <Modal
            show={props.show}
            onHide={props.close}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Row className='col-lg-8 col-11 g-0 p-2'>
                    <span className='col-6'>Shopping cart</span>
                    <span className='col-6 text-end'>{props.items.length} items</span>
                </Row>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <Container>
                    <Row>
                        <Row className='col-lg-8 col-12 g-0 p-2'>
                            {props.items.map(item =>
                                <>
                                    <ProductCart key={item.id} item={item} update={update} remoteItem={removeItem} />
                                    <Divide />
                                </>
                            )}
                        </Row>
                        <Row className='col-lg-4 col-12 rounded-summary bg-primary-section-summary g-0 gy-lg-0 gy-2 p-3 text-white text-center'>
                            <span>Summary</span>
                            <Divide />
                            <span className='col-6'>{props.items.length} items</span>
                            <span className='col-6 '>{props.items.reduce((partitalSum, value) => partitalSum + value.quantity * value.pricePerUnit, 0)}</span>
                            <span className='col-6'>SHPPING</span>
                            <div className='col-9 mx-auto'>
                                <select className="form-select" aria-label="Default select example" value={methodShipping} onChange={(e) => setMethodShipping(e.target.value)}>
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
                            <button className='col-12 my-3 btn btn-checkout text-uppercase' onClick={checkout}>Checkout</button>
                        </Row>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default CartModal