import React from 'react'
import Header from '../header/Header';
import ProductsContainer from '../products/productsContainer';
import CartContainer from '../cart/CartContainer';
import Layout from '../Layout';
import {Container, Row, Col} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {updateCartAction} from '../../store/actions/productsAction';

const LayoutContainer = (props) => {

    const Cart = useSelector(state => state.products.cart)


    return (
        <Container>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row>
                <Col sm="10"><ProductsContainer /></Col>
                <Col sm="2"><CartContainer Cart= {Cart}/></Col>
            </Row>
        </Container>
    )
}

export default LayoutContainer;
