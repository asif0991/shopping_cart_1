import {getAllProductsApi, getUserProfile, checkUserApi, updateCartApi} from "../../api/Api";

//Action Types
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_ALL_PRODUCT = "SET_ALL_PRODUCT";
export const SET_IS_LOADER = "SET_IS_LOADER";
export const UPDATE_CART = "UPDATE_CART";
export const UPDATE_TOTAL_CART_PRICE = "UPDATE_TOTAL_CART_PRICE";
//Actions

export const setAllProductAction = (payload) => {
    return {type: SET_ALL_PRODUCTS, payload}
}

export const setLoggedInUSerInfo = (payload) => {
    return {type: SET_USER_INFO, payload}
}

export const setAllProducts = (payload) => {
    return {type: SET_ALL_PRODUCT, payload}
}

export const setIsLoading = (payload) => {
    return {type: SET_IS_LOADER, payload}
}

export const setUpdateCart = (payload) => {
    return {type: UPDATE_CART, payload}
}

export const setUpdateCartTotal = (payload) => {
    return {type: UPDATE_TOTAL_CART_PRICE, payload}
}
//Action Creators

export const getAllProductAction = () => {
    return (dispatch, getState) => {
        debugger;
        let promise = getAllProductsApi();
        promise.then(res => {
            debugger;
            dispatch(setAllProductAction(res.data))
            console.log("Data Loaded")
        })
    }
}

export const setCheckUserAction = () => {
    return (dispatch, getState) => {

        let promise = checkUserApi();
        promise.then(res => {
            debugger;

            if (res.data && res.data.id > 0) {
                dispatch(setLoggedInUSerInfo(res.data))
            }
            dispatch(getAllProductAction())
            dispatch(setIsLoading(false))
        })
    }
}

export const setLoginAction = (uName, pwd) => {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        let promise = getUserProfile(uName, pwd);
        promise.then(res => {
            debugger;
            dispatch(setLoggedInUSerInfo(res.data))
            dispatch(getAllProductAction())
        })

    }
}

export const updateCartAction = (prod) => {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        debugger;
        let carts = getState().products.cart;
        if (carts == undefined) 
            carts = [];
        
        carts.push(prod);
        dispatch(setUpdateCart(carts))
        dispatch(getAllProductAction())
        // let promise = updateCartApi(id, prod); promise.then(res => {     debugger;
        //  dispatch(setUpdateCart(res.data))     dispatch(getAllProductAction()) })

    }
}