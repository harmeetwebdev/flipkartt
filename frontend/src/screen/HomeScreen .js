import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload }
        default:
            return state;

    }
}
export default function HomeScreen() {
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: ''
    }
    )

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('/api/product');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }


        }
        fetchData()
    }, []);
    return (
        <div>
            <h1>Featured product</h1>
            <div className='products'>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <Row>
                        {products.map(product => (
                            <Col sm={6} lg={3} className="mb-1" key={product.slug}>
                                <Product product={product}></Product>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    )
}
