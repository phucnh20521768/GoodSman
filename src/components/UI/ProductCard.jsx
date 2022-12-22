import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/product_card.css";
import { Link } from "react-router-dom";
import colors from "../../assets/data/colorCard";
import numeral from "numeral";

import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

function ProductCard({ item, index }) {
  const price = numeral(item.price);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgThumb: item.imgThumb,
      })
    );
    toast.success("Thêm thành công");
  };
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        whileHover={{ scale: 1.2 }}
        className="product-item"
        style={{ backgroundColor: colors[index % colors.length] }}
      >
        <div className="product-item__img ">
          <Link to={"/products/" + item.id}>
            <img className="img-fluid" src={item.imgThumb} />
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
              onClick={addToCart}
              className="product-item__des--icon"
            >
              <i className="ri-add-line"></i>
            </motion.span>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
