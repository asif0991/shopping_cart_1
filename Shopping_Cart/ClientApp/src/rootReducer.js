import { combineReducers } from "redux";
import {ProductsReducer} from './store/reducers/ProductsReducer';


export default combineReducers({
    products : ProductsReducer
})