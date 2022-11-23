import React from 'react'
import { Card } from 'react-bootstrap'
import cardimg from '../../assets/data/48550-2-chair-download-free-hq-image 1.png'
import '../../styles/product_card.css'

function ProductCard() {
  return (
    <>
    <Card  className='product-item'>
      <Card.Img className='product-item__img img-fluid' variant="top" src={cardimg} />
      <Card.Body className='product-item__des'>
        <Card.Title className='product-item__des--title'>Macbook Pro 14 inch (2021)</Card.Title>
        <Card.Text className='product-item__des--value'>
            44.444.444 (VNĐ)
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard