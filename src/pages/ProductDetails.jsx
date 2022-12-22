import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import products from "../assets/data/product";
import Helmet from "../components/Helmet/Helmet";
import Divide from "../components/UI/Divide";
import numeral from "numeral";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgThumb: product.imgThumb,
      })
    );
    toast.success("Thêm thành công");
  };
  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">Product</Breadcrumb.Item>
                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="p-4">
            <Col lg="6" className="px-4">
              <div className="border text-center">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={product.imgThumb}
                  className="img-fluid"
                ></motion.img>
              </div>
            </Col>
            <Col lg="6">
              <div className="">
                <p className="fs-3">{product.productName}</p>
                <Divide />
              </div>
              <StarRatings
                rating={product.avgRating}
                starRatedColor="#FFC107"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="1px"
              />
              <p className="fw-light">({product.avgRating} ratings)</p>

              <p>{product.shortDesc}</p>
              <Divide />

              <p className="my-5 display-5 fw-bold">
                {numeral(product.price).format("0,0[.]00")}đ
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary btn-lg opacity-100 fw-bold"
                onClick={addToCart}
              >
                Thêm vào giỏ hàng
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
