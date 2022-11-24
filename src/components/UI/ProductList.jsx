import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <>
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
}

export default ProductList;