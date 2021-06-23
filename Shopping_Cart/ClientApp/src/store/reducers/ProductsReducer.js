import {
    SET_ALL_PRODUCT,
    SET_ALL_PRODUCTS,
    SET_USER_INFO,
    SET_IS_LOADER,
    UPDATE_CART,
    UPDATE_TOTAL_CART_PRICE
} from "../actions/productsAction";

export const defaultState = {
    products: null,
    userProfile: null,
    isLoading: true,
    cart: null,
    totalCartPrice: 0
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
        case SET_USER_INFO:
            return {
                ...state,
                userProfile: action.payload,
                cart: action.payload.cartDetails
            }
        case SET_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case SET_IS_LOADER:
            return {
                ...state,
                isLoading: action.payload
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case UPDATE_TOTAL_CART_PRICE:
            return {
                ...state,
                totalCartPrice: action.payload
            }
        default:
            return state;
    }
}
