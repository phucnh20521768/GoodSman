import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "../styles/about.css";
import group from '../assets/images/group.png'
function About() {


    return (
        <Container>
            <div className="d-flex justify-content-around align-items-center" >
                <hr id='l1' className='line-header' />
                <h1 className='p-2 fw-bold'>CÔNG TY TNHH INWOOD</h1>
                <hr id='l2' className='line-header' />
            </div>
            <Container>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-8'>
                        <h1 className='fw-bold'>CHÚNG TÔI LÀ AI</h1>
                        <hr className='line-content' />
                        <p className='text-justify'>Được thành lập từ năm 2013 bởi những chàng trai 9x đầy nhiệt huyết và đam mê công nghệ, với xuất phát điểm là số vốn ít ỏi 8,5 triệu đồng cho một cửa hàng laptop nhỏ trên đường Láng (Hà Nội), cho đến nay ThinkGroup đã phát triển và vận hành nhiều cửa hàng lớn nhỏ bán lẻ máy tính và phụ kiện công nghệ trên hai miền đất nước dưới thương hiệu ThinkPro, trở thành đơn vị tiên phong trong việc thay đổi mô hình bán lẻ và trải nghiệm công nghệ tại Việt Nam với chuỗi cửa hàng tiêu chuẩn mới - Dạo Bước Công Nghệ.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={group} />
                    </div>
                </div>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={group} />
                    </div>
                    <div className='col-md-8'>
                        <h1 className='text-end fw-bold'>SỨ MỆNH CỦA CHÚNG TÔI</h1>
                        <hr className='line-content align-end' />
                        <p className='text-justify'>ThinkPro với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.
                        </p>
                    </div>

                </div>
                <div className='p-5 align-items-center row'>
                    <div className='col-md-8'>
                        <h1 className='fw-bold'>TẦM NHÌN CỦA CHÚNG TÔI</h1>
                        <hr className='line-content' />
                        <p className='text-justify'>ThinkPro với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={group} />
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default About