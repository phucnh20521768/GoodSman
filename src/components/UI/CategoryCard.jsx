import React from "react";
import "../../styles/category_card.css";
import sofa from "../../assets/images/sofa.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="shadow-lg text-center position-relative category-card"
    >
      <div
        className="category-card__bg"
        style={{ backgroundImage: `url(${item.imgUrl})` }}
      ></div>
      <div className="category-card__overlay"></div>
      <h1 className="text-white display-5 mb-4 text-uppercase">
        {item.categoryName}
      </h1>
      <Link>
        <button className="btn btn-explore">XEM</button>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;
