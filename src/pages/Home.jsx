import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductList";
import "../styles/home.css";
import product from "../assets/data/product";
import Clock from "../components/UI/Clock";
import Services from "../services/Services";
import serviceData from "../assets/data/servicesData";

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const services = serviceData;
  const bestSellProduct = product[Math.floor(Math.random() * product.length)];
  useEffect(() => {
    const filteredTrendingProducts = product.filter(
      (item) => item.isTrending === true
    );
    setTrendingProducts(filteredTrendingProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero-section">
        <div className="hero-section__bg"></div>
        <Container>
          <Row>
            <Col xl="5" md="8">
              <div className="hero-section__content shadow-lg rounded">
                <h1 className="fw-bold display-6">
                  HIỆN THỰC HÓA ƯỚC MƠ CÔNG NGHỆ
                </h1>
                <p className="my-5 h6">
                  Đổi mới sáng tạo, truy cầu sự hoàn hảo
                </p>
                <Link to="/shop">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="btn btn-primary btn-lg"
                  >
                    Mua hàng
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="category">
        <Container>
          <Row></Row>
          <Row></Row>
        </Container>
      </section>
      <section className="product-trending">
        <Container>
          <Row className="text-center py-5">
            <h1 className="fw-bold display-6">Sản phẩm được ưu chuộng</h1>
          </Row>
          <Row className="">
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="product-special-discount">
        <Container>
          <Row className="text-center py-5">
            <h1 className="fw-bold display-6">Khuyến mãi đặc biệt</h1>
          </Row>
          <Row className="text-center">
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="product-best-sell">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg="6">
              <div className="product-best-sell__content">
                <div className="product-best-sell__content--title">
                  <h4 className="fs-5 mb-2">Limited offer</h4>
                  <h3 className="fs-3 mb-3">Sản phẩm cực Hot</h3>
                </div>
                <div className="product-best-sell__content--clock my-4">
                  <Clock />
                </div>
                <Link to="/shop">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="btn btn-primary btn-lg bg-white text-black opacity-100 fw-bold"
                  >
                    Ghé shop ngay!
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6">
              <div className="product-best-sell__img text-end">
                <img
                  src={bestSellProduct.imgUrl}
                  className="img-fluid"
                  alt=""
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-services my-5 py-3">
        <Container>
          <Row className="text-center py-5">
            <h1 className="fw-bold display-6">
              Lợi ích khi mua hàng tại Wibu Store
            </h1>
          </Row>
          <Row className="text-center">
            {services.map((item, index) => (
              <Col sx="12" lg="3" md="6" key={index} className="p-4">
                <Services item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
