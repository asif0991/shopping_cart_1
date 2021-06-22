import React from 'react'
import Header from '../header/Header';
import ProductsContainer from '../products/productsContainer';
import CartContainer from '../cart/CartContainer';

const LayoutContainer = (props) => {

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="row"><Header/></div>
                <div className="row">
                    <div className="col-md-10"><ProductsContainer/></div>
                    <div className="col-md-2" style={{marginTop:"10px"}}><CartContainer/></div>
                </div>
            </div>
        </div>

    )

}

export default LayoutContainer;
