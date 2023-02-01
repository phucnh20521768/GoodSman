import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import products from "../assets/data/product";
import Helmet from "../components/Helmet/Helmet";
import Divide from "../components/UI/Divide";
import numeral from "numeral";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ImageGallery from "react-image-gallery";
import { Form } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductList from "../components/UI/ProductList";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const images = [product.imgThumb].map((item) => {
    return { original: item, thumbnail: item };
  });
  const relatedProduct = products
    .filter((item) => item.category === product.category && item !== product)
    .slice(0, 8);
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
    <Helmet title={product.productName}>
      <section className="my-4">
        <Container>
          <Row>
            <Col xs="auto">
              <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">Product</Breadcrumb.Item>
                <Breadcrumb.Item active>{product.productName}</Breadcrumb.Item>
              </Breadcrumb>
              <Divide />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-4">
        <Container>
          <Row className="">
            <Col lg="6" className="mb-4">
              <Row>
                <Col className="pe-xl-3">
                  <div className="text-center border border-1 rounded px-4">
                    <ImageGallery
                      showNav={false}
                      showPlayButton={false}
                      items={images}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <div className="">
                <p className="fs-3">{product.productName}</p>
                <Divide />
              </div>
              <div className="my-3">
                <h5 className="fw-bold mb-2">Đánh giá chung</h5>
                <div className="d-flex align-items-center mb-3 gap-2">
                  <span>
                    <StarRatings
                      rating={product.avgRating}
                      starRatedColor="#ffd800"
                      numberOfStars={5}
                      name="rating"
                      starDimension="24px"
                      starSpacing="2px"
                      svgIconViewBox="0 0 24 24"
                      svgIconPath="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                    />
                  </span>
                  <p className="fw-light pt-1">({product.avgRating} ratings)</p>
                </div>
              </div>
              <Divide />
              <div className="my-3">
                <h5 className="fw-bold mb-2">Loại sản phẩm</h5>
                <p className="text-capitalize">{product.category}</p>
              </div>
              <Divide />
              <div className="my-3">
                <h5 className="fw-bold mb-2">Miêu tả ngắn</h5>
                <p>{product.shortDesc}</p>
              </div>
              <Divide />
              <div className="mt-3">
                <p className="display-5 mb-3 fw-bold">
                  {numeral(product.price).format("0,0[.]00")}đ
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn btn-primary btn-lg opacity-100 d-flex gap-2"
                  onClick={addToCart}
                >
                  <span>
                    <i className="ri-shopping-cart-line"></i>
                  </span>
                  <p>Thêm vào giỏ hàng</p>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-4">
        <Container>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="des"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="des" title="Mô tả sản phẩm">
                  <p className="p-3">{product.description}</p>
                </Tab>
                <Tab
                  eventKey="profile"
                  title={`Đánh giá sản phẩm (${product.reviews.length})`}
                >
                  <ul>
                    {product.reviews?.map((item, index) => (
                      <li key={index} className="p-3">
                        <h5>{item.name}</h5>
                        <div className="d-flex align-items-center gap-2">
                          <span>
                            <StarRatings
                              rating={item.rating}
                              starRatedColor="#ffd800"
                              numberOfStars={5}
                              name="rating"
                              starDimension="24px"
                              starSpacing="2px"
                              svgIconViewBox="0 0 24 24"
                              svgIconPath="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                            />
                          </span>

                          <p className="fw-light pt-1">
                            ({item.rating} ratings)
                          </p>
                        </div>
                        <p>{item.text}</p>
                        <Divide />
                      </li>
                    ))}
                  </ul>
                  <div className="review__form pt-3">
                    <h1 className="my-3">Đánh giá của bạn</h1>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Tên của bạn" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Lời đánh giá"
                        />
                      </Form.Group>

                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        className="btn btn-primary btn-lg opacity-100"
                      >
                        Gửi
                      </motion.button>
                    </Form>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-4">
        <Container>
          <Row>
            <Col>
              <h2 className="my-3">Mọi người cũng tìm kiếm</h2>
            </Col>
          </Row>
          <Row className="g-3">
            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
