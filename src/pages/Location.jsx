import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/location.css";
import LocationCard from "../components/UI/LocationCard";
import locationData from "../assets/data/location";
import { Breadcrumb } from "react-bootstrap";

function Location() {
    return (
        <Container>
            <div>
                <Breadcrumb className="bread">
                    <Breadcrumb.Item href="home">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item active>Địa chỉ</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <hr className="line-loc"></hr>
            <Row className="m-3">
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

