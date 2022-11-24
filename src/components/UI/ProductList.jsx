import React from "react";
import ProductCard from "./ProductCard";
import { LeftArrow, RightArrow } from "../UI/Arrow";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Arrows = () => (
  <div className="d-flex me-4 mt-3 justify-content-end">
    <LeftArrow /> <RightArrow />
  </div>
);

function ProductList({ data }) {
  return (
    <ScrollMenu Footer={Arrows}>
      {data.map((item, index) => (
        <ProductCard itemId={item.id} key={item.id} item={item} index={index} />
      ))}
    </ScrollMenu>
  );
}

export default ProductList;
