import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import Divide from "../components/UI/Divide";
import "../styles/products.css";
import productData from "../assets/data/product";
import categoryData from "../assets/data/category";
import StarRatings from "react-star-ratings";
import ProductList from "../components/UI/ProductList";
import { useState, useEffect } from "react";
import Enumerable from 'linq'
import PriceSlider from '../components/UI/PriceSlider'

function Products() {
  const [products, setProducts] = useState(productData);
  const categories = categoryData;

  const [sort, setSort] = useState({ key: null, value: null });
  const [filterCategory, setCategory] = useState(null);
  const [filterPrice, setRangePrice] = useState({ min: 0, max: Number.MAX_VALUE });
  const [filterRating, setRating] = useState(0);

  const handleSort = (e) => {
    const typeFilter = e.target.dataset['filter']
    const valueFilter = e.target.value
    setSort({ key: typeFilter, value: valueFilter })

  }

  const handleFilterCategory = (e) => {
    const typeFilter = e.target.dataset['filter']
    setCategory(typeFilter)
  }

  const handleFilterPrice = (e) => {
    const min = parseFloat(document.getElementById('floatingInputFrom').value)
    const max = parseFloat(document.getElementById('floatingInputTo').value)
    setRangePrice({ min: isNaN(min) ? 0 : min, max: isNaN(max) ? Number.MAX_VALUE : max })
  }

  const handleFilterRating = (e) => {
    const typeFilter = e.target.dataset['filter']
    setRating(typeFilter)
  }

  const updateView = () => {
    var filter = Enumerable.from(productData)
      .where(item => filterCategory === null ? true : item.category === filterCategory)
      .where(item => item.price >= filterPrice.min && item.price <= filterPrice.max)
      .where(item => item.avgRating >= filterRating)
    switch (sort.key) {
      case "title":
        if (sort.value === 'title-ascending')
          filter = filter.orderBy(item => item.productName)
        else if (sort.value === 'title-descending')
          filter = filter.orderByDescending(item => item.productName)
        break;
      case "price":
        if (sort.value === 'price-ascending')
          filter = filter.orderBy(item => item.price)
        else if (sort.value === 'price-descending')
          filter = filter.orderByDescending(item => item.price)
        break;
      default:
        break;
    }
    setProducts(filter.toArray())
  }

  useEffect(updateView)

  return (
    <Helmet title={"Products"}>
      <section className="my-3">
        <Container>
          <Row>
            <Col xs="auto">
              <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">Product</Breadcrumb.Item>
              </Breadcrumb>
              <Divide />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="products__filter">
        <Container>
          <Row>
            <Col sm="3" className="">
              <div className="filter-card mb-3">
                <h5 className="filter-title">Shop by category</h5>
                <div>
                  <ul>
                    {categories.map((item, index) => (
                      <li key={index} className="text-capitalize" onClick={handleFilterCategory} data-filter={item.categoryName}>
                        {item.categoryName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h5 className="filter-title">Filter by</h5>
                <div>
                  <h6 className="sub-title">Price</h6>
                  <div className="col">
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInputFrom"
                          placeholder="From"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInputTo"
                          placeholder="To"
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary opacity-100 py-2 px-4" onClick={handleFilterPrice}>
                          <p>Đi</p>
                        </button>
                      </div>
                    </div>
                    <div>
                      <PriceSlider props={{ min: 0, max: 150 }} />
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="sub-title">Avg. Customer Review</h6>
                  <div className="">
                    <ul>
                      {Array.from({ length: 5 }, (_, i) => i + 1).map(
                        (item, index) => (
                          <li
                            key={index}
                            className="d-flex gap-1 align-items-center"
                            onClick={handleFilterRating}
                            data-filter={item}
                          >
                            <span>
                              <StarRatings
                                rating={item}
                                starRatedColor="#ffa41c"
                                numberOfStars={5}
                                name="rating"
                                starDimension="24px"
                                starSpacing="2px"
                                svgIconViewBox="0 0 24 24"
                                svgIconPath="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                              />
                            </span>
                            <p className="text-black">&up</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <p className="mb-0 d-block">Lọc theo:</p>
                    <select
                      onChange={handleSort}
                      className="form-control form-select"
                      aria-label=".form-select"
                      data-filter="title"
                    >
                      <option selected>Bảng chữ cái</option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                    </select>
                    <select
                      className="form-control form-select"
                      aria-label=".form-select"
                      onChange={handleSort}
                      data-filter="price"
                    >
                      <option selected>Giá tiền</option>
                      <option value="price-ascending">
                        Giá từ thấp lên cao
                      </option>
                      <option value="price-descending">
                        Giá từ cao xuống thấp
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Row className="my-2 g-3">
                  <ProductList data={products} />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Products;
