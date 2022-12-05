import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default function Product(props) {
    const { product } = props
    return (
        <Card className='product' key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title >{product.name}</Card.Title></Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text><strong>Rs. {product.price}₹</strong></Card.Text>
                <Button variant='primary' >Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
