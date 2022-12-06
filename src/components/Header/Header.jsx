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
    path: "about",
    display: "Giới thiệu",
  },
  {
    path: "products",
    display: "Sản phẩm",
  },
  {
    path: "our-projects",
    display: "Dự án",
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
];

function Header() {
  return (
    <header className="header">
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
                  <i className="ri-search-line icon cursor-pointer"></i>
                </span>
                <span className="position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    9<span className="visually-hidden">cart</span>
                  </span>
                  <NavLink to="/cart" activeClassName='active'><i className="ri-shopping-cart-2-fill icon cursor-pointer"></i></NavLink>
                </span>
                <NavLink to="/account" activeClassName="active"><i className="ri-user-fill icon cursor-pointer"></i></NavLink>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

