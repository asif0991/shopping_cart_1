import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateCartAction, setUpdateCartTotal} from '../../store/actions/productsAction';

const ProductsContainer = (props) => {

    const Products = useSelector(state => state.products.products)
    const total = useSelector(state => state.products.totalCartPrice)

    const dispatch = useDispatch();

    const addToCart = (product, i) => {
        debugger

        dispatch(setUpdateCartTotal(total + product.price));
        dispatch(updateCartAction(product));
    }

    return (
        <div className="grid-container">
            {Products && Products.map((item, i) => {
                return (
                    <div className="">
                        <span>{item.name}</span>
                        <br/>
                        <span>{item.price}</span>
                        <img
                            style={{
                            width: "40px",
                            height: "40px"
                        }}
                            src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"/>
                        <button onClick={addToCart.bind(i, item)}>Add to Cart</button>
                    </div>
                )
            }, this)
}

        </div>
    )
}

export default ProductsContainer;
