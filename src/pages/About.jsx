import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "../styles/about.css";
import group from '../assets/images/group.png'
function About() {


    return (
        <Container>
            <div className="d-flex justify-content-around align-items-center row" >
                <div className='col-md-4'>
                    <hr id='l1' className='line-header' />
                </div>
                <div className='col-md-4'>
                    <h1 className='p-2 fw-bold text-center title m-h1'>CÔNG TY TNHH INWOOD</h1>
                </div>
                <div className='col-md-4'>
                    <hr id='l2' className='line-header' />
                </div>
            </div>
            <Container>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-8'>
                        <div className='fw-bold waviy'>
                            <span style={{ "--i": 1 }}>C</span>
                            <span style={{ "--i": 2 }}>H</span>
                            <span style={{ "--i": 3 }}>Ú</span>
                            <span style={{ "--i": 4 }}>N</span>
                            <span style={{ "--i": 5 }}>G</span>
                            <span style={{ "--i": 6 }} className="left">T</span>
                            <span style={{ "--i": 7 }}>Ô</span>
                            <span style={{ "--i": 8 }}>I</span>
                            <span style={{ "--i": 9 }} className="left">L</span>
                            <span style={{ "--i": 10 }}>À</span>
                            <span style={{ "--i": 11 }} className="left">A</span>
                            <span style={{ "--i": 12 }}>I</span>
                        </div>
                        <hr className='line-content' />
                        <p className='text-justify'>Được thành lập từ năm 2013 bởi những chàng trai 9x đầy nhiệt huyết và đam mê công nghệ, với xuất phát điểm là số vốn ít ỏi 8,5 triệu đồng cho một cửa hàng laptop nhỏ trên đường Láng (Hà Nội), cho đến nay ThinkGroup đã phát triển và vận hành nhiều cửa hàng lớn nhỏ bán lẻ máy tính và phụ kiện công nghệ trên hai miền đất nước dưới thương hiệu ThinkPro, trở thành đơn vị tiên phong trong việc thay đổi mô hình bán lẻ và trải nghiệm công nghệ tại Việt Nam với chuỗi cửa hàng tiêu chuẩn mới - Dạo Bước Công Nghệ.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <img  className='img-fluid m-img' src={group} />
                    </div>
                </div>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-4'>
                        <img className='img-fluid m-img' src={group} />
                    </div>
                    <div className='col-md-8'>
                        <div className='text-end fw-bold waviy'>
                            <span style={{ "--i": 2 }}>S</span>
                            <span style={{ "--i": 3 }}>Ứ</span>
                            <span style={{ "--i": 4 }} className="left">M</span>
                            <span style={{ "--i": 5 }}>Ệ</span>
                            <span style={{ "--i": 6 }}>N</span>
                            <span style={{ "--i": 7 }}>H</span>
                            <span style={{ "--i": 8 }} className="left">C</span>
                            <span style={{ "--i": 9 }}>Ủ</span>
                            <span style={{ "--i": 10 }}>A</span>
                            <span style={{ "--i": 11 }} className="left">C</span>
                            <span style={{ "--i": 12 }}>H</span>
                            <span style={{ "--i": 13 }}>Ú</span>
                            <span style={{ "--i": 14 }}>N</span>
                            <span style={{ "--i": 15 }}>G</span>
                            <span style={{ "--i": 16 }} className="left">T</span>
                            <span style={{ "--i": 17 }}>Ô</span>
                            <span style={{ "--i": 18 }}>I</span>
                        </div>
                        <hr className='line-content align-end' />
                        <p className='text-justify'>ThinkPro với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.
                        </p>
                    </div>

                </div>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-8'>
                        <div className='fw-bold waviy'>
                            <span style={{ "--i": 1 }}>T</span>
                            <span style={{ "--i": 2 }}>Ầ</span>
                            <span style={{ "--i": 3 }}>M</span>
                            <span style={{ "--i": 4 }} className="left">N</span>
                            <span style={{ "--i": 5 }}>H</span>
                            <span style={{ "--i": 6 }}>Ì</span>
                            <span style={{ "--i": 7 }}>N</span>
                            <span style={{ "--i": 8 }} className="left">C</span>
                            <span style={{ "--i": 9 }}>Ủ</span>
                            <span style={{ "--i": 10 }}>A</span>
                            <span style={{ "--i": 11 }} className="left">C</span>
                            <span style={{ "--i": 12 }}>H</span>
                            <span style={{ "--i": 13 }}>Ú</span>
                            <span style={{ "--i": 14 }}>N</span>
                            <span style={{ "--i": 15 }}>G</span>
                            <span style={{ "--i": 16 }} className="left">T</span>
                            <span style={{ "--i": 17 }}>Ô</span>
                            <span style={{ "--i": 18 }}>I</span>
                        </div>
                        <hr className='line-content' />
                        <p className='text-justify'>ThinkPro với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid m-img' src={group} />
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default About