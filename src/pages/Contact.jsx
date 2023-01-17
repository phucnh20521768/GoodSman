import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "../styles/contact.css";

function Contact() {
  return (
    <Container>
        <Container id='content'>
            <p className='fw-bold mb-5 pt-4'>Để biết thêm thông tin về sản phẩm, giá cả và vận chuyển, xin vui lòng liên hệ với chúng tôi!</p>
            <div className='row'>
                <div className='col-md-6'>
                    <label className='pb-4 fs-4' htmlFor="">Địa chỉ:</label>
                    <p className='pb-4'>Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương</p>
                    <label className='pb-4 fs-4' htmlFor="">Số điện thoại:</label>
                    <p className='pb-4'>0235566xxx - Việt Nam</p>
                    <label className='pb-4 fs-4' htmlFor="">Số fax:</label>
                    <p className='pb-4'>0235566xxx - Việt Nam</p>
                    <label className='pb-4 fs-4' htmlFor="">Email:</label>
                    <p className='pb-4'>info@inwoodshop.com</p>
                </div>
                <div className='col-md-6'>
                <iframe className='py-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1229824564284!2d106.80410191533453!3d10.878249660279236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2zS8O9IHTDumMgeMOhIEtodSBBIMSQSCBRdeG7kWMgZ2lhIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1673957670991!5m2!1svi!2s" width="100%" height="200" ></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.073052125916!2d106.78039021533458!3d10.88204836020959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1673958470765!5m2!1svi!2s" width="100%" height="200"></iframe>
                </div>
            </div>
        </Container>
        <Container>
            <form action="" className='contact-form'>
            <div className='row'>
                <div className='col-md-4 mb-2 p-2'>
                    <input type="text" class="form-control border-dark border-0 border-bottom" maxLength='255' required placeholder="Họ"></input>
                </div>
                <div className='col-md-4 mb-2 p-2'>
                    <input type="text" class="form-control border-dark border-0 border-bottom" maxLength='255' required  placeholder="Tên"></input>
                </div>
                <div className='col-md-4 mb-2 p-2'>
                    <input type="email" class="form-control border-dark border-0 border-bottom" maxLength='255' required placeholder="Email"></input>
                </div>
                <div className='p-2'>
                    <textarea rows="1" class="form-control my-2 border-dark border-0 border-bottom resize-vertical" number='3' required placeholder="Ghi chú"></textarea>
                </div>
            </div>
            <div className='div-submit-contact'>
                <input type='submit' className='submit-contact' value='Gửi'></input>
            </div>
            </form>
        </Container>
    </Container>
  )
}

export default Contact