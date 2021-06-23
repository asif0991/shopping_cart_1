import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import '../products/products.css';

const CartContainer = () => {

    const Cart = useSelector(state => state.products.cart)
    const totalPrice = useSelector(state => state.products.totalCartPrice)

    return (
        <aside>
            <div class="summary">
                <div class="summary-total-items">
                    <span class="total-items"></span>
                    Items in your Cart</div>
                <div class="summary-subtotal">
                    {Cart && Cart.map(item => {
                        return (
                            <div>
                                <div class="subtotal-title">{item.name}</div>
                                <div class="subtotal-value final-value" id="basket-subtotal">{item.price}</div>
                            </div>

                        )
                    })
}

                </div>

                <div class="summary-total">
                    <div class="total-title">Total</div>
                    <div class="total-value final-value" id="basket-total">{totalPrice}</div>
                </div>
                <div class="summary-checkout">
                    <button class="checkout-cta">Checkout</button>
                </div>
            </div>
        </aside>
    )
}

export default CartContainer;
