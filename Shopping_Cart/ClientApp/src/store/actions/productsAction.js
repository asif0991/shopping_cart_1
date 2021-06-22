import {getAllProductsApi} from "../../api/Api"

//Action Types
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";

//Actions

export const setAllProductAction = (payload) => {
    return {type: "SET_ALL_PRODUCTS", payload}
}

//Action Creators

export const getAllProductAction = () => {
    return (dispatch, getState) => {
        debugger;
        let promise = getAllProductsApi();
        promise.then(res => {
            debugger;
            dispatch(setAllProductAction("data Dispatched"))
            console.log("Data Loaded")
        })
    }
}