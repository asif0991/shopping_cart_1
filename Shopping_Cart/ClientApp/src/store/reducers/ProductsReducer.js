import {SET_ALL_PRODUCTS} from "../actions/productsAction";

export const defaultState = {
    products: ""
}

export const ProductsReducer = (state = defaultState, action) => {
    if (!action) 
        return state;
    
    switch (action.type) {

        case SET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}
