import { React, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import { hasLogin } from "../database/Auth/Auth";
import { useSelector } from "react-redux";
import numeral from "numeral";
import Divide from "../components/UI/Divide";

function Checkout() {
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const totalQuanlity = useSelector((state) => state.cart.totalQuanlity);

  const [methodShipping, setMethodShipping] = useState(1);

  const checkout = () => {
    if (hasLogin()) {
      console.log("Checkouted");
    } else {
    }
  };

  return (
    <Helmet title="Cart">
      <section className="cart">
        <form>
          <Container>
            <Row className="">
              <Col className="col-lg-8 col-12 p-xl-5 py-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h1 className="display-6">Thông tin đơn hàng</h1>
                </div>
                <label for="infoCustomerField" className="form-label"><div className="d-flex"><span className="me-1"><i className="ri-profile-line"></i></span><p>Thông tin khách hàng</p></div></label>
                <div id="infoCustomerField">
                  <input type="text" className="form-control" id="nameCustomer" required placeholder="Họ và tên"></input>
                  <input type="email" className="form-control my-2" id="emailCustomer" placeholder="Địa chỉ email"></input>
                  <input type="tel" className="form-control" id="phoneCustomer" required placeholder="Số điện thoại"></input>
                </div>
                <label for="addressField" className="form-label mt-2"><div className="d-flex"><span className="me-1"><i className="ri-truck-fill"></i></span><p>Địa chỉ nhận hàng</p></div></label>
                <div id="addressField" className="container">
                  <div className="row">
                    <div className="d-flex justify-content-between col-md-6 col-12 p-0">
                      <input type="text" className="form-control" required id="addressCustomer" placeholder="Địa chỉ nhà"></input>
                      <select className="form-select form-select-md">
                        <option selected>Phường/Xã</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-between col-md-6 col-12 p-0">
                      <select className="form-select form-select-md">
                        <option selected>Quận/Huyện</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <select className="form-select form-select-md">
                        <option selected>Tỉnh/Thành phố</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label for="paymentField" className="form-label mt-2"><div className="d-flex"><span className="me-1"><i className="ri-bank-card-fill"></i></span><p>Phương thức thanh toán</p></div></label>
                <div id="paymentField" className="container">
                  <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name="methodPayment" id="momoMethod" data-bs-toggle="collapse" href="#collapseMoMoMethod" role="button" aria-expanded="false" aria-controls="collapseMoMoMethod"></input>
                    <label className="form-check-label" for="momoMethod">
                      Thanh toán bằng MoMo
                    </label>
                  </div>
                  <div className="collapse my-1 ms-5" id="collapseMoMoMethod" data-bs-parent="#paymentField">
                    Thanh toán qua ví MoMo, sử dụng ....
                  </div>

                  <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name="methodPayment" id="bankTransferMethod" data-bs-toggle="collapse" href="#collapseBankTransferMethod" role="button" aria-expanded="false" aria-controls="collapseBankTransferMethod"></input>
                    <label className="form-check-label" for="bankTransferMethod">
                      Thanh toán bằng chuyển khoản ngân hàng
                    </label>
                  </div>
                  <div className="collapse my-1 ms-5" id="collapseBankTransferMethod" data-bs-parent="#paymentField">
                    <ul className="list-group">
                      <li className="list-group-item">Vietcombank: 4632875623875682</li>
                      <li className="list-group-item">Vietinbank: 43263262235355</li>
                      <li className="list-group-item">VISA: 384716248732653287</li>
                    </ul>
                  </div>

                  <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name="methodPayment" id="codMethod" data-bs-toggle="collapse" href="#collapseCODMethod" role="button" aria-expanded="false" aria-controls="collapseCODMethod"></input>
                    <label className="form-check-label" for="codMethod">
                      Thanh toán khi nhận hàng (COD)
                    </label>
                  </div>
                  <div className="collapse my-1 ms-5" id="collapseCODMethod" data-bs-parent="#paymentField">
                    Khi nhận hàng thì thanh toán cho bên vận chuyển ...
                  </div>

                  <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name="methodPayment" id="installmentMethod" data-bs-toggle="collapse" href="#collapseInstallmentMethod" role="button" aria-expanded="false" aria-controls="collapseInstallmentMethod"></input>
                    <label className="form-check-label" for="installmentMethod">
                      Thanh toán bằng phương thức trả góp
                    </label>
                  </div>
                  <div className="collapse my-1 ms-5" id="collapseInstallmentMethod" data-bs-parent="#paymentField">
                    Liên hệ với FE Credit, FB00 Nhà cái đến từ địa phủ
                  </div>

                </div>
                <textarea className="form-control mt-2" id="note" rows="3" placeholder="Ghi chú"></textarea>
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
                  type="submit"
                  className="col-12 btn btn-checkout text-uppercase fw-bold"
                  onClick={checkout}
                >
                  Đặt hàng
                </button>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </Helmet>
  );
}

export default Checkout