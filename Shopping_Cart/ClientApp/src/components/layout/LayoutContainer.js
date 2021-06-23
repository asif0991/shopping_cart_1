import React from 'react'
import Header from '../header/Header';
import ProductsContainer from '../products/productsContainer';
import CartContainer from '../cart/CartContainer';
import Layout from '../Layout';
import {Container, Row, Col} from 'reactstrap';
import { useDispatch } from 'react-redux';
import {updateCartAction} from '../../store/actions/productsAction';

const LayoutContainer = (props) => {

    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(updateCartAction(product));
    }

    return (
        <Container>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row>
                <Col sm="10"><ProductsContainer addToCart={addToCart}/></Col>
                <Col sm="2"><CartContainer/></Col>
            </Row>
        </Container>
    )
}

export default LayoutContainer;
