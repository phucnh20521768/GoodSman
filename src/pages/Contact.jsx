import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/contact.css";
import axios from "axios";
import { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";

function Contact() {
    var isVerified = useRef(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    var submitBtn = function (e) {
        if (isVerified.current) {
            alert("Đã gửi thành công!");
            window.scrollTo(0, 0);
            window.grecaptcha.reset();
            var date = new Date().toLocaleString() + "";
            const data = {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Comment: comment,
                Time: date,
            };
            console.log(data);
            axios.post(
                "https://sheet.best/api/sheets/54f253e5-2881-4496-8ed4-a16c8dab6fb2",
                data
            );  
            setFirstName("");
            setLastName("");
            setEmail("");
            setComment("");
            isVerified.current = false;
            e.preventDefault();
        }
    };
    var checkCaptcha = function (e) {
        var x = document.getElementById("error");
        if (!isVerified.current) {
            x.style.display = "block";
            e.preventDefault();
        } else {
            x.style.display = "none";
            submitBtn(e);
        }
    };
    var onChangeCaptcha = function () {
        isVerified.current = true;
        var x = document.getElementById("error");
        x.style.display = "none";
    };
    return (
        <Helmet title="Liên hệ">
            <Container>
                <Container id="content">
                    <div>
                        <Breadcrumb className="bread_contact">
                            <Breadcrumb.Item href="home">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>Liên hệ</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <hr className="line-con"></hr>
                    <p className="fw-bold mb-5 pt-4">
                        Để biết thêm thông tin về sản phẩm, giá cả và vận chuyển, xin vui
                        lòng liên hệ với chúng tôi!
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="pb-4 fs-4" htmlFor="">
                                Địa chỉ:
                            </label>
                            <p className="pb-4">
                                Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương
                            </p>
                            <label className="pb-4 fs-4" htmlFor="">
                                Số điện thoại:
                            </label>
                            <p className="pb-4">0235566xxx - Việt Nam</p>
                            <label className="pb-4 fs-4" htmlFor="">
                                Số fax:
                            </label>
                            <p className="pb-4">0235566xxx - Việt Nam</p>
                            <label className="pb-4 fs-4" htmlFor="">
                                Email:
                            </label>
                            <p className="pb-4">info@inwoodshop.com</p>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2">
                                <iframe
                                    title="domA"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1229824564284!2d106.80410191533453!3d10.878249660279236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2zS8O9IHTDumMgeMOhIEtodSBBIMSQSCBRdeG7kWMgZ2lhIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1673957670991!5m2!1svi!2s"
                                    width="100%"
                                    height="200"
                                ></iframe>
                            </div>
                            <div className="p-2">
                                <iframe
                                    title="domB"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.073052125916!2d106.78039021533458!3d10.88204836020959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1673958470765!5m2!1svi!2s"
                                    width="100%"
                                    height="200"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <form onSubmit={checkCaptcha} className="contact-form" GET>
                        <div className="row">
                            <div className="col-md-4 mb-2 p-2">
                                <input
                                    id="first-name"
                                    type="text"
                                    class="form-control contact-input border-dark border-0 border-bottom"
                                    maxLength="255"
                                    required
                                    placeholder="Họ"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                ></input>
                            </div>
                            <div className="col-md-4 mb-2 p-2">
                                <input
                                    id="last-name"
                                    type="text"
                                    class="form-control contact-input border-dark border-0 border-bottom"
                                    maxLength="255"
                                    required
                                    placeholder="Tên"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                ></input>
                            </div>
                            <div className="col-md-4 mb-2 p-2">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control contact-input border-dark border-0 border-bottom"
                                    maxLength="255"
                                    required
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                ></input>
                            </div>
                            <div className="p-2">
                                <textarea
                                    id="comment"
                                    rows="1"
                                    class="form-control contact-input my-2 border-dark border-0 border-bottom resize-vertical"
                                    number="3"
                                    required
                                    placeholder="Ghi chú"
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                ></textarea>
                            </div>
                        </div>
                        <ReCAPTCHA
                            sitekey="6LdmfHcmAAAAAIkg1veGGtx-3R8uVZx7ZYFjckOa"
                            onChange={onChangeCaptcha}
                        />
                        <span className="error" id="error">
                            Vui lòng xác minh bạn không phải là robot
                        </span>
                        <div className="div-submit-contact">
                            <input
                                type="submit"
                                className="btn btn-primary btn-lg contact-submit"
                                value="Gửi"
                            ></input>
                        </div>
                    </form>
                </Container>
            </Container>
        </Helmet>
    );
}

export default Contact;
