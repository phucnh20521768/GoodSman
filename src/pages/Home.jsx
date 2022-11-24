import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductList";
import "../styles/home.css";
import product from "../assets/data/product";
import { Test } from "../database/testConnection.js";

function Home() {
  const [data, setData] = useState(product);

  useEffect(() => {
    const trendingProduct = product.filter((item) => item.isTrending === true);

    setData(trendingProduct);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero-section">
        <div className="bg-hero"></div>
        <Container>
          <Row>
            <Col xl="5" sm="8">
              <div className="hero-content shadow-lg rounded">
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
      <section className="product">
        <Container>
          <Row className="text-center mb-5">
            <h1 className="fw-bold display-6">Sản phẩm được ưu chuộng</h1>
          </Row>
          <Row className="">
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
