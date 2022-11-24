import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/product_card.css";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <>
      <Card className="product-item">
        <Link to="/shop/id">
          <motion.img
            whileHover={{ scale: 1.2 }}
            className="product-item__img img-fluid"
            src={item.imgUrl}
          />
        </Link>
        <Card.Body className="product-item__des my-2">
          <Link to="/shop/id">
            <Card.Title className="product-item__des--title">
              {item.productName}
            </Card.Title>
          </Link>
          <Card.Text className="product-item__des--cate fw-light">
            {item.category}
          </Card.Text>
          <div className="product-item__bottom d-flex justify-content-between mt-4">
            <Card.Text className="product-item__des--value">
              {item.price}đ
            </Card.Text>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="product-item__des--icon"
            >
              <i className="ri-add-line"></i>
            </motion.span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
