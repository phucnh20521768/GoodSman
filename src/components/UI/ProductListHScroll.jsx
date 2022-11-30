import React from "react";
import ProductCard from "./ProductCard";
import { LeftArrow, RightArrow } from "./Arrow";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Arrows = () => (
  <div className="d-flex me-4 mt-3 justify-content-end">
    <LeftArrow /> <RightArrow />
  </div>
);

function ProductListHScroll({ data }) {
  return (
    <ScrollMenu scrollContainerClassName="py-4 px-2 scrollbar" Footer={Arrows}>
      {data.map((item, index) => (
        <ProductCard itemId={item.id} key={item.id} item={item} index={index} />
      ))}
    </ScrollMenu>
  );
}

export default ProductListHScroll;
