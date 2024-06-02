import { combineReducers } from "redux";
import {allCategoryReducer} from "./Category/allCategoryReducer";
import {allBrandReducer} from "./Brand/allBrandReducer"
import { SubCategoryReducer } from "./Subcategory/SubCategoryReducer";
import { ProductReducer } from "./Product/ProductReducer";


export default combineReducers({
    allCategory : allCategoryReducer,
    allBrand :allBrandReducer,
    subCategory:SubCategoryReducer,
    products:ProductReducer
})