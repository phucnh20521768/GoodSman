import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "../../styles/testimonial.css";
import Arrow from "./Arrow";

function Testimonial({ data }) {
  return (
    <>
      <Carousel
        variant="dark"
        className="testimonnial"
        indicators={false}
        nextIcon={
          <Arrow>
            <i class="ri-arrow-right-line"></i>
          </Arrow>
        }
        prevIcon={
          <Arrow>
            <i class="ri-arrow-left-line"></i>
          </Arrow>
        }
      >
        {data.map((item, index) => (
          <Carousel.Item key={index} className="px-5">
            <Row className="align-items-center p-sm-5 ">
              <Col lg="6" sx="12" className=" text-center">
                <img
                  className="img-fluid testimonnial__avatar"
                  src={item.imgUrl}
                  alt="avar"
                />
              </Col>
              <Col className="testimonnial__content" lg="6" sx="12">
                <p className="text-muted pe-lg-5 ps-lg-1 testimonnial__comment">
                  <i class="ri-double-quotes-l"> </i>
                  {item.comment}
                </p>
                <div className="my-1">
                  <StarRatings
                    rating={item.rate}
                    starRatedColor="#FFC107"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="1px"
                  />
                </div>
                <h5 className="mt-lg-3 fw-bold">{item.name}</h5>
                <p className="my-3">{item.job}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Testimonial;
