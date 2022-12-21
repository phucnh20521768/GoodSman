import { React, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import { hasLogin } from "../database/Auth/Auth";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";

function Divide() {
  return (
    <>
      <div className="d-flex">
        <hr className="my-auto flex-grow-1"></hr>
      </div>
    </>
  );
}

function ProductCart({ item }) {
  const updateQuantity = (value) => {};
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <Row className="d-flex align-items-center product-cart my-3 justify-content-between">
      <Col
        xs="10"
        md="6"
        className="product-cart__img d-flex align-items-center order-0"
      >
        <img src={item.imgThumb} alt="" className="img-fluid" />
        <div className="">
          <p className="text-black fw-bold ">{item.productName}</p>
        </div>
      </Col>
      <Col xs="6" md="auto" className="d-flex order-2">
        <span>
          <i className="ri-subtract-line rounded btn-quantity"></i>
        </span>
        <input
          type="number"
          className="rounded border border-1 ps-3 fw-light fs-6"
          style={{ width: "4rem" }}
          value={item.quanlity}
          onChange={(e) => updateQuantity(parseInt(e.target.value))}
        />
        <span>
          <i className="ri-add-line rounded btn-quantity"></i>
        </span>
      </Col>
      <Col xs="6" md="auto" className="text-end pe-5 p-md-0 ps-xl-5 order-3">
        <p className="">{numeral(item.price).format("0,0[.]00")}đ</p>
      </Col>
      <Col xs="2" md="auto" className="order-1 order-md-last">
        <span>
          <i
            className="ri-close-line cursor-pointer"
            onClick={deleteProduct}
          ></i>
        </span>
      </Col>
    </Row>
  );
}

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const totalQuanlity = useSelector((state) => state.cart.totalQuanlity);
  const props = {
    open: () => {},
  };
  const [methodShipping, setMethodShipping] = useState(1);

  const checkout = () => {
    if (hasLogin()) {
      console.log("Checkouted");
    } else {
      props.open();
    }
  };

  return (
    <Helmet title="Cart">
      <Container>
        <Row className="">
          <Col className="col-lg-8 col-12 p-xl-5 py-5">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h1 className="display-6">Giỏ hàng</h1>
            </div>
            <Divide />
            {cartItems.length === 0 ? (
              <h2 className="fs-4 my-3">Chưa có sản phẩm trong giỏ hàng</h2>
            ) : (
              cartItems.map((item, index) => (
                <div key={index}>
                  <ProductCart item={item} />
                  <Divide />
                </div>
              ))
            )}
          </Col>
          <Col className="col-lg-4 col-12 cart-modal__summary fw-bold">
            <div className="mb-5">
              <h3>Thanh toán</h3>
            </div>
            <Divide />
            <div className="my-4">
              <div className="d-flex justify-content-between my-2">
                <p className="">{totalQuanlity} sản phẩm</p>
                <p className="">{numeral(totalPrice).format("0,0[.]00")}đ</p>
              </div>
              <div className="py-3">
                <p className="mb-3">Vận chuyển</p>
                <div className="">
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={methodShipping}
                    onChange={(e) => setMethodShipping(e.target.value)}
                  >
                    <option selected>Phương thức vận chuyển</option>
                    <option value="1">Phương thức 1</option>
                    <option value="2">Phương thức 1</option>
                    <option value="3">Phương thức 1</option>
                  </select>
                </div>
              </div>
              <div className="py-3">
                <p className="mb-3">Mã ưu đãi</p>
                <div className="">
                  <div className="input-group">
                    <p className="input-group-text" id="addon-wrapping">
                      GSM
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập mã  "
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <Divide />
            <div className="d-flex justify-content-between my-3">
              <p className="">TỔNG THANH TOÁN</p>
              <p className="">{numeral(totalPrice).format("0,0[.]00")}đ</p>
            </div>

            <button
              className="col-12 btn btn-checkout text-uppercase shadow-lg"
              onClick={checkout}
            >
              Đặt hàng
            </button>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
}

export default Cart;
