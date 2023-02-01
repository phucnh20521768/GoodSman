import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocationCard from "../components/UI/LocationCard";
import locationData from "../assets/data/location";

function Location () {
    return (
        <Container>
            <Row className="m-5">
                {locationData.map((item, index) => (
                  <Col lg="4" className="p-3" key={index}>
                      <LocationCard item={item} />
                  </Col>
                ))}
          </Row>
        </Container>
    );
}

export default Location;