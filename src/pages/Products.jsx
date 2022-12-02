import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";

function Products() {
  return (
    <Helmet title={"Products"}>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="home">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Product</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
}

export default Products;
