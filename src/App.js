
import React from "react";
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
function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegsiterPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/order/paymentmethod" element={<CheckoutPage />}/>
          <Route path="/allcategory" element={<AllcategoryPage />}/>
          <Route path="/allbrand" element={<AllbrandPage />}/>
          <Route path="/allproducts" element={<ShopProductsPage />}/>
          <Route path="/allproducts/:id" element={<ProductDetailsPage />}/>
          <Route path="/admin/allproducts" element={<AdminAllproductsPage />}/>
          <Route path="/admin/allorders" element={<AdminAllordersPage />}/>
          <Route path="/admin/orders/:id" element={<AdminOrdersDetailsPage />}/>
          <Route path="/admin/add-brand" element={<AdminAddBrandPage />}/>
          <Route path="/admin/add-category" element={<AdminAddCategoryPage />}/>
          <Route path="/admin/add-subcategory" element={<AdminAddSubcategoryPage />}/>
          <Route path="/admin/add-product" element={<AdminAddProductPage />}/>
          <Route path="/user/allorders" element={<UserAllOrdersPage />}/>     
          <Route path="/user/favourite" element={<UserFavouritePage />}/>     
          <Route path="/user/favourite" element={<UserFavouritePage />}/>     
          <Route path="/user/address" element={<UserAddressPage />}/>     
          <Route path="/user/edit-address" element={<UserEditAddressPage />}/>     
          <Route path="/user/add-address" element={<UserAddAddressPage />}/>     
          <Route path="/user/profile" element={<UserProfilePage />}/>     
          <Route path="/user/edit-profile" element={<UserEditProfilePage />}/>     
        </Routes>
      </HashRouter>
      <Footer />
    </div>


  );
}

export default App;