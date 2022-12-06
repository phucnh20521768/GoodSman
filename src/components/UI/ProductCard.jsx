import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/product_card.css";
import { Link } from "react-router-dom";
import colors from "../../assets/data/colorCard";
import numeral from "numeral";
function ProductCard({ item, index }) {
  const price = numeral(item.price);
  return (
    <>
      <Card
        className="product-item"
        style={{ backgroundColor: colors[index % colors.length] }}
      >
        <div className="product-item__img ">
          <Link to={"/shop/" + item.id}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="img-fluid"
              src={item.imgThumb}
            />
          </Link>
        </div>

        <Card.Body className="product-item__des">
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
              {price.format("0,0[.]00")}đ
            </Card.Text>
            <motion.span
              whileHover={{ scale: 1.1 }}
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
