import React from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Offcanvas,
  Col,
  Modal,
  ModalBody,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import icon_google from "../../assets/images/icon_google.png";
import "./header.css";

const nav_links = [
  {
    path: "home",
    display: "Trang chủ",
  },
  {
    path: "shop",
    display: "Sản phẩm",
  },
  {
    path: "list",
    display: "Danh mục",
  },
  {
    path: "about",
    display: "Giới thiệu",
  },
  {
    path: "contact",
    display: "Liên hệ",
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserModal: false,
    };

    this.closeUserModal = this.closeUserModal.bind(this);
    this.showUserModal = this.showUserModal.bind(this);
  }

  closeUserModal() {
    this.setState({ showUserModal: false });
  }

  showUserModal() {
    this.setState({ showUserModal: true });
  }

  render() {
    return (
      <header className="header fixed-top">
        <Container>
          <Row>
            <Col>
              <Navbar key="lg" expand="lg" className="my-2">
                <Navbar.Brand href="#">
                  <div className="logo">
                    <NavLink to="home">
                      <img src={logo} className="img-fluid" alt="logo" />
                    </NavLink>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle
                  className="nav-toggler"
                  aria-controls={`offcanvasNavbar-expand-lg`}
                />
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
                      {nav_links.map((item, index) => (
                        <NavLink
                          key={index}
                          className={(navClass) =>
                            navClass.isActive ? "nav-link active" : ""
                          }
                          to={item.path}
                        >
                          {item.display}
                        </NavLink>
                      ))}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className="nav-icons">
                  <span>
                    <i className="ri-search-line icon"></i>
                  </span>
                  <span className="position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      9<span className="visually-hidden">cart</span>
                    </span>
                    <i className="ri-shopping-cart-2-fill icon"></i>
                  </span>
                  <span>
                    <i
                      className="ri-user-fill icon"
                      onClick={this.showUserModal}
                    ></i>
                  </span>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Modal
          show={this.state.showUserModal}
          onHide={this.closeUserModal}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalBody>
            <Container>
              <div className="row p-4">
                <div className="col-12 ri-lock-2-line icon text-center"></div>
                <p className="col-12 text-center">
                  Hey, chào mừng quay trờ lại!!!
                </p>
                <button type="button" className="col-12 my-3 btn btn-primary">
                  <p>
                    <img
                      src={icon_google}
                      alt=""
                      className="img-fluid col-1 mx-1"
                    />{" "}
                    Đăng nhập bằng Google
                  </p>
                </button>
                <div className="d-flex">
                  <hr className="my-auto flex-grow-1"></hr>
                  <div className="px-3">Or</div>
                  <hr className="my-auto flex-grow-1"></hr>
                </div>
                <input
                  type="text"
                  className="col-12 my-3 p-3 form-control"
                  id="username"
                  placeholder="Tên đăng nhập"
                ></input>
                <input
                  type="password"
                  className="col-12 p-3 form-control"
                  id="password"
                  placeholder="Mật khẩu"
                ></input>
                <button
                  type="button"
                  className="col-12 my-3 btn btn-primary text-uppercase"
                >
                  <strong>Đăng nhập</strong>
                </button>
              </div>
            </Container>
          </ModalBody>
        </Modal>
      </header>
    );
  }
}

export default Header;
