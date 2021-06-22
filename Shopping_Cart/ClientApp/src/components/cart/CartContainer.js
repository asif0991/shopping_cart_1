import React from 'react'

const CartContainer = () => {
    return (
        <div className="row" style={{
            background: "wheat"
        }}>
            <div className="col-sm-12">
                <span>Your cart has following Items</span>
                <div className="row">
                    <div className="col-sm-8">Items</div>
                    <div className="col-sm-4">Quantity</div>
                </div>
                <div className="row">
                    <div className="col-sm-8">Items</div>
                    <div className="col-sm-4">Quantity</div>
                </div>
                <div className="row">
                    <div className="col-sm-8">Items</div>
                    <div className="col-sm-4">Quantity</div>
                </div>
                <div className="row">
                    <div className="col-sm-8">Items</div>
                    <div className="col-sm-4">Quantity</div>
                </div>
                <br/>
                <button>Place Order</button>
            </div>

        </div>
    )
}

export default CartContainer;
