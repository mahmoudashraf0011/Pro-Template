import { combineReducers } from "redux";
import {allCategoryReducer} from "./Category/allCategoryReducer";
import {allBrandReducer} from "./Brand/allBrandReducer"
import { SubCategoryReducer } from "./Subcategory/SubCategoryReducer";
import { ProductReducer } from "./Product/ProductReducer";
import { AuthReducer } from "./Auth/AuthReducer";
import { ReviewReducer } from "./Review/ReviewReducer";
import { FavouriteReducer } from "./Favourite/FavouriteReducer";
import { CouponReducer } from "./Coupon/CouponReducer";
import {UserAddressReducer} from "./UserAddress/UserAddressReducer";
import { UserProfileReducer } from "./UserProfile/UserProfileReducer";
import {CartReducer} from "./Cart/CartReducer";
import {OrdersReducer} from "./Orders/OrdersReducer";
import { AdminUseresReducer } from "./AdminUseres/AdminUseresReducer";


export default combineReducers({
    allCategory : allCategoryReducer,
    allBrand :allBrandReducer,
    subCategory:SubCategoryReducer,
    products:ProductReducer,
    authReducer:AuthReducer,
    reviewReducer:ReviewReducer,
    favReducer:FavouriteReducer,
    couponReducer:CouponReducer,
    userAddressReducer:UserAddressReducer,
    userProfileReducer:UserProfileReducer,
    cartRducer:CartReducer,
    ordersReducer:OrdersReducer,
    adminUseresReducer:AdminUseresReducer
})