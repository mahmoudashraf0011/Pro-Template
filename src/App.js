
import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter,Routes,Route, HashRouter } from "react-router-dom";
import HomePage from "./Pages/JS/Home/HomePage";
import Navbar from "./Components/JS/Utility/Navbar";
import Footer from "./Components/JS/Utility/Footer";
import LoginPage from "./Pages/JS/Auth/LoginPage";
import RegsiterPage from "./Pages/JS/Auth/RegsiterPage";
import AllcategoryPage from "./Pages/JS/Category/AllcategoryPage";
import AllbrandPage from "./Pages/JS/Brand/AllbrandPage";
import ShopProductsPage from "./Pages/JS/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/JS/Products/ProductDetailsPage";
import CartPage from "./Pages/JS/Cart/CartPage";
import CheckoutPage from "./Pages/JS/Checkout/CheckoutPage";
import AdminAllproductsPage from "./Pages/JS/Admin/AdminAllproductsPage";
import AdminAllordersPage from "./Pages/JS/Admin/AdminAllordersPage";
import AdminOrdersDetailsPage from "./Pages/JS/Admin/AdminOrdersDetailsPage";
import AdminAddBrandPage from "./Pages/JS/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/JS/Admin/AdminAddCategoryPage";
import AdminAddSubcategoryPage from "./Pages/JS/Admin/AdminAddSubcategoryPage";
import AdminAddProductPage from "./Pages/JS/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/JS/User/UserAllOrdersPage";
import UserFavouritePage from "./Pages/JS/User/UserFavouritePage";
import UserAddressPage from "./Pages/JS/User/UserAddressPage";
import UserEditAddressPage from "./Pages/JS/User/UserEditAddressPage";
import UserAddAddressPage from "./Pages/JS/User/UserAddAddressPage";
import UserProfilePage from "./Pages/JS/User/UserProfilePage";
import UserEditProfilePage from "./Pages/JS/User/UserEditProfilePage";
import AdminEditProductPage from "./Pages/JS/Admin/AdminEditProductPage";
import AdminAllCategoryPage from "./Pages/JS/Admin/AdminAllCategoryPage";
import AdminEditCategoryPage from "./Pages/JS/Admin/AdminEditCategoryPage";
import AdminAllBrandsPage from "./Pages/JS/Admin/AdminAllBrandsPage";
import AdminEditBrandPage from "./Pages/JS/Admin/AdminEditBrandPage";
import AdminAllSubcatePage from "./Pages/JS/Admin/AdminAllSubcatePage";
import AdminEditSubCategoryPage from "./Pages/JS/Admin/AdminEditSubCategoryPage";
import ProductsByCategoryPage from "./Pages/JS/Products/ProductsByCategoryPage";
import ProductsByBrandPage from "./Pages/JS/Products/ProductsByBrandPage";
import ForgetPassPage from "./Pages/JS/Auth/ForgetPassPage";
import AdminAddCouponPage from "./Pages/JS/Admin/AdminAddCouponPage";
import AdminAllCouponsPage from "./Pages/JS/Admin/AdminAllCouponsPage";
import AdminEditCouponPage from "./Pages/JS/Admin/AdminEditCouponPage";
import VeriftyPassPage from "./Pages/JS/Auth/VeriftyPassPage";
import RestPassPage from "./Pages/JS/Auth/RestPassPage";
import ProductsBySubCategoryPage from "./Pages/JS/Products/ProductsBySubCategoryPage";
import AdminAllReviewsPage from "./Pages/JS/Admin/AdminAllReviewsPage";
import AdminAllUsersPage from "./Pages/JS/Admin/AdminAllUsersPage";
import AdminCreateUserPage from "./Pages/JS/Admin/AdminCreateUserPage";
import AdminEditUserProfilePage from "./Pages/JS/Admin/AdminEditUserProfilePage";
import AdminEditUserPassPage from "./Pages/JS/Admin/AdminEditUserPassPage";
function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegsiterPage />}/>
          <Route path="/user/forget-password" element={<ForgetPassPage />}/>  
          <Route path="/user/verifty-password" element={<VeriftyPassPage />}/>  
          <Route path="/user/rest-password" element={<RestPassPage />}/>  
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/order/paymentmethod" element={<CheckoutPage />}/>
          <Route path="/allcategory" element={<AllcategoryPage />}/>
          <Route path="/allbrand" element={<AllbrandPage />}/>
          <Route path="/allproducts" element={<ShopProductsPage />}/>
          <Route path="/allproducts/:id" element={<ProductDetailsPage />}/>
          <Route path="/allproduct/category/:id" element={<ProductsByCategoryPage />}/> 
          <Route path="/allproduct/subcategory/:id" element={<ProductsBySubCategoryPage />}/> 
          <Route path="/allproduct/brand/:id" element={<ProductsByBrandPage />}/>       
          <Route path="/admin/allproducts" element={<AdminAllproductsPage />}/>
          <Route path="/admin/add-product" element={<AdminAddProductPage />}/>
          <Route path="/admin/edit-product/:id" element={<AdminEditProductPage />}/>
          <Route path="/admin/allorders" element={<AdminAllordersPage />}/>
          <Route path="/admin/allcategories" element={<AdminAllCategoryPage />}/>
          <Route path="/admin/allsubcategories" element={<AdminAllSubcatePage />}/>
          <Route path="/admin/orders/:id" element={<AdminOrdersDetailsPage />}/>
          <Route path="/admin/allbrands" element={<AdminAllBrandsPage />}/>
          <Route path="/admin/allreviews" element={<AdminAllReviewsPage />}/>
          <Route path="/admin/add-brand" element={<AdminAddBrandPage />}/>
          <Route path="/admin/edit-brand/:id" element={< AdminEditBrandPage />}/>         
          <Route path="/admin/add-category" element={<AdminAddCategoryPage />}/>
          <Route path="/admin/edit-category/:id" element={<AdminEditCategoryPage />}/>
          <Route path="/admin/add-subcategory" element={<AdminAddSubcategoryPage />}/>
          <Route path="/admin/edit-subcategory/:id" element={<AdminEditSubCategoryPage />}/>
          <Route path="/admin/add-coupon" element={<AdminAddCouponPage />}/> 
          <Route path="/admin/edit-coupon/:id" element={<AdminEditCouponPage />}/> 
          <Route path="/admin/allcoupons" element={<AdminAllCouponsPage />}/> 
          <Route path="/admin/allusers" element={<AdminAllUsersPage />}/> 
          <Route path="/admin/create-user" element={<AdminCreateUserPage/>}/> 
          <Route path="/admin/edit-user-profile/:id" element={<AdminEditUserProfilePage/>}/> 
          <Route path="/admin/change-user-pass/:id" element={<AdminEditUserPassPage/>}/> 
          <Route path="/admin/creat-user" element={<AdminCreateUserPage/>}/> 
          <Route path="/user/allorders" element={<UserAllOrdersPage />}/>     
          <Route path="/user/favourite" element={<UserFavouritePage />}/>     
          <Route path="/user/favourite" element={<UserFavouritePage />}/>     
          <Route path="/user/address" element={<UserAddressPage />}/>     
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />}/>     
          <Route path="/user/add-address" element={<UserAddAddressPage />}/>     
          <Route path="/user/profile" element={<UserProfilePage />}/>     
          <Route path="/user/edit-profile/:id" element={<UserEditProfilePage />}/>  
         
    
          

        </Routes>
      </BrowserRouter>
      <Footer />
     
    </div>


  );
}

export default App;
