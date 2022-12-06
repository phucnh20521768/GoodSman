import { React, useEffect, useState, useRef } from "react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import "../styles/cart.css";
import { hasLogin } from "../database/Auth/Auth";
import icon_google from "../assets/images/arm-chair-01.png";

const mockData = [
  {
    id: "01",
    name: "Dell Precision 7770",
    desc: "Intel Core i7-12700H, 16GB DDR5 5200MHz",
    quantity: 1,
    pricePerUnit: 10,
  },
  {
    id: "02",
    name: "Dell Precision 7770",
    desc: "Intel Core i7-12700H, 16GB DDR5 5200MHz",
    quantity: 1,
    pricePerUnit: 20,
  },
  {
    id: "03",
    name: "Dell Precision 7770",
    desc: "Intel Core i7-12700H, 16GB DDR5 5200MHz",
    quantity: 1,
    pricePerUnit: 30,
  },
  {
    id: "04",
    name: "Dell Precision 7770",
    desc: "Intel Core i7-12700H, 16GB DDR5 5200MHz",
    quantity: 1,
    pricePerUnit: 10,
  },
  {
    id: "05",
    name: "Dell Precision 7770",
    desc: "Intel Core i7-12700H, 16GB DDR5 5200MHz",
    quantity: 1,
    pricePerUnit: 20,
  },
];

function Divide() {
  return (
    <>
      <div className="d-flex">
        <hr className="my-auto flex-grow-1"></hr>
      </div>
    </>
  );
}

function ProductCart(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);

  const updateQuantity = (value) => {
    setQuantity(value);
    props.item.quantity = value;
    props.update();
  };

  const removeItem = (item) => {
    props.remoteItem(item);
  };

  return (
    <Row className="d-flex align-items-center product-cart my-3 justify-content-between">
      <Col
        xs="10"
        md="6"
        className="product-cart__img d-flex align-items-center order-0"
      >
        <img src={icon_google} alt="" className="img-fluid" />
        <div className="">
          <p className="text-secondary">{props.item.id}</p>
          <p className="text-black fw-bold ">{props.item.name}</p>
        </div>
      </Col>
      <Col xs="6" md="auto" className="d-flex justify-content-center order-2">
        <span>
          <i
            className="ri-subtract-line rounded btn-quantity"
            onClick={() => updateQuantity(quantity - 1)}
          ></i>
        </span>
        <input
          type="number"
          className="rounded border border-1 ps-3 fw-light fs-6"
          style={{ width: "4rem" }}
          value={quantity}
          onChange={(e) => updateQuantity(parseInt(e.target.value))}
        />
        <span>
          <i
            className="ri-add-line rounded btn-quantity"
            onClick={() => updateQuantity(quantity + 1)}
          ></i>
        </span>
      </Col>
      <Col xs="6" md="auto" className="text-end pe-5 p-md-0 ps-xl-5 order-3">
        <p className="">${quantity * props.item.pricePerUnit}</p>
      </Col>
      <Col xs="2" md="auto" className="order-1 order-md-last">
        <span>
          <i
            className="ri-close-line"
            onClick={() => removeItem(props.item)}
          ></i>
        </span>
      </Col>
    </Row>
  );
}

function Cart() {
  const props = {
    items: mockData,
    open: () => {},
  };
  const [methodShipping, setMethodShipping] = useState(1);
  const [updated, setUpdated] = useState(false);

  const update = () => {
    setUpdated(!updated);
  };

  const removeItem = (item) => {
    let index = props.items.indexOf(
      props.items.filter((e) => e.id === item.id)[0]
    );
    if (index >= 0) {
      props.items.splice(index, 1);
    }
    update();
  };

  const checkout = () => {
    if (hasLogin()) {
      console.log("Checkouted");
    } else {
      props.open();
    }
  };

  return (
    <Container>
      <Row className="">
        <Col className="col-lg-8 col-12 p-xl-5 py-5">
          <div
            className="d-flex align-items-center product-cart position-sticky bottom-0 start-0 mb-2 cursor-pointer"
            onClick={props.close}
          >
            <span>
              <i className="ri-arrow-left-line"></i>
            </span>
            <p>Back to shop</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="display-6">Shopping cart</h1>
            <p className="opacity-75 fw-light">{props.items.length} items</p>
          </div>
          <Divide />
          {props.items.map((item) => (
            <>
              <ProductCart
                key={item.id}
                item={item}
                update={update}
                remoteItem={removeItem}
              />
              <Divide />
            </>
          ))}
        </Col>
        <Col className="col-lg-4 col-12 cart-modal__summary fw-bold">
          <div className="mb-5">
            <h3>Summary</h3>
          </div>
          <Divide />
          <div className="my-4">
            <div className="d-flex justify-content-between my-2">
              <p className="">ITEMS: {props.items.length}</p>
              <p className="">
                $
                {props.items.reduce(
                  (partitalSum, value) =>
                    partitalSum + value.quantity * value.pricePerUnit,
                  0
                )}
              </p>
            </div>
            <div className="py-3">
              <p className="mb-3">SHIPPING</p>
              <div className="">
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  value={methodShipping}
                  onChange={(e) => setMethodShipping(e.target.value)}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="py-3">
              <p className="mb-3">GIFT CODE</p>
              <div className="">
                <div className="input-group">
                  <p className="input-group-text" id="addon-wrapping">
                    GSM
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gift code"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <Divide />
          <div className="d-flex justify-content-between my-3">
            <p className="">TOTAL PRICE</p>
            <p className="">$ 532.4</p>
          </div>

          <button
            className="col-12 btn btn-checkout text-uppercase shadow-lg"
            onClick={checkout}
          >
            Checkout
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
