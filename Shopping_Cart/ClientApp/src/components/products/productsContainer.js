import React from 'react'
import {useSelector} from 'react-redux'

const ProductsContainer = (props) => {

    const Products = useSelector(state => state.products.products)
    debugger
    return (
        <div className="grid-container">
            {Products && Products.map(item => {
                return (
                    <div className="">
                        <span>{item.name}</span>
                        <br/>
                        <img style={{width:"50px", height:"50px"}} src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"/>
                        <button onClick={props.addToCart(item)}>Add to Cart</button>
                    </div>
                )
            })
}

        </div>
    )
}

export default ProductsContainer;
